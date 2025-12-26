import { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const Navbar = () => {
  const navigate = useNavigate()
  const { userData, backendURL,
    setIsLoggedIn,
    setUserData } = useContext(AppContent)

  const setVerificationOTP = async () => {
    try {
      axios.defaults.withCredentials = true
      const { data } = await axios.post(backendURL + "/api/auth/send-verify-otp")

      if (data.success) {
        navigate("/email-verify")
        toast.success(data.message)
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true
      const { data } = await axios.get(backendURL + "/api/auth/logout")

      data.success && setIsLoggedIn(false)
      data.success && setUserData(false)
      navigate("/")
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sm:px-12">
      {/* Logo Section */}
      <img
        src={assets.logo}
        alt="Logo"
        className="w-24 transition-transform duration-300 cursor-pointer sm:w-32 hover:scale-105"
      />

      {userData ?
        <div className='w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group'>
          {userData.name[0].toUpperCase()}
          <div className='absolute hidden group-hover:block top-0 right-0 pt-10 z-10 text-black'>
            <ul className='list-none m-0 p-2 bg-gray-100 text-sm'>

              {!userData.isAccountVerified &&
                <li className='py-1 px-2 hover:bg-gray-300 cursor-pointer' onClick={setVerificationOTP}>Verify Email</li>
              }
              <li onClick={logout} className='py-1 px-2 hover:bg-gray-300 cursor-pointer pr-10'>Logout</li>
            </ul>
          </div>
        </div>
        : <button className="px-6 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:opacity-90 active:scale-95 sm:text-base"
          onClick={() => navigate('/login')}
        >
          Login
        </button>
      }
    </div>
  )
}

export default Navbar
