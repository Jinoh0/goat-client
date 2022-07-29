export function SearchedUserFavorites({ user }) {
  return (
    <>
      {user.favoriteList.map((currentFav) => {
        return (
          <div className="posts0">
            <h1>Favorites</h1>
            <p>{currentFav.title}</p>
            <p>{currentFav.category}</p>
            <p>{currentFav.description}</p>
          </div>
        );
      })}
    </>
  );
}
