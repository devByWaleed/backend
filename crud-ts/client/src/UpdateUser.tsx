import React, { useState, useEffect, type FC } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import type { User } from './types'

const UpdateUser: FC<User> = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    // 1. IMPORTANT: Use empty strings as initial state to prevent "controlled/uncontrolled" error
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [age, setAge] = useState<string | number>("") // Allow string for the input field

    // 2. Optimized Fetch with proper fallbacks
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/user/data/${id}`)
                const data = response.data;

                // If the field is null/undefined in DB, set to "" so the input stays controlled
                setName(data.name ?? "");
                setEmail(data.email ?? "");
                setAge(data.age ?? "");
            } catch (err) {
                console.error("Error fetching user data:", err)
            }
        }
        if (id) fetchUserData()
    }, [id])

    const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Construct the object explicitly to ensure no field is undefined
        const updatedUser = {
            name: name,
            email: email,
            age: Number(age)
        }

        try {
            const result = await axios.put(`http://localhost:4000/api/user/update-user/${id}`, updatedUser)

            // Check for result.data.success OR status 200 depending on your backend
            if (result.status === 200 || result.data.success) {
                navigate('/')
            }
        } catch (error) {
            console.error("Update Error:", error);
            alert("Failed to update user.");
        }
    }

    return (
        <div className="flex h-screen bg-blue-600 justify-center items-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg">
                <form onSubmit={handleUpdate}>
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Update Student</h2>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 font-medium text-gray-700">Age</label>
                        <input
                            type="number"
                            placeholder="Enter Age"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                            onChange={e => setAge(e.target.value)}
                            value={age}
                        />
                    </div>

                    <div className="flex gap-2">
                        <button type="submit" className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition">
                            Update
                        </button>
                        <button type="button" onClick={() => navigate('/')} className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser