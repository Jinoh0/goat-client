import { differenceInDays } from "date-fns";

export function QuestionCard({ postDetail }) {
  return (
    <div>
      <div className="border m-2">
        <h1>
          <strong>{postDetail.title}</strong>{" "}
          <span>
            asked by {postDetail.owner.email}{" "}
            {differenceInDays(
              new Date(postDetail.createdAt),
              new Date(Date.now())
            )}{" "}
            days ago
          </span>
        </h1>
        <p>{postDetail.description}</p>
      </div>
    </div>
  );
}
