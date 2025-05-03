import './Privacy.css'

function Privacy() {
  return (
    <section id="privacy" className="privacy">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Privacy Policy</h2>
        <div className="privacy-content" data-aos="fade-up" data-aos-delay="100">
          <div className="privacy-header">
            <h3>Privacy Policy for NoirBoard</h3>
            <p className="effective-date">Effective Date: May 2025</p>
          </div>
          
          <p className="privacy-intro">
            NoirBoard is a productivity-focused Chrome extension offering tools like a live clock, to-do list, 
            goal tracker, and a simple weather widget. Your privacy is important to us, and we are committed 
            to keeping your information safe and minimal.
          </p>
          
          <div className="privacy-section">
            <h4>1. What We Collect</h4>
            <p>
              <strong>Location (One-Time Use):</strong> NoirBoard may ask for your permission once to access your location, 
              only to fetch weather data for your area. This data is not stored, logged, or shared in any way. 
              It is only used once during the weather lookup.
            </p>
            <p>
              <strong>Local Data Storage:</strong> Your to-dos, goals, and other inputs are saved in your browser 
              using Chrome's storage.sync or storage.local. None of this data is ever uploaded or shared with us 
              or third parties.
            </p>
          </div>
          
          <div className="privacy-section">
            <h4>2. What We Don't Do</h4>
            <ul className="dont-list">
              <li>❌ We do not collect personally identifiable information</li>
              <li>❌ We do not use your data for analytics, ads, or profiling</li>
              <li>❌ We do not store or transmit your location to our servers</li>
              <li>❌ We do not sell or share your data with anyone</li>
            </ul>
          </div>
          
          <div className="privacy-section">
            <h4>3. Permissions</h4>
            <p>
              <strong>storage:</strong> To locally store your productivity data
            </p>
            <p>
              <strong>geolocation:</strong> Only when you manually request the weather update
            </p>
          </div>
          
          <div className="privacy-section">
            <h4>4. Your Consent</h4>
            <p>
              By using NoirBoard, you agree to this simple and transparent privacy approach.
            </p>
          </div>
          
          <div className="privacy-section">
            <h4>5. Contact</h4>
            <p>
              If you have questions, contact us at:
              <br />
              📧 <a href="mailto:harsh0906raj@gmail.com">harsh0906raj@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Privacy 