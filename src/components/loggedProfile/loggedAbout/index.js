import { useState, useEffect } from "react";
import { api } from "../../../api/api";

export function LoggedAbout({user}) {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   async function fetchUser() {
      
  //     try {
  //       const response = await api.get("/user/profile");
  //       setUser(response.data);
  //       // console.log(user);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchUser();
  // }, []);

//   console.log(user);
// console.log(user.email)
  return (
    <>
    <h1>__________loggedAbout____________</h1>
      <img src={user.img} alt="profile pic" />
      <h1>username{user.userName}</h1>
      <h4>email{user.email}</h4>
      <p>userbio{user.bio}</p>
    </>
  );
}
