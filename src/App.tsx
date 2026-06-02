import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhySection from './components/WhySection'
import MenuSection from './components/MenuSection'
import Process from './components/Process'
import MascotStory from './components/MascotStory'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-[#F5EDD6] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhySection />
      <MenuSection />
      <Process />
      <MascotStory />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  )
}
