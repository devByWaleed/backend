import { useState, type FC } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import type { User } from './types'

const CreateUser: FC<User> = () => {

    // States for get data
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [age, setAge] = useState<number>()

    // Navigator for component navigation
    const navigate = useNavigate()


    // Function to send post request
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const result = await axios.post('http://localhost:4000/create-user', { name, email, age })
            console.log(result.data);

            // Navigate back to homepage right after adding data
            if (result.data.success) {
                navigate('/');
            }
        } catch (error) {
            console.error("Error creating user:", error);
        }

    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter Name' className='form-control'
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter Age' className='form-control'
                            onChange={e => setAge(e.target.value)}
                            value={age}
                        />
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser
