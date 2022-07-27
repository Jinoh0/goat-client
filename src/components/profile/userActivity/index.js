import { differenceInDays } from "date-fns";

export function SearchedUserActivities({ user }) {
  const activities = [];
  const posts = user.postList;
  const comments = user.commentList;

  console.log(activities);
  return (
    <>
      <h1>____________activities________________</h1>
      <h1>------posts-------</h1>
      {posts.map((c) => {
        return (
          <>
            <p>{c.title}</p>
            <p>{c.category}</p>
            <p>{c.description}</p>
          </>
        );
      })}
      <h1>--------comments----------</h1>
      {comments.map((c) => {
        return (
          <>
            <p>{c.comment}</p>
            <p>
              commented {""}
              {differenceInDays(
                new Date(c.createdAt),
                new Date(Date.now())
              )}{" "}
              {""}
              days ago
              {/* by <strong>{c.owner}</strong> */}
            </p>
          </>
        );
      })}
    </>
  );
}
