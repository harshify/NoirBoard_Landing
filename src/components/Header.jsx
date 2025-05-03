import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.classList.toggle('nav-open')
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.classList.remove('nav-open')
  }

  // Handle navigation to sections on homepage from other pages
  const handleSectionNavigation = (sectionId) => {
    closeMenu()
    
    // First navigate to home page then to the section
    if (location.pathname !== '/') {
      // Use hash in the navigation to ensure it's properly captured
      navigate(`/#${sectionId}`)
    } else {
      // If already on homepage, just scroll to the section
      const element = document.getElementById(sectionId)
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        })
      }
    }
  }

  // Track the active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Sticky header effect
      const header = document.querySelector('header')
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('sticky')
        } else {
          header.classList.remove('sticky')
        }
      }

      // Only track sections on homepage
      if (location.pathname === '/') {
        const sections = ['features', 'screenshots', 'about']
        const currentSection = sections.find(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 150 && rect.bottom >= 150
          }
          return false
        })

        if (currentSection) {
          setActiveSection(currentSection)
        } else if (window.scrollY < 100) {
          setActiveSection('') // At the top of the page
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [location])

  // Process hash navigation when component mounts or updates
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the '#'
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          })
        }
      }, 100);
    }
  }, [location.hash]);

  // Set active section based on current route
  useEffect(() => {
    if (location.pathname === '/privacy') {
      setActiveSection('privacy')
    } else if (location.pathname === '/terms') {
      setActiveSection('terms')
    } else if (location.pathname === '/' && !activeSection) {
      // Check if there's a hash in the URL to set the active section
      if (location.hash) {
        const sectionId = location.hash.substring(1);
        if (['features', 'screenshots', 'about'].includes(sectionId)) {
          setActiveSection(sectionId)
        }
      } else {
        setActiveSection('')
      }
    }
  }, [location, activeSection])

  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="/images/Noirboard_logo.png" alt="NoirBoard Logo" className="logo-icon" />
          <h2>NoirBoard</h2>
        </Link>
        
        <div 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a 
            href="javascript:void(0)" 
            className={`nav-link ${activeSection === 'features' ? 'active' : ''}`} 
            onClick={() => handleSectionNavigation('features')}
          >
            <span className="nav-icon"><i className="fas fa-th-large"></i></span>
            <span className="nav-text">Features</span>
          </a>
          <a 
            href="javascript:void(0)" 
            className={`nav-link ${activeSection === 'screenshots' ? 'active' : ''}`} 
            onClick={() => handleSectionNavigation('screenshots')}
          >
            <span className="nav-icon"><i className="fas fa-image"></i></span>
            <span className="nav-text">Screenshots</span>
          </a>
          <a 
            href="javascript:void(0)" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} 
            onClick={() => handleSectionNavigation('about')}
          >
            <span className="nav-icon"><i className="fas fa-info-circle"></i></span>
            <span className="nav-text">About</span>
          </a>
          <Link to="/privacy" className={`nav-link ${activeSection === 'privacy' ? 'active' : ''}`} onClick={closeMenu}>
            <span className="nav-icon"><i className="fas fa-shield-alt"></i></span>
            <span className="nav-text">Privacy</span>
          </Link>
          <Link to="/terms" className={`nav-link ${activeSection === 'terms' ? 'active' : ''}`} onClick={closeMenu}>
            <span className="nav-icon"><i className="fas fa-file-contract"></i></span>
            <span className="nav-text">Terms</span>
          </Link>
          <a href="https://chrome.google.com/webstore" className="mobile-cta" onClick={closeMenu}>
            <i className="fab fa-chrome"></i> Add to Chrome
          </a>
        </nav>
        
        <a href="https://chrome.google.com/webstore" className="cta-button desktop-cta" target="_blank" rel="noreferrer">
          <i className="fab fa-chrome"></i> Add to Chrome
        </a>
      </div>
    </header>
  )
}

export default Header 