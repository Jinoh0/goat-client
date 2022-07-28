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
   
      <p>userbio{user.bio}</p>
    </>
  );
}
