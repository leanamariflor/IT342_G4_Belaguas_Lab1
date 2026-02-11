import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="page landing-page">
      <div className="landing-center">
        <div className="landing-content">
          <h1 className="landing-title">Welcome</h1>
          <p className="landing-subtitle">
            Manage your account securely and efficiently. Choose an option to get started.
          </p>

          <div className="landing-actions">
            <button
              onClick={() => navigate("/login")}
              className="landing-btn landing-btn--primary"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="landing-btn landing-btn--outline"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
