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
        <div className="settings0 settingsbtnefx"  >
          <button className="settingsbtnefx hover:text-orangegoat" onClick={toggle}>
            Settings⚙️
          </button>
          <Link to={"/edit-profile"}>
            <button className="settingsbtnefx hover:text-orangegoat">Edit Profile</button>
          </Link>
          <button onClick={handleLogOut} className="settingsbtnefx hover:text-orangegoat">Sign Out</button>
        </div>
      ) : (
        <div>
          <button className="hover:text-orangegoat settingsbtnefx settings0 ml-6" onClick={toggle}>
            Settings⚙️
          </button>
        </div>
      )}
    </div>
  );
}
