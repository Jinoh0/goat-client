import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function SettingsButton() {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(false);

  function toggle() {
    setIsToggled(!isToggled);
  }

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <div>
      {isToggled ? (
        <div>
          <button className="hover:text-orangegoat" onClick={toggle}>
            Settings
          </button>
          <Link to={"/edit-profile"}>
            <button>Edit Profile</button>
          </Link>
          <button onClick={handleLogOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button className="hover:text-orangegoat" onClick={toggle}>
            Settings
          </button>
        </div>
      )}
    </div>
  );
}
