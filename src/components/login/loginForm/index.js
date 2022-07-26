import { useState, useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const [loggedInUser, setLoggedInUser] = useState({});

  const { setLoggedInUser } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("/user/login", form);
      setLoggedInUser({ ...response.data });
      localStorage.setItem("loggedInUser", JSON.stringify(response.data));
      console.log(response.data);

      // const loggedInUser = response.data;
      // if (loggedInUser._id !== "") {
      navigate("/feed");
      // }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="E-mail"
          type="text"
          value={form.email}
          name="email"
          onChange={handleChange}
        />

        <input
          placeholder="Password"
          type="password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
