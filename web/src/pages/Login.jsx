import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";
import "../App.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

const handleLogin = async () => {
  try {
    const response = await api.post("/login", {
      email,
      password,
    });

   
    localStorage.setItem("isLoggedIn", "true");

   
    localStorage.setItem("user", JSON.stringify(response.data));

    navigate("/dashboard", { replace: true });
  } catch (error) {
    alert("Invalid email or password");
    console.error(error);
  }
};


  return (
    <div className="page">
      <section className="card page-card">
        <div className="card-header">
          <h2>Login</h2>
          <p>Access your account securely.</p>
        </div>

        <form className="form">
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button
            className="primary"
            type="button"
            onClick={handleLogin}
          >
            Sign in
          </button>

          <p style={{ marginTop: "1rem", textAlign: "center" }}>
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#10b981",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Register
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Login;
