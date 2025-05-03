import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSectionNavigation = (sectionId) => {
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

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-columns">
            <div className="footer-column">
              <div className="footer-logo">
                <img src="/images/Noirboard_logo.png" alt="NoirBoard Logo" className="logo-icon" />
                <h3>NoirBoard</h3>
              </div>
              <p className="footer-description">A productivity dashboard just for you</p>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Navigation</h4>
              <div className="footer-nav-links">
                <a href="javascript:void(0)" className="footer-link" onClick={() => handleSectionNavigation('features')}>Features</a>
                <a href="javascript:void(0)" className="footer-link" onClick={() => handleSectionNavigation('screenshots')}>Screenshots</a>
                <a href="javascript:void(0)" className="footer-link" onClick={() => handleSectionNavigation('about')}>About</a>
              </div>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <div className="footer-nav-links">
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
                <Link to="/terms" className="footer-link">Terms & Conditions</Link>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-info">
              <p>© {new Date().getFullYear()} NoirBoard. Built by <a href="https://github.com/harshify" target="_blank" rel="noreferrer" className="github-link">harshify</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 