import '../App.css'

const Dashboard = () => {
  return (
    <section className="card page-card">
      <div className="card-header">
        <h2>Dashboard</h2>
        <p>Overview of activity and quick actions.</p>
      </div>
      <div className="stats">
        <div className="stat">
          <p className="stat-label">Projects</p>
          <p className="stat-value">12</p>
        </div>
        <div className="stat">
          <p className="stat-label">Tasks</p>
          <p className="stat-value">48</p>
        </div>
        <div className="stat">
          <p className="stat-label">Notifications</p>
          <p className="stat-value">5</p>
        </div>
      </div>
      <div className="list">
        <div className="list-item">
          <div>
            <p className="item-title">UI Review</p>
            <p className="item-subtitle">Today • 3:30 PM</p>
          </div>
          <button className="secondary" type="button">View</button>
        </div>
        <div className="list-item">
          <div>
            <p className="item-title">Sprint Planning</p>
            <p className="item-subtitle">Tomorrow • 9:00 AM</p>
          </div>
          <button className="secondary" type="button">View</button>
        </div>
        <div className="list-item">
          <div>
            <p className="item-title">Design Handoff</p>
            <p className="item-subtitle">Feb 6 • 2:00 PM</p>
          </div>
          <button className="secondary" type="button">View</button>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
