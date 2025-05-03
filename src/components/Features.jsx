import './Features.css'

const featureItems = [
  {
    icon: 'fas fa-clock',
    title: 'Live Clock',
    description: 'Keep track of time with a beautiful 12-hour format clock that blends with your dashboard.'
  },
  {
    icon: 'fas fa-cloud-sun',
    title: 'Weather Widget',
    description: 'Stay updated with the current weather in your location with a sleek forecast widget.'
  },
  {
    icon: 'fas fa-check-square',
    title: 'Todo List',
    description: 'Manage your daily tasks efficiently with a simple, intuitive todo list.'
  },
  {
    icon: 'fas fa-bullseye',
    title: 'Goal Setter',
    description: 'Set and track your goals with deadlines to stay motivated and accountable.'
  },
  {
    icon: 'fas fa-wallet',
    title: 'Expense Tracker',
    description: 'Monitor your finances by tracking your expenses directly from your dashboard.'
  },
  {
    icon: 'fas fa-calendar-check',
    title: 'Daily Routine',
    description: 'Track your daily habits and routines to build consistency and productivity.'
  },
  {
    icon: 'fas fa-calendar-alt',
    title: 'Future Events',
    description: 'Stay organized with an advanced event manager for your upcoming activities.'
  }
]

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Everything You Need</h2>
        <div className="features-grid">
          {featureItems.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={feature.icon} style={{ color: 'white' }}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features 