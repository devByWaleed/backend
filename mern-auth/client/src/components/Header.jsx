import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            {/* Profile Image with subtle border/glow */}
            <div className="p-1 mb-6 rounded-full bg-linear-to-tr from-blue-500 to-purple-500">
                <img
                    src={assets.header_img}
                    alt="Profile"
                    className="object-cover w-32 h-32 border-4 border-white rounded-full sm:w-40 sm:h-40"
                />
            </div>

            {/* Heading with Hand Wave */}
            <h1 className="flex items-center gap-2 mb-2 text-3xl font-bold text-gray-800 sm:text-5xl">
                Hey! Developer
                <img src={assets.hand_wave} alt="Wave" className="w-8 sm:w-12 animate-bounce" />
            </h1>

            {/* Subtext */}
            <h2 className="mb-2 text-xl font-semibold text-transparent bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text sm:text-2xl">
                Welcome to our app
            </h2>

            <p className="max-w-md mb-8 text-gray-500 sm:text-lg">
                Let's start with a quick intro. We've built something special just for you.
            </p>

            {/* Call to Action Button */}
            <button className="px-10 py-3 font-semibold text-white transition-all duration-300 rounded-full shadow-md bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:shadow-xl hover:-translate-y-1 active:scale-95">
                Get started
            </button>
        </div>
    )
}

export default Header
