import { differenceInDays } from "date-fns";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { toast } from "react-hot-toast";
export function QuestionCard({ postDetail }) {
  const { id } = useParams();
  async function favQuestion() {
    try {
      const response = await api.patch(`/post/${id}/favorite`);
      console.log(response);
      toast.success("Saved/Unsaved to favorites");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" flex flex-col  items-center   ">
      <div className="bg-orangegoat rounded-md break-words  p-4 w-10/12 m-2 h-auto">
        <h1 className="mb-6 ">
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
        <p className="w-10/12">{postDetail.description}</p>
        <div className="text-end mt-10">
          <button className="regularhover1" onClick={favQuestion}>
            favorite ❤️{" "}
          </button>{" "}
          {postDetail.favorite ? (
            <span>{postDetail.favorite.length}</span>
          ) : (
            <span>0</span>
          )}
        </div>
      </div>
    </div>
  );
}
