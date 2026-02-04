import '../App.css'

const Login = () => {
  return (
    <section className="card page-card">
      <div className="card-header">
        <h2>Login</h2>
        <p>Access your account securely.</p>
      </div>
      <form className="form">
        <label className="field">
          <span>Email</span>
          <input type="email" placeholder="you@example.com" />
        </label>
        <label className="field">
          <span>Password</span>
          <input type="password" placeholder="••••••••" />
        </label>
        <div className="row">
          <label className="checkbox">
            <input type="checkbox" />
            <span>Remember me</span>
          </label>
          <button className="link" type="button">Forgot password?</button>
        </div>
        <button className="primary" type="button">Sign in</button>
      </form>
    </section>
  )
}

export default Login
