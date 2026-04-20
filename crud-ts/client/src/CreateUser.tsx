import { useState, type FC } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import type { User } from './types'

const CreateUser: FC<User> = () => {

    // States for get data
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [age, setAge] = useState<number>(0)

    // Navigator for component navigation
    const navigate = useNavigate()


    // Function to send post request
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const result = await axios.post("http://localhost:4000/api/user/create-user", { name, email, age })
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
        <div className="flex h-screen bg-blue-600 justify-center items-center">
            <div className="w-1/2 bg-white rounded-lg p-6 shadow-lg">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-4">Add Student</h2>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium" htmlFor="age">Age</label>
                        <input
                            type="text"
                            id="age"
                            placeholder="Enter Age"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={e => setAge(Number(e.target.value))}
                            value={age}
                        />
                    </div>

                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser
