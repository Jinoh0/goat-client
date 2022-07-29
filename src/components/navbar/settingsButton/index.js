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
        <div className="settings0 settingsbtnefx">
          <button
            className="settingsbtnefx hover:text-orangegoat animate-spin"
            onClick={toggle}
          >
            ⚙️
          </button>
          <Link to={"/edit-profile"}>
            <button className="settingsbtnefx hover:text-orangegoat">
              Edit Profile
            </button>
          </Link>
          <button
            onClick={handleLogOut}
            className="settingsbtnefx hover:text-orangegoat"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="text-center justify-center">
          <button
            className="hover:text-orangegoat settingsbtnefx  animate-spin  settings0 ml-6"
            onClick={toggle}
          >
            ⚙️
          </button>
        </div>
      )}
    </div>
  );
}
