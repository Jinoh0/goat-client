import { useState } from "react";
import { api } from "../../../api/api";

export function SignUpForm() {
  const [form, setForm] = useState({
    email: "",
    emailConfirm: "",
    password: "",
    passwordConfirm: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (
        form.email !== form.emailConfirm ||
        form.password !== form.passwordConfirm
      ) {
        //   toast.error("Email ou senha não correspondem a confirmação");
        console.log("email ou senha nao correspondem");
        return;
      }
      const response = await api.post("/user/signup", form);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      return;
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
          placeholder="E-mail Confirmation"
          type="text"
          value={form.emailConfirm}
          name="emailConfirm"
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          type="password"
          value={form.password}
          name="password"
          onChange={handleChange}
        />
        <input
          placeholder="Password Confirmation"
          type="password"
          value={form.passwordConfirm}
          name="passwordConfirm"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
