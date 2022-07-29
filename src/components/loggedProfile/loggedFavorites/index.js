export function LoggedFavorites({ user }) {
  return (
    <div className="halfbox0">
      <div className="favoritesbox0">Favorites</div>
      {user.favoriteList.map((currentFav) => {
        return (
          <div className="posts0" key={currentFav._id}>
            <p>Title: {currentFav.title}</p>
            <p>Category: {currentFav.category}</p>
            <p>Description: {currentFav.description}</p>
          </div>
        );
      })}
    </div>
  );
}
