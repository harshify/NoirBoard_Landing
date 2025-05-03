import { useEffect } from 'react'
import AOS from 'aos'
import ScrollReveal from 'scrollreveal'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import HeroPage from './HeroPage'
import FeaturesPage from './FeaturesPage'
import ScreenshotsPage from './ScreenshotsPage'
import AboutPage from './AboutPage'
import Footer from '../components/Footer'
import '../App.css'

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50
    })

    // Initialize ScrollReveal
    const sr = ScrollReveal({
      distance: '20px',
      duration: 1000,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      interval: 100
    })

    sr.reveal('.feature-card', { origin: 'bottom' })
    sr.reveal('.screenshot', { origin: 'bottom', interval: 200 })

    // Handle hash navigation when page loads or changes
    const handleHashNavigation = () => {
      if (location.hash) {
        const sectionId = location.hash.substring(1);
        const element = document.getElementById(sectionId)
        if (element) {
          setTimeout(() => {
            window.scrollTo({
              top: element.offsetTop - 100,
              behavior: 'smooth'
            })
          }, 100)
        }
      }
    }

    handleHashNavigation()
  }, [location.hash])

  return (
    <div className="app">
      <Header />
      <div className="section-container">
        <div id="hero" className="section-wrapper">
          <HeroPage />
        </div>
        <div id="features" className="section-wrapper">
          <FeaturesPage />
        </div>
        <div id="screenshots" className="section-wrapper">
          <ScreenshotsPage />
        </div>
        <div id="about" className="section-wrapper">
          <AboutPage />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage 