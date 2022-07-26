import { useState, useEffect } from "react";
import { api } from "../../../api/api";

export function LoggedAbout() {
  const [loggedInUser, SetLoggedInUser] = useState({});

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");
        SetLoggedInUser(response.data);
        // console.log(loggedInUser);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

//   console.log(loggedInUser);
  return (
    <>
      <img src={loggedInUser.img} alt="profile pic" />
      <h1>soon{loggedInUser.userName}</h1>
      <h4>{loggedInUser.email}</h4>
      <p>soon{loggedInUser.bio}</p>
    </>
  );
}
