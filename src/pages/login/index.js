import { LoginForm } from "../../components/login/loginForm";
import { SignUpForm } from "../../components/login/signUpForm";

export function Login() {
  return (
    <>
      <div className="title0">GOAT.ASK</div>
      <div className="centerlogin0">
        <LoginForm />
        <span className="logindivider0">.</span>
        <SignUpForm />
      </div>
    </>
  );
}
