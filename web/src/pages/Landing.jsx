import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="page" style={{ padding: 0, height: "100vh" }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        
      }}>
        <div style={{ maxWidth: "500px", textAlign: "center", padding: "2rem" }}>
          <h1 style={{ fontSize: "3rem", marginBottom: "1.5rem", fontWeight: "700", color: "#1f2937" }}>
            Welcome
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem", color: "#6b7280", lineHeight: "1.6" }}>
            Manage your account securely and efficiently. Choose an option to get started.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "250px", margin: "0 auto" }}>
            <button
              onClick={() => navigate('/login')}
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
                fontWeight: "600",
                border: "2px solid #10b981",
                background: "#10b981",
                color: "white",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#059669";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 20px rgba(16, 185, 129, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#10b981";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Login
            </button>
            
            <button
              onClick={() => navigate('/register')}
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
                fontWeight: "600",
                border: "2px solid #10b981",
                background: "white",
                color: "#10b981",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#f0fdf4";
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 20px rgba(16, 185, 129, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "white";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
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
