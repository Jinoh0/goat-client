import { useState, useEffect } from "react";
import { api } from "../../../../api/api";
import { Link } from "react-router-dom";

export function FilterBar() {
  const [post, setPost] = useState([]);
  const [selected, setSelected] = useState("");

  function handleSelect(e) {
    setSelected(e.target.value);
  }

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await api.get("/post/all-posts");
        console.log(response.data);
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  }, []);

  return (
    <div className="centertools1">
      <select name="category" id="category" onChange={handleSelect}>
        <option defaultValue hidden>
          Search by language/framework?
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

      {post
        .filter((e) => {
          return e.category === selected;
        })
        .map((c) => {
          return (
            <div key={c._id}>
              <div className="flex flex-col w-[300px] h-[150px]">
                <p>{c.title}</p>
                <p>{c.description}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
