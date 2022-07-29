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
    <div className="flex flex-col m-6 p-6 items-center">
      <div className="justify-center">
        <form onSubmit={handleSubmit}>
          <textarea
            className="mb-2 shadow-lg w-[700px] h-[100px] inputs1"
            onChange={handleChange}
            type="text"
            value={form.comment}
            name="comment"
            placeholder="Type in a solution or a tip"
            minLength="64"
            required
          ></textarea>
          <div className="text-center pophover1">
            <button className="" type="submit">
              Send it 🚀
            </button>
          </div>
          <hr></hr>
        </form>
      </div>
    </div>
  );
}
