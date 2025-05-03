import { useEffect } from 'react'
import AOS from 'aos'
import Header from '../components/Header'
import Terms from '../components/Terms'
import Footer from '../components/Footer'
import '../App.css'

function TermsPage() {
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
        <Terms />
      </div>
      <Footer />
    </div>
  )
}

export default TermsPage 