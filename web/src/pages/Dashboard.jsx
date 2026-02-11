import { useNavigate } from "react-router-dom";
import "../App.css";

const Dashboard = () => {
  const navigate = useNavigate();
 

  const goToProfile = () => navigate("/profile");
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <div className="page">
      <section className="card page-card">
        <div className="card-header">
          <h2>Dashboard</h2>
          <p>Welcome! You are logged in.</p>
        </div>

       

        <div className="list">
          <div className="list-item">
            <div>
              <p className="item-title">View Profile</p>
              <p className="item-subtitle">See your account information</p>
            </div>
            <button className="secondary" onClick={goToProfile}>
              Open
            </button>
          </div>

          <div className="list-item">
            <div>
              <p className="item-title">Logout</p>
              <p className="item-subtitle">End your session</p>
            </div>
            <button className="secondary" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
