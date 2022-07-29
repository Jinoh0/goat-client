import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { differenceInDays } from "date-fns";
import { differenceInMinutes } from "date-fns";

export function LoggedActivities({ user }) {
  const activities = [];

  const posts = user.postList;
  const comments = user.commentList;

  return (
    <div className="activities0">
      <h1>User Activities:</h1>
      <h1>Posts:</h1>
      {posts.map((c) => {
        return (
          <div className="posts0" key={c._id}>
            <p>Title: {c.title}</p>
            <p>Category: {c.category}</p>
            <p>Description: {c.description}</p>
          </div>
        );
      })}
      <h1>Comments:</h1>
      {comments.map((c) => {
        return (
          <div className="posts0" key={c._id}>
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
