import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="min-h-screen bg-white bg-[url('/bg_img.png')] bg-cover bg-center from-slate-50 via-white to-blue-50">
      <Navbar />

      <main className="container mx-auto px-4 flex flex-col items-center justify-center">
        <Header />
      </main>
    </div>
  )
}

export default Home
