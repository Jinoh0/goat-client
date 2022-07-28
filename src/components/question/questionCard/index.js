import { differenceInDays } from "date-fns";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
export function QuestionCard({ postDetail }) {
  const { id } = useParams();
  async function favQuestion() {
    try {
      const response = await api.patch(`/post/${id}/favorite`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="border m-2">
        <h1>
          <strong>{postDetail.title}</strong>{" "}
          <span>
            asked by {postDetail.owner.email}{" "}
            {differenceInDays(
              new Date(Date.now()),
              new Date(postDetail.createdAt)
            )}{" "}
            days ago
          </span>
        </h1>
        <p>{postDetail.description}</p>

        <button onClick={favQuestion}>favorite</button>
      </div>
    </div>
  );
}
