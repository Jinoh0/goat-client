export function SearchedUserAbout({ user }) {
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
