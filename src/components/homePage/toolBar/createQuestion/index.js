import React from "react";
import { api } from "../../../../api/api";
import { useState } from "react";

export function CreateQuestion() {
  const [isToggled, setIsToggled] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/post/create-post", form);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  function toggle() {
    setIsToggled(!isToggled);
  }

  return (
    <div className="flex flex-col w-56 border">
      {isToggled ? (
        <div className="flex flex-col w-56 border">
          <div>
            <span onClick={toggle}>Or don't...</span>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={form.title}
                name="title"
                onChange={handleChange}
                placeholder="What's your question about?"
                minLength="12"
                maxLength="48"
                required
              ></input>
              <input
                type="text"
                value={form.description}
                name="description"
                onChange={handleChange}
                placeholder="Describe your problem"
                minLength="64"
                required
              ></input>
              <select name="category" id="category" onChange={handleChange}>
                <option defaultValue hidden>
                  Which language/framework?
                </option>
                <option value="JavaScript">JavaScript</option>
                <option value="HTML">HTML</option>
                <option value="React">React</option>
                <option value="Mongoose">Mongoose</option>
                <option value="Express">Express</option>
                <option value="CSS">CSS</option>
                <option value="MongoDB">MongoDB</option>
                <option value="Bootstrap">Bootstrap</option>
                <option value="GIT & GITHUB">GIT & GITHUB</option>
                <option value="NodeJS">NodeJs</option>
                {/* <option value="other">Other</option> */}
              </select>
              <button type="submit">ask</button>
            </form>
          </div>
        </div>
      ) : (
        <span onClick={toggle}>Ask anything</span>
      )}
    </div>
  );
}
