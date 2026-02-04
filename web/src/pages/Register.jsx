import '../App.css'

const Register = () => {
  return (
    <section className="card page-card">
      <div className="card-header">
        <h2>Register</h2>
      </div>
      <form className="form">
        <div className="row">
          <label className="field">
            <span>First name</span>
            <input type="text" placeholder="Lia" />
          </label>
          <label className="field">
            <span>Last name</span>
            <input type="text" placeholder="Belaguas" />
          </label>
        </div>
        <label className="field">
          <span>Email</span>
          <input type="email" placeholder="you@example.com" />
        </label>
        <label className="field">
          <span>Password</span>
          <input type="password" placeholder="Create a password" />
        </label>
        <label className="field">
          <span>Role</span>
          <select>
            <option>Student</option>
            <option>Instructor</option>
            <option>Admin</option>
          </select>
        </label>
        <button className="primary" type="button">Create account</button>
      </form>
    </section>
  )
}

export default Register
