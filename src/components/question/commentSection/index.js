import { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";

export function CommentSection() {
  const { id } = useParams();
  const [form, setForm] = useState({
    comment: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post(`/comment/${id}/create-comment`, form);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="border m-2">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={form.comment}
          name="comment"
          placeholder="Type in a solution or a tip"
          minLength="64"
          required
        ></input>
        <button type="submit">Send it</button>
      </form>
    </div>
  );
}
