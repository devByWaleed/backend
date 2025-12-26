import { useContext, useRef } from 'react'
import { assets } from '../assets/assets'
import { AppContent } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const EmailVerified = () => {

	const inputRefs = useRef([])

	const { backendURL, isLoggedIn, userData, getUserData } = useContext(AppContent)

	const navigate = useNavigate()
	axios.defaults.withCredentials = true

	const handleInput = (e, index) => {
		if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
			inputRefs.current[index + 1].focus()
		}
	}


	const handleKeyDown = (e, index) => {
		if (e.key === "Backspace" && e.target.value === "" && index > 0) {
			inputRefs.current[index - 1].focus()
		}
	}

	const handlePaste = (e) => {
		const paste = e.clipboardData.getData("text")
		const pasteArray = paste.split("")
		pasteArray.forEach((char, index) => {
			inputRefs.current[index].value = char
		})
	}


	const onSubmitHandler = async (e) => {
		try {
			e.preventDefault();

			const otpArray = inputRefs.current.map(e => e.value)

			const otp = otpArray.join("")

			const { data } = await axios.post(backendURL + "/api/auth/verify-account", { otp })

			if (data.success) {
				toast.success(data.message)
				getUserData()
				navigate("/")
			} else {
				toast.error(data.message)
			}

		} catch (error) {
			toast.error(error.message)
		}
	}

	useEffect(() => {
		isLoggedIn && userData.
			isAccountVerified && navigate("/")
	}, [isLoggedIn, userData])


	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 bg-slate-50">
			<div className="bg-slate-900 p-8 sm:p-12 rounded-3xl shadow-2xl w-full max-w-md border border-slate-800 text-center">

				{/* Icon & Header */}
				<div className="mb-6">
					<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 mb-4 border border-indigo-500/20">
						<img src={assets.mail_icon} alt="Email Icon" className="w-8 invert opacity-80" />
					</div>
					<h2 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">
						Email Verify
					</h2>
					<p className="mt-2 text-sm text-slate-400">
						Enter the 6-digit code sent to your email address.
					</p>
				</div>

				{/* Verification Form */}
				<form className="space-y-6" onSubmit={onSubmitHandler}>
					<div className="flex justify-between gap-2 sm:gap-4" onPaste={handlePaste}>
						{[...Array(6)].map((_, index) => (
							<input
								key={index}
								type="text"
								maxLength="1"
								className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold text-white bg-slate-800 border border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
								ref={e => inputRefs.current[index] = e}
								onInput={(e) => handleInput(e, index)}
								onKeyDown={(e) => handleKeyDown(e, index)}
								required
							/>
						))}
					</div>

					<button
						type="submit"
						className="w-full py-3.5 font-bold text-white rounded-xl shadow-lg bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform transition-all active:scale-[0.98]"
					>
						Verify Email
					</button>
				</form>

				{/* Footer Link */}
				<p className="mt-8 text-sm text-slate-400">
					Didn't receive the code?{" "}
					<span className="text-indigo-400 font-semibold cursor-pointer hover:text-indigo-300 hover:underline transition-all">
						Resend code
					</span>
				</p>
			</div>
		</div>
	)
}

export default EmailVerified
