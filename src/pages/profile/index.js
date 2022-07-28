import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { LoggedAbout } from "../../components/loggedProfile/loggedAbout";
import { LoggedActivities } from "../../components/loggedProfile/loggedActivity";
import { LoggedFavorites } from "../../components/loggedProfile/loggedFavorites";
import { SettingsButton } from "../../components/navbar/settingsButton";

export function Profile() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get("/user/profile");
        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <>
      {!isLoading && (
        <>
          <SettingsButton />
          <LoggedAbout user={user} />
          <LoggedFavorites user={user} />
          <LoggedActivities user={user} />
        </>
      )}
    </>
  );
}
