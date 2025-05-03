import './Screenshots.css'

function Screenshots() {
  return (
    <section id="screenshots" className="screenshots">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">See it in action</h2>
        <div className="screenshots-grid">
          <div className="screenshot" data-aos="fade-right">
            <img src="/images/noirboard_main.png" alt="NoirBoard Dashboard" />
          </div>
          <div className="screenshot" data-aos="fade-left">
            <img src="/images/noirboard_2.png" alt="NoirBoard Features" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Screenshots 