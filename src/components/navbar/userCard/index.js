import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../api/api";

export function UserCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get("/user/profile");
        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="profilecard0">
          <Link to={"/profile"}>
            <img src={user.img} alt="profile pic" className="profileimg0" />
            <div className="profiletext0">
              <h1>Username: {user.userName}</h1>
              <h4>E-mail: {user.email}</h4>
              <p>About Me: {user.bio}</p>
            </div>
          </Link>
        </div>
      )}
    </>
  );
}
