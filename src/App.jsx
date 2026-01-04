import './index.css'
import './animations.css'
import AnimationEffects from './AnimationEffects'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import WhyUs from './pages/WhyUs'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './components/NotFound'

function App() {
  return (
    <AnimationEffects>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </AnimationEffects>
  )
}

export default App
