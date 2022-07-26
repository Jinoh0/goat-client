import { useState, useEffect } from "react";
import { api } from "../../../api/api";

export function LoggedActivities() {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    async function fetchUserActivities() {
      try {
        const response = await api.get("/user/profile");
        setLoggedInUser(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUserActivities();
  }, []);

  const activities = [loggedInUser.postList, loggedInUser.commentList];
  const posts = loggedInUser.postList;
  
  const comments = loggedInUser.commentList;
//   console.log(posts, comments);
//   console.log(activities)
  
  return (
    <>
      {activities.map((c) => {
        {/* console.log(c) */}
        return (
          <>
            <p>{c}</p>
          </>
        );
      })}
    </>
  );
}
