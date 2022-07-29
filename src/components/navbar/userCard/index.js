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
        <>
          <Link to={"/profile"}>
            <h1>__________loggedAbout____________</h1>
            <img src={user.img} alt="profile pic" />
            <h1>username{user.userName}</h1>
            <h4>email{user.email}</h4>
            <p>userbio{user.bio}</p>
          </Link>
        </>
      )}
    </>
  );
}
