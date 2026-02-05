import { useNavigate } from "react-router-dom";
import "../App.css";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="page">
      <section className="card page-card">

        {/* 🔙 Back Arrow */}
        <button
          className="link"
          type="button"
          onClick={() => navigate("/dashboard")}
          style={{ alignSelf: "flex-start" }}
        >
          ← Back to Dashboard
        </button>

        <div className="card-header">
          <h2>Profile</h2>
          <p>Manage your personal information.</p>
        </div>

        <div className="profile">
          <div className="avatar">
            {user?.username?.charAt(0).toUpperCase()}
          </div>

          <div className="profile-info">
            <p className="profile-name">{user?.username}</p>
            <p className="label">{user?.email}</p>
            <p className="profile-role">{user?.role}</p>

            <div className="profile-tags">
              <span>Active</span>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Profile;
