import { useState, useRef } from "react"
import { assets } from "../assets/assets"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AppContent } from "../context/AppContext"
import axios from "axios"
import { toast } from "react-toastify"


const ResetPassword = () => {

	const { backendURL } = useContext(AppContent)

	axios.defaults.withCredentials = true

	const navigate = useNavigate()

	const [email, setEmail] = useState("")
	const [newPassword, setNewPassword] = useState("")
	const [isEmailSend, setIsEmailSend] = useState(false)
	// const [OTP, setOTP] = useState("")
	const OTPRef = useRef("")
	const [isOTPSubmitted, setIsOTPsubmited] = useState(false)


	const inputRefs = useRef([])


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


	const onSubmitEmail = async (e) => {
		e.preventDefault();
		try {

			const { data } = await axios.post(backendURL + "/api/auth/send-reset-otp", { email })

			data.success ? toast.success(data.message) : toast.error(data.message)
			data.success && setIsEmailSend(true)

		} catch (error) {
			toast.error(error.message)
		}
	}

	const onSubmitOTP = async (e) => {
		e.preventDefault();
		try {

			const otpArray = inputRefs.current.map(e => e.value)
			const otpString = otpArray.join("")

			if (otpString.length < 6) {
            return toast.error("Please enter the full 6-digit OTP");
        }

			OTPRef.current = otpString
			setIsOTPsubmited(true)

		} catch (error) {
			toast.error(error.message)
		}
	}

	const onSubmitNewPassword = async (e) => {
		e.preventDefault();
		try {

			const { data } = await axios.post(backendURL + "/api/auth/reset-password", { email, otp:OTPRef.current, newPassword })
			
			data.success ? toast.success(data.message) : toast.error(data.message)
			data.success && navigate("/login")

		} catch (error) {
			toast.error(error.message)
		}
	}


	return (

		<div className="flex flex-col items-center gap-6 text-center min-h-screen justify-center px-4">

			{/* Email for resetting */}
			{!isEmailSend &&
				<div className="flex flex-col items-center gap-6 text-center min-h-screen justify-center px-4">
					{/* Logo */}
					<div className="p-4 rounded-3xl bg-linear-to-tr from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 shadow-xl">
						<img
							src={assets.logo}
							alt="Logo"
							className="w-12 sm:w-16 animate-bounce cursor-pointer"
							onClick={() => navigate("/")}
						/>
					</div>

					{/* Reset Password Card */}
					<div className="rounded-3xl p-8 sm:p-12 bg-slate-900 shadow-2xl border border-slate-800 w-full max-w-105">
						<h2 className="text-3xl font-bold text-white sm:text-4xl tracking-tight mb-2">
							Reset Password
						</h2>

						<p className="mb-8 text-sm text-slate-400 sm:text-base">
							Enter your email address to receive a password reset link
						</p>

						<form className="space-y-4" onSubmit={onSubmitEmail}>
							{/* Email Field */}
							<div className="relative group">
								<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
									<img
										src={assets.mail_icon}
										alt=""
										className="w-5 opacity-50 group-focus-within:opacity-100 transition-opacity invert"
									/>
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

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full py-3.5 mt-4 font-bold text-white rounded-xl shadow-lg bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 transform transition-all active:scale-[0.97]"
							>
								Send Reset Link
							</button>
						</form>

					</div>
				</div>
			}








			{/* OTP Input Form */}
			{!isOTPSubmitted && isEmailSend &&
				<div className="bg-slate-900 p-8 sm:p-12 rounded-3xl shadow-2xl w-full max-w-md border border-slate-800 text-center">


					<div className="mb-6">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 mb-4 border border-indigo-500/20">
							<img src={assets.mail_icon} alt="Email Icon" className="w-8 invert opacity-80" />
						</div>
						<h2 className="text-2xl font-bold text-white sm:text-3xl tracking-tight">
							Reset Password OTP
						</h2>
						<p className="mt-2 text-sm text-slate-400">
							Enter the 6-digit code sent to your email address.
						</p>
					</div>
					<form className="space-y-6" onSubmit={onSubmitOTP}>
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
							Submit
						</button>
					</form>
				</div>
			}











			{/* Password for resetting */}
			{isOTPSubmitted && isEmailSend &&
				<div className="flex flex-col items-center gap-6 text-center min-h-screen justify-center px-4">
					{/* Logo */}
					<div className="p-4 rounded-3xl bg-linear-to-tr from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 shadow-xl">
						<img
							src={assets.logo}
							alt="Logo"
							className="w-12 sm:w-16 animate-bounce cursor-pointer"
							onClick={() => navigate("/")}
						/>
					</div>

					{/* Reset Password Card */}
					<div className="rounded-3xl p-8 sm:p-12 bg-slate-900 shadow-2xl border border-slate-800 w-full max-w-105">
						<h2 className="text-3xl font-bold text-white sm:text-4xl tracking-tight mb-2">
							New Password
						</h2>

						<p className="mb-8 text-sm text-slate-400 sm:text-base">
							Enter your new password
						</p>

						<form className="space-y-4" onSubmit={onSubmitNewPassword}>
							{/* Email Field */}
							<div className="relative group">
								<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
									<img
										src={assets.mail_icon}
										alt=""
										className="w-5 opacity-50 group-focus-within:opacity-100 transition-opacity invert"
									/>
								</div>
								<input
									type="password"
									placeholder="Password"
									className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white placeholder:text-slate-500"
									onChange={(e) => setNewPassword(e.target.value)}
									value={newPassword}
									required
								/>
							</div>

							{/* Submit Button */}
							<button
								type="submit"
								className="w-full py-3.5 mt-4 font-bold text-white rounded-xl shadow-lg bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-90 transform transition-all active:scale-[0.97]"
							>
								Submit
							</button>
						</form>

					</div>
				</div>
			}


		</div>
	)
}

export default ResetPassword
