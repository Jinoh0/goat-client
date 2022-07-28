import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { differenceInDays } from "date-fns";
import { differenceInMinutes } from "date-fns";

export function LoggedActivities({user}) {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   async function fetchUserActivities() {
  //     try {
  //       const response = await api.get("/user/profile");
  //       setUser(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchUserActivities();
  // }, []);

  const activities = [];

  const posts = user.postList;
  const comments = user.commentList;
  // console.log(user);

  // posts.map((c)=>{
  //   c.title.push(activities)
  // })

  // comments.map((c)=>{
  //   c.comment.push(activities)
  // })

console.log(activities)
  return (
    <>
      {/* {activities.postList.map((c) => {
        return (
          <div key="a">
            <p>{c}</p>
          </div>
        );
      })} */}
<h1>____________activities________________</h1>
      <h1>------posts-------</h1>
      {posts.map((c)=>{
        return (
          <>
          <p>{c.title}</p>
          <p>{c.category}</p>
          <p>{c.description}</p>
          </>
        )
      })}
      <h1>--------comments----------</h1>
      {comments.map((c)=>{
        return(
          <>
          <p>{c.comment}</p>
          <p>
                commented {""}
                {differenceInDays(
                  new Date(c.createdAt),
                  new Date(Date.now())
                )}
                {" "}
                {""}
                days ago 
                {/* by <strong>{c.owner}</strong> */}
              </p>
          </>

        )
      })}
    </>
  );
}
