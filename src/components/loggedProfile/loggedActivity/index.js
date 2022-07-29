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
      <h1>____________activities_______</h1>
      <h1>------posts-------</h1>
      {posts.map((c) => {
        return (
          <>
            <p>{c.title}</p>
            <p>{c.category}</p>
            <p>{c.description}</p>
          </>
        );
      })}
      <h1>--------comments----------</h1>
      {comments.map((c) => {
        return (
          <>
            <p>{c.comment}</p>
            <p>
              commented {""}
              {differenceInDays(
                new Date(c.createdAt),
                new Date(Date.now())
              )}{" "}
              {""}
              days ago by <strong>{c.owner}</strong>
            </p>
          </>
        );
      })}
    </div>
  );
}
