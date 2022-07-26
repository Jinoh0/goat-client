import { useState, useEffect } from "react";
import { api } from "../../../api/api";

export function LoggedFavorites() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    async function fetchUserFavorties() {
      try {
        const response = await api.get("/user/profile");
        setLoggedInUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserFavorties();
  }, []);

  const favorites = loggedInUser.favoriteList;
  console.log(favorites);
  return (
    <>
      {favorites.map((currentFavorite) => {
        return (
          <>
            <p>{currentFavorite}</p>
          </>
        );
      })}
    </>
  );
}
