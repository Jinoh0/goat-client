import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../../api/api";

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

  return (
    <div className="border m-2">
      <h1>comments</h1>
      {comment.map((current) => {
        return (
          <div key={current._id} className="border m-2">
            <h3>{current.owner.email}</h3>
            <p>{current.comment}</p>
            <button
              onClick={async function likeComment() {
                try {
                  const id = current._id;
                  const response = await api.patch(`/comment/like/${id}`);
                  console.log(response);
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              like
            </button>
          </div>
        );
      })}
    </div>
  );
}
