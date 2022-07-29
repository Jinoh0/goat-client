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
    <div className="questionBox1">
      {posts.map((currentElement) => {
        return (
          <div key={currentElement._id} className="questionCard1">
            <Link
              to={`/question/${currentElement._id}`}
              style={{ textDecoration: "none" }}
            >
              <h1 className="mb-6">{currentElement.title}</h1>
              <p className="text-end">
                asked {""}
                {differenceInDays(
                  new Date(Date.now()),
                  new Date(currentElement.createdAt)
                )}{" "}
                {""}
                days ago by{" "}
                {currentElement.owner.userName ? (
                  <strong>{currentElement.owner.userName} 🐐</strong>
                ) : (
                  <strong>{currentElement.owner.email} 🐐</strong>
                )}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
