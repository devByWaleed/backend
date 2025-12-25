import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm sm:px-12">
      {/* Logo Section */}
      <img
        src={assets.logo}
        alt="Logo"
        className="w-24 transition-transform duration-300 cursor-pointer sm:w-32 hover:scale-105"
      />

      {/* Button Section */}
      <button className="px-6 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:opacity-90 active:scale-95 sm:text-base"
      onClick={()=> navigate('/login')}
      >
        Login
      </button>
    </div>
  )
}

export default Navbar
