import '../App.css'

const Profile = () => {
  return (
    <section className="card page-card">
      <div className="card-header">
        <h2>Profile</h2>
        <p>Manage your personal information.</p>
      </div>
      <div className="profile">
        <div className="avatar">LB</div>
        <div className="profile-info">
          <p className="profile-name">Leana Belaguas</p>
          <p className="profile-role">UI/UX Designer</p>
          <div className="profile-tags">
            <span>Active</span>
            <span>Team Alpha</span>
            <span>Manila</span>
          </div>
        </div>
      </div>
      <div className="profile-grid">
        <div>
          <p className="label">Email</p>
          <p className="value">lia.belaguas@school.edu</p>
        </div>
        <div>
          <p className="label">Phone</p>
          <p className="value">+63 912 345 6789</p>
        </div>
        <div>
          <p className="label">Department</p>
          <p className="value">IT • UI Systems</p>
        </div>
        <div>
          <p className="label">Member since</p>
          <p className="value">2024</p>
        </div>
      </div>
      <button className="primary" type="button">Edit profile</button>
    </section>
  )
}

export default Profile
