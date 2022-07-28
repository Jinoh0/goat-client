export function SearchedUserFavorites({ user }) {
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
}
