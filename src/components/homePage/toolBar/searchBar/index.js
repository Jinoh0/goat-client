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
    <div className="searchbar1">
      <form>
        <label htmlFor="input-search" className=""></label>
        <input
          size="36"
          className="inputs1"
          name="search"
          type="text"
          onChange={searchItems}
          placeholder="Search                              🔍"
          onClick={toggle}
        />
      </form>
      {isToggled && (
        <ul>
          {filteredItem.map((c) => {
            return (
              <div key={c._id} className="justify-items-center">
                <Link to={`/question/${c._id}`}>
                  <li className="dropdown1">{c.title}</li>
                </Link>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
