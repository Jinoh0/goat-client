import { differenceInDays } from "date-fns";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { toast } from "react-hot-toast";

export function QuestionCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [postDetail, setPostDetail] = useState({
    owner: {
      email: "",
      userName: "",
    },
    title: "",
    category: "",
    link: "",
    createdAt: "",
    description: "",
    comments: [
      {
        owner: "",
        comment: "",
        createdAt: "",
        likes: [
          {
            userName: "",
          },
        ],
      },
    ],
  });

  async function favQuestion() {
    try {
      const response = await api.patch(`/post/${id}/favorite`);
      console.log(response);
      toast.success("Saved/Unsaved to favorites");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      await api.delete(`/post/delete/${id}`);
      toast.success("deleted");
      navigate("/feed");
    } catch (error) {
      console.log(error);
      toast.error("you can't delete this post");
    }
  }

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get(`/post/${id}`);

        setPostDetail(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  }, [id]);

  return (
    <div className=" flex flex-col  items-center   ">
      <div className="bg-orangegoat rounded-md break-words shadow-lg p-4 w-10/12 m-2 h-auto">
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
        <div className="text-start mt-10">
          <button className="regularhover1" onClick={favQuestion}>
            favorite ❤️{" "}
          </button>{" "}
          {postDetail.favorite ? (
            <span>{postDetail.favorite.length}</span>
          ) : (
            <span>0</span>
          )}
          <div className="text-end regularhover1">
            <button onClick={handleDelete}>Delete post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
