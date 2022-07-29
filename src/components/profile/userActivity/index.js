import { differenceInDays } from "date-fns";

export function SearchedUserActivities({ user }) {
  const activities = [];
  const posts = user.postList;
  const comments = user.commentList;

  return (
    <div className="activities0 break-words w-[70%]">
      <h1>Activities</h1>
      <h1>Posts</h1>
      {posts.map((c) => {
        return (
          <div className="posts0 rounded-md shadow-lg" key={c._id}>
            <p>Title: {c.title}</p>
            <p>Category: {c.category}</p>
            <p>Description: {c.description}</p>
          </div>
        );
      })}

      <h1>Comments</h1>
      {comments.map((c) => {
        return (
          <div className="posts0 rounded-md shadow-lg" key={c._id}>
            <p>{c.comment}</p>
            <p>
              commented {""}
              {differenceInDays(
                new Date(c.createdAt),
                new Date(Date.now())
              )}{" "}
              {""}
              days ago
            </p>
          </div>
        );
      })}
    </div>
  );
}
