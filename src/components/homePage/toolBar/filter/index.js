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
    <div className="searchbar1">
      <select
        className="inputs1 w-96"
        name="category"
        id="category"
        onChange={handleSelect}
      >
        <option defaultValue>Search by language/framework 💾</option>
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

      <ul className=" ">
        {post
          .filter((e) => {
            return e.category === selected;
          })
          .map((c) => {
            return (
              <div key={c._id}>
                <Link to={`/question/${c._id}`}>
                  <li className="dropdown1">{c.title}</li>
                </Link>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
