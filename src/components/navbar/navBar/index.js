import { UserCard } from "../userCard";
import { SettingsButton } from "../settingsButton";
import style from "./style.module.css";

export function NavBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <UserCard />
      <SettingsButton />
    </div>
  );
}
