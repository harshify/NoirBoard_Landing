import { useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import FeaturesPage from './pages/FeaturesPage'
import ScreenshotsPage from './pages/ScreenshotsPage'
import AboutPage from './pages/AboutPage'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  // Ensure proper viewport settings for mobile devices
  useEffect(() => {
    // Check if viewport meta tag exists, if not create it
    let viewportMeta = document.querySelector('meta[name="viewport"]')
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta')
      viewportMeta.setAttribute('name', 'viewport')
      document.head.appendChild(viewportMeta)
    }
    
    // Set the viewport content for optimal mobile display
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/features" element={<Navigate to="/#features" replace />} />
        <Route path="/screenshots" element={<Navigate to="/#screenshots" replace />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App 