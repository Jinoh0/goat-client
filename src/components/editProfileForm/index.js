import { api } from "../../api/api";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

//trocarnome da funcao depois q criar a page
export function EditProfile() {
  //   const navigate = useNavigate();
  const [file, setFile] = useState("");

  const [pic, setPic] = useState({
    img: "",
  });

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

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.patch(`/user/update-profile`, form);
      const uploadData = new FormData();

      uploadData.append("picture", file);
      const responsePic = await axios.post(
        "http://localhost:4000/upload-image",
        uploadData
      );

      setPic({ ...pic, img: responsePic.data.url });
      console.log(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Profile Photo"
          type="file"
          value={pic.img}
          // agora nao ta dando certo , depois tirar
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
    </>
  );
}
