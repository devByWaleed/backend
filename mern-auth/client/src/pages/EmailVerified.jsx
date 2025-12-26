import React from 'react'
import { assets } from '../assets/assets'

const EmailVerified = () => {
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
        <form className="space-y-6">
          <div className="flex justify-between gap-2 sm:gap-4">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold text-white bg-slate-800 border border-slate-700 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                required
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 font-bold text-white rounded-xl shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform transition-all active:scale-[0.98]"
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
