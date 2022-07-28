import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { Link } from "react-router-dom";
import { differenceInDays } from "date-fns";
export function PostCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get("/post/all-posts");

        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  }, []);

  return (
    <div className="border-2  flex flex-col justify-center text-center items-center">
      {posts.map((currentElement) => {
        return (
          <div key={currentElement._id} className="questionCard1">
            <Link
              to={`/question/${currentElement._id}`}
              style={{ textDecoration: "none" }}
            >
              <h1>{currentElement.title}</h1>
              <p>
                asked {""}
                {differenceInDays(
                  new Date(Date.now()),
                  new Date(currentElement.createdAt)
                )}{" "}
                {""}
                days ago by <strong>{currentElement.owner.email}</strong>
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
