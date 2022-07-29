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
    <div className="flex justify-center items-center flex-col w-40 ">
      {isToggled ? (
        <div className="">
          <div className="   flex justify-center text-center">
            <span className="pophover1 " onClick={toggle}>
              Nevermind...
            </span>
          </div>
          <div className=" flex justify-center text-center">
            <form onSubmit={handleSubmit}>
              <input
                className="inputs1"
                type="text"
                value={form.title}
                name="title"
                onChange={handleChange}
                placeholder="What's your question about?"
                minLength="12"
                maxLength="48"
                required
                size="36"
                height="100%"
              ></input>
              <textarea
                className="mb-2 w-96 h-[100px] inputs1"
                type="text"
                value={form.description}
                name="description"
                onChange={handleChange}
                placeholder="Describe your problem 🖋️"
                minLength="64"
                required
              ></textarea>
              <select
                className="inputs1"
                name="category"
                id="category"
                onChange={handleChange}
              >
                <option defaultValue hidden>
                  Which language/framework? 💾
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
                <option value="other">Other</option>
              </select>
              <div className=" flex justify-center text-center">
                <button className="pophover1 " type="submit">
                  ask 😵
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="">
          <span className="pophover1" onClick={toggle}>
            Ask anything
          </span>
        </div>
      )}
    </div>
  );
}
