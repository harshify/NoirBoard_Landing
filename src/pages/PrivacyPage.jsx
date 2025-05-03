import { useEffect } from 'react'
import AOS from 'aos'
import Header from '../components/Header'
import Privacy from '../components/Privacy'
import Footer from '../components/Footer'
import '../App.css'

function PrivacyPage() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50
    })
  }, [])

  return (
    <div className="app">
      <Header />
      <div className="page-content">
        <Privacy />
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPage 