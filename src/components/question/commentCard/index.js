import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { toast } from "react-hot-toast";
export function CommentCard() {
  const { id } = useParams();
  const [comment, setComment] = useState([]);

  useEffect(() => {
    async function fetchComment() {
      try {
        const response = await api.get(`/comment/${id}/all-comments`);
        console.log(response.data);
        setComment(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchComment();
  }, [id]);
  async function deleteComment() {
    try {
      await api.delete();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" flex flex-col  items-center">
      <h1>comments</h1>
      {comment.map((current) => {
        return (
          <div
            key={current._id}
            className="justify-center shadow-lg break-words border-2 rounded-md p-8 m-2 w-4/5"
          >
            <h3>
              <strong>{current.owner.email}</strong>
            </h3>
            <p>{current.comment}</p>
            <div className="text-end">
              <button
                className="regularhover1 mt-6 "
                onClick={async function likeComment() {
                  try {
                    const id = current._id;
                    const response = await api.patch(`/comment/like/${id}`);
                    console.log(response);
                    toast.success("Liked/Unliked");
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                like 🐐
              </button>{" "}
              {current.likes ? (
                <span>{current.likes.length}</span>
              ) : (
                <span>0</span>
              )}
              <div>
                <button
                  onClick={async function deleteComment() {
                    try {
                      const id = current._id;
                      await api.delete(`/comment/delete/${id}`);
                    } catch (error) {
                      console.log(error);
                      toast.error("you can't delete this comment");
                    }
                  }}
                >
                  Delete comment
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
