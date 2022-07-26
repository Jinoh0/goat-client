import { LoginForm } from "../../components/login/loginForm";
import { SignUpForm } from "../../components/login/signUpForm";

export function Login() {
  return (
    <>
      <h1>login</h1>
      <LoginForm />
      <h1>signup</h1>
      <SignUpForm />
    </>
  );
}
