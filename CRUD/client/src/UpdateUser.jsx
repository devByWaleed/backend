import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateUser = () => {
    // Get id
    const { id } = useParams()

    // States for get data
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()

    // Navigator for component navigation
    const navigate = useNavigate()


    // useEffect to get the data and set to form's fields
    useEffect(() => {
        axios.get(`http://localhost:3001/getUser/${id}`)
            .then(result => {
                console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
            })
            .catch(err => console.log(err))
    }, [])


    // Function to send update request
    const Update = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age })
            .then(result => {
                console.log(result)

                // Navigate back to homepage right after updating data
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Update}>
                    <h2>Add Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control' value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter Age' className='form-control' value={age} onChange={e => setAge(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser
