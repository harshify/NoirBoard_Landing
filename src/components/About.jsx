import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About NoirBoard</h2>
        <div className="about-content" data-aos="fade-up" data-aos-delay="100">
          <p>
            NoirBoard is a sleek, feature-rich Chrome extension that transforms your new tab into a powerful productivity dashboard. 
            Designed for professionals, students, and anyone looking to optimize their workflow, NoirBoard combines essential tools like 
            to-do lists, goal tracking, weather updates, and expense management in one elegant interface. With its minimalist dark theme, 
            NoirBoard helps you stay focused while providing everything you need for a productive day at your fingertips.
          </p>
          <a href="https://chrome.google.com/webstore" className="cta-button primary-cta" target="_blank" rel="noreferrer">
            <i className="fab fa-chrome"></i> Add to Chrome
          </a>
        </div>
      </div>
    </section>
  )
}

export default About 