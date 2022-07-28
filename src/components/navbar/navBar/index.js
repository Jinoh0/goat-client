import { UserCard } from "../userCard";
import { SettingsButton } from "../settingsButton";

export function NavBar() {
  return (
    <div className="navbar1">
      <UserCard />
      <SettingsButton />
    </div>
  );
}
