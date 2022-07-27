import { useState, useEffect } from "react";
import { api } from "../../../api/api";

export function LoggedFavorites({user}) {
  // const [user, setUser] = useState({
  //   favoriteList: [
  //     {
  //       title: "",
  //       category: "",
  //       description: "",
  //     },
  //   ],
  // });

  // useEffect(() => {
  //   async function fetchUserFavortes() {
  //     try {
  //       const response = await api.get("/user/profile");
  //       setUser(response.data);
  //       // console.log(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchUserFavortes();
  // }, []);
  // console.log(user);
  // console.log(loggedInUser)
  // console.log(loggedInUser.favoriteList[0].category)
  // console.log(loggedInUser.favoriteList)
  // console.log(loggedInUser.favoriteList[0].description)

  return (
    <>
      {user.favoriteList.map((currentFav) => {
        return (
          <>
          <h1>___________favorites__________</h1>
            <p>{currentFav.title}</p>
            <p>{currentFav.category}</p>
            <p>{currentFav.description}</p>
          </>
        );
      })}
    </>
  );

  // const favorites = [loggedInUser.favoriteList];
  // console.log(favorites);
  // return (
  //   <>
  //     {favorites.map((currentFavorite) => {
  //       console.log(currentFavorite)
  //       return (
  //         <>
  //           <p>{currentFavorite.title}</p>
  //           <p>{currentFavorite.description}</p>
  //         </>
  //       );
  //     })}
  //   </>
  // );
}
