export function LoggedFavorites({ user }) {
  return (
    <div className="halfbox0">
      {/* <div className="favoritetitle0"> */}
        <div className="favoritesbox0">Favorites</div>
      {/* </div> */}
      {user.favoriteList.map((currentFav) => {
        return (
          <div className="textbox0">
            <p>{currentFav.title}</p>
            <p>{currentFav.category}</p>
            <p>{currentFav.description}</p>
          </div>
        );
      })}
    </div>
  );
}
