import { api } from "../../api/api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavBar } from "../../components/navbar/navBar";
import { QuestionCard } from "../../components/question/questionCard";
import { CommentCard } from "../../components/question/commentCard";
import { CommentSection } from "../../components/question/commentSection";
export function Question() {
  const { id } = useParams();
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

  useEffect(
    () =>
      async function fetchPost() {
        try {
          const response = await api.get(`/post/${id}`);

          setPostDetail(response.data);
          console.log(response.data);
          return null;
        } catch (error) {
          console.log(error);
        }
        fetchPost();
      },
    [id]
  );

  return (
    <div>
      <NavBar />
      <QuestionCard postDetail={postDetail} />
      <CommentSection />
      <CommentCard />
    </div>
  );
}
