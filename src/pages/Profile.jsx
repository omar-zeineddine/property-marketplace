import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <>
      <div className="profile">
        <div className="pageHeader">My Profile</div>
        <button type="button" className="logOut" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;
