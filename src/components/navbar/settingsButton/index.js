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
    <>
      {isToggled ? (
        <>
          <button onClick={toggle}>Settings</button>
          <Link to={"/edit-profile"}>
            <button>Edit Profile</button>
          </Link>
          <button onClick={handleLogOut}>Sign Out</button>
        </>
      ) : (
        <>
          <button onClick={toggle}>Settings</button>
        </>
      )}
    </>
  );
}
