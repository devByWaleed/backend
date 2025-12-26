import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AppContent } from '../context/AppContext'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState("Sign Up")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const { backendURL, setIsLoggedIn, getUserData } = useContext(AppContent)

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      axios.defaults.withCredentials = true

      if (state === "Sign Up") {
        const { data } = await axios.post(backendURL + "/api/auth/register", { name, email, password })

        if (data.success) {
          setIsLoggedIn(true)
          getUserData()
          navigate("/")
        }

        else {
          toast.error(data.message)
        }

      } else {
        const { data } = await axios.post(backendURL + "/api/auth/login", { email, password })

        if (data.success) {
          setIsLoggedIn(true)
          getUserData()
          navigate("/")
        }
        else {
          toast.error(data.message)
        }
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 text-center min-h-screen justify-center px-4">
      {/* Animated Logo Container */}
      <div className="p-4 rounded-3xl bg-linear-to-tr from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 shadow-xl">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-12 sm:w-16 animate-bounce"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Text Content & Form Card */}
      <div className="rounded-3xl p-8 sm:p-12 bg-slate-900 shadow-2xl border border-slate-800 w-full max-w-105">
        <h2 className="text-3xl font-bold text-white sm:text-4xl tracking-tight mb-2">
          {state === "Sign Up" ? "Create account" : "Login"}
        </h2>

        <p className="mb-8 text-sm text-slate-400 sm:text-base">
          {state === "Sign Up"
            ? "Create your account"
            : "Login to your account"}
        </p>

        <form className="space-y-4" onSubmit={onSubmitHandler}>
          {/* Full Name Field - Only shows on Sign Up */}
          {state === "Sign Up" && (
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <img src={assets.person_icon} alt="" className="w-5 opacity-50 group-focus-within:opacity-100 transition-opacity invert" />
              </div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white placeholder:text-slate-500"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          )}

          {/* Email Field */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <img src={assets.mail_icon} alt="" className="w-5 opacity-50 group-focus-within:opacity-100 transition-opacity invert" />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white placeholder:text-slate-500"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <img src={assets.lock_icon} alt="" className="w-5 opacity-50 group-focus-within:opacity-100 transition-opacity invert" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white placeholder:text-slate-500"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          {/* Forgot Password Link (Only for Login) */}
          {state === "Login" && (
            <p
              onClick={() => navigate("/reset-password")}
              className="text-sm text-right text-indigo-400 hover:text-indigo-300 cursor-pointer font-medium transition-colors"
            >
              Forgot password?
            </p>
          )}

          {/* Gradient Submit Button */}
          <button className="w-full py-3.5 mt-4 font-bold text-white rounded-xl shadow-lg bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 transform transition-all active:scale-[0.97]">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>
        </form>

        {/* Toggle Link */}
        {state === "Sign Up" ? (
          /* Block 1: Shown only when user is on the Sign Up page */
          <p>
            Already have an account?{" "}
            <span
              className="text-indigo-400 font-semibold cursor-pointer hover:text-indigo-300 hover:underline transition-all"
              onClick={() => setState("Login")}
            >
              Login here
            </span>
          </p>
        ) : (
          /* Block 2: Shown only when user is on the Login page */
          <p>
            Don't have an account?{" "}
            <span
              className="text-indigo-400 font-semibold cursor-pointer hover:text-indigo-300 hover:underline transition-all"
              onClick={() => setState("Sign Up")}
            >
              Sign up
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

export default Login
