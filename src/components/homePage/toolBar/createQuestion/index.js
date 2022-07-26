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
  }
  async function toggle() {
    try {
      if (!isToggled) {
        setIsToggled(true);
      } else {
        setIsToggled(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (isToggled) {
    return (
      <div>
        <div>
          <span onClick={toggle}>Or don't...</span>
        </div>
        <div>
          <form>
            <input
              type="text"
              value={form.title}
              name="title"
              onChange={handleChange}
              placeholder="What's your question about?"
            ></input>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span onClick={toggle}>Ask anything</span>
      </div>
    );
  }
}
