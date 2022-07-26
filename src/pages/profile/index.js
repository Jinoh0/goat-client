import { LoggedAbout } from "../../components/loggedProfile/loggedAbout";
import { LoggedActivities } from "../../components/loggedProfile/loggedActivity";
import { LoggedFavorites } from "../../components/loggedProfile/loggedFavorites";

export function Profile() {
  return (
    <>
      <LoggedAbout />
      <LoggedFavorites />
      <LoggedActivities />
    </>
  );
}
