import { useNavigate } from "react-router-dom";
import "../App.css";

const Profile = () => {
  const navigate = useNavigate();
  const storedUser = JSON.parse(sessionStorage.getItem("user"));
  const user = storedUser?.user ?? storedUser;

  return (
    <div className="page">
      <section className="card page-card">

       
        <button
          className="link link-start"
          type="button"
          onClick={() => navigate("/dashboard")}
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

            
          </div>
        </div>

      </section>
    </div>
  );
};

export default Profile;
