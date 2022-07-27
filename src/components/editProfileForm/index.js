import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function EditProfile() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    img: "",
    userName: "",
    bio: "",
  });

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get(`/user/profile`);
        setForm({ ...response.data });
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.patch(`/user/update-profile`, form);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Profile Picture"
          type="file"
          value={form.img}
          name="img"
          onChange={handleChange}
        />

        <input
          placeholder="Username"
          type="text"
          value={form.userName}
          name="userName"
          onChange={handleChange}
        />
        <input
          placeholder="Bio"
          type="text"
          value={form.bio}
          name="bio"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
