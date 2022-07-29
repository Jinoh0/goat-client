import { Link } from "react-router-dom";

export function SearchedUserFavorites({ user }) {
  return (
    <>
      {user.favoriteList.map((currentFav) => {
        return (
          <div
            className="activities0 rounded-md shadow-lg w-[70%] mb-[2%]"
            key={currentFav._id}
          >
            <h1>Favorites</h1>
            <div className="posts0 rounded-md shadow-lg ">
              <Link to={`/question/${currentFav._id}`}>
                {" "}
                <p>Title: {currentFav.title}</p>
              </Link>
              <p>Category: {currentFav.category}</p>
              <p>Description: {currentFav.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
