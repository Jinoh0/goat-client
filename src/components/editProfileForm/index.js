import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function EditProfileForm() {
  const navigate = useNavigate();
  const [file, setFile] = useState("");

  const [form, setForm] = useState({
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

  function handleFile(e) {
    setFile(e.target.files[0]);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", file);
      const responsePic = await api.post("/upload-image", uploadData);
      return responsePic.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const imgURL = await handleUpload();
      const response = await api.patch(`/user/update-profile`, {
        ...form,
        img: imgURL,
      });
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className="ml-[16%]">

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Profile Photo"
          type="file"
          name="img"
          onChange={handleFile}
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
    </div>
  );
}
