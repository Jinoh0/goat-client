import { useState, useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
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
      response.data.user.userName
        ? navigate("/feed")
        : navigate("/edit-profile");

      // }
    } catch (error) {
      console.log(error);
      toast.error("Invalid email or password");
    }
  }

  return (
    <div className="ml-[25%]">
      <form onSubmit={handleSubmit} className="form0">
        <div>Login</div>
        <input
          className="input0"
          placeholder="E-mail"
          type="text"
          value={form.email}
          name="email"
          onChange={handleChange}
        />

        <input
          className="input0"
          placeholder="Password"
          type="password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />

        <button className="button0" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
