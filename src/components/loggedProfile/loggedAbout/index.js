export function LoggedAbout({ user }) {
  return (
    <div className="halfbox0">
      <h1>About me:</h1>
      <p className="posts0">{user.bio}</p>
    </div>
  );
}
