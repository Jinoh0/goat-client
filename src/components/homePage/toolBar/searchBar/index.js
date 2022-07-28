import { useState, useEffect } from "react";
import { api } from "../../../../api/api";
import { Link } from "react-router-dom";
import { set } from "date-fns";

export function SearchBar() {
  const [post, setPost] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  function toggle() {
    setIsToggled(!isToggled);
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

  let searchItems = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setSearchInput(lowerCase);
  };

  const filteredItem = post.filter((e) => {
    if (searchInput === "") {
      return e;
    } else {
      return e.title.toLowerCase().includes(searchInput);
    }
  });
  console.log(filteredItem);
  return (
    <>
      <form>
        <label htmlFor="input-search">Search:</label>
        <input
          name="search"
          type="text"
          onChange={searchItems}
          placeholder="search"
          onClick={toggle}
        />
      </form>
      {isToggled && (
        <ul>
          {filteredItem.map((c) => {
            return (
              <div key={c._id}>
                <Link to={`/question/${c._id}`}>
                  <li>{c.title}</li>
                </Link>
              </div>
            );
          })}
        </ul>
      )}
    </>
  );
}
