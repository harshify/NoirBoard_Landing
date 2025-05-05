import { useEffect } from 'react'
import './Hero.css'

function Hero() {
  useEffect(() => {
    // Add parallax effect to hero section
    if (window.innerWidth > 992) {
      const handleMouseMove = (e) => {
        const heroImageWrapper = document.querySelector('.hero-image-wrapper')
        const heroImage = document.querySelector('.hero-image')
        const heroShapes = document.querySelectorAll('.hero-shape')
        
        if (heroImageWrapper && heroImage) {
          const mouseX = e.clientX / window.innerWidth
          const mouseY = e.clientY / window.innerHeight
          
          const moveX = 20 * (mouseX - 0.5)
          const moveY = 20 * (mouseY - 0.5)
          
          heroImageWrapper.style.transform = `translate(${moveX}px, ${moveY}px)`
          heroImage.style.transform = `perspective(1000px) rotateY(${-10 + moveX/2}deg) rotateX(${5 + moveY/2}deg)`
          
          heroShapes.forEach((shape, index) => {
            const factor = index === 0 ? 3 : 2
            shape.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`
          })
        }
      }

      window.addEventListener('mousemove', handleMouseMove)
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" data-aos="fade-right" data-aos-duration="1000">
            <h1>NoirBoard</h1>
            <p className="hero-subtitle">A productivity dashboard just for you</p>
            <p className="hero-description">Transform your new tab into a personalized command center that boosts productivity and helps you stay focused on what matters.</p>
            <div className="hero-buttons">
              <a href="https://chromewebstore.google.com/detail/ajoohnjphfoajgoapikbhldobodedlpd?utm_source=item-share-cb" className="cta-button primary-cta" target="_blank" rel="noreferrer">
                <i className="fab fa-chrome"></i> Add to Chrome
              </a>
              <a href="#features" className="cta-button secondary-cta">
                <i className="fas fa-th-large"></i> Explore Features
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">0.0</span>
                <span className="stat-label"><i className="fas fa-star"></i> Rating</span>
              </div>
              <div className="stat">
              <span className="stat-number">100+</span>
                {/*<span className="stat-number">10K+</span> */}
                <span className="stat-label"><i className="fas fa-download"></i> Downloads</span>
              </div>
              <div className="stat">
                <span className="stat-number">Free</span>
                <span className="stat-label"><i className="fas fa-tag"></i> Forever</span>
              </div>
            </div>
          </div>
          <div className="hero-image-container" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
            <div className="hero-image-wrapper">
              <img src="/images/noirboard_main.png" alt="NoirBoard Dashboard" className="hero-image" />
              <div className="hero-image-decoration"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bg-elements">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
      </div>
    </section>
  )
}

export default Hero 