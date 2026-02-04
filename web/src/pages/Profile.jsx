import '../App.css'

const Profile = () => {
  return (
    <section className="card page-card">
      <div className="card-header">
        <h2>Profile</h2>
        <p>Manage your personal information.</p>
      </div>
      <div className="profile">
        <div className="avatar">NM</div>
        <div className="profile-info">
          <p className="profile-name">Name</p>
          <p className="profile-role">Role</p>
          <div className="profile-tags">
            <span>Active</span>
          </div>
        </div>
      </div>
      <div className="profile-grid">
        <div>
          <p className="label">Email</p>
          <p className="value">name@school.edu</p>
        </div>
        <div>
          <p className="label">Phone</p>
          <p className="value">+00 000 000</p>
        </div>
        <div>
          <p className="label">Department</p>
          <p className="value">IT</p>
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
