export function SearchedUserAbout({ user }) {
  return (
    <div className="usercard0 profiletext0 rounded-md shadow-lg ml-[-1px] ">
      <img src={user.img} alt="profile pic" />
      <h1>username: {user.userName}</h1>
      <h4>email: {user.email}</h4>
      <p>bio: {user.bio}</p>
    </div>
  );
}
