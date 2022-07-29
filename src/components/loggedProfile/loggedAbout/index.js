export function LoggedAbout({ user }) {
  return (
    <div className="halfbox0">
      <h1>About me:</h1>
      <p>{user.bio}</p>
    </div>
  );
}
