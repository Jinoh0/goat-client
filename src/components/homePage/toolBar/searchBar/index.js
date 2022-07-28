import { useState, useEffect } from "react";
import { api } from "../../../../api/api";

export function SearchBar() {
  const [post, setPost] = useState([]);
  const [searchInput, setSearchInput] = useState("");

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

  return (
    <>
      <form>
        <label htmlFor="input-search">Search:</label>
        <input
          name="search"
          type="text"
          onChange={searchItems}
          placeholder="search"
        />
      </form>
    </>
  );
}
