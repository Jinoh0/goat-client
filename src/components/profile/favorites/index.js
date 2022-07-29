export function SearchedUserFavorites({ user }) {
  return (
    <>
      {user.favoriteList.map((currentFav) => {
        return (
          <div className="activities0 w-[70%] mb-[2%]" key={currentFav._id}>
            <h1>Favorites</h1>
            <div className="posts0">
              <p>Title: {currentFav.title}</p>
              <p>Category: {currentFav.category}</p>
              <p>Description: {currentFav.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
