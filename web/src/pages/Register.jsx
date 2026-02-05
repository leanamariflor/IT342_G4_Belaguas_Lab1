import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";
import "../App.css";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/register", {
        username,
        email,
        password,
      });

      navigate("/login");
    } catch (error) {
      alert("Registration failed");
      console.error(error);
    }
  };

  return (
    <div className="page">
      <section className="card page-card">
        <div className="card-header">
          <h2>Register</h2>
        </div>

        <form className="form">
          <label className="field">
            <span>Username</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

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

          <label className="field">
            <span>Confirm Password</span>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>

          <button
            className="primary"
            type="button"
            onClick={handleRegister}
          >
            Create account
          </button>

          <p style={{ marginTop: "1rem", textAlign: "center" }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#10b981",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Login
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Register;
