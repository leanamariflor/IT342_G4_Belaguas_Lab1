import '../App.css'
import { Link } from 'react-router-dom'

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
            <input type="text" placeholder="Name" />
          </label>
          <label className="field">
            <span>Last name</span>
            <input type="text" placeholder="Last name" />
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
        <button className="primary" type="button">Create account</button>
        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Already have an account? <Link to="/login" style={{ color: '#10b981', textDecoration: 'none', fontWeight: '500' }}>Login</Link>
        </p>
      </form>
    </section>
  )
}

export default Register
