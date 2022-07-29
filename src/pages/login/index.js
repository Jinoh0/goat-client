import { LoginForm } from "../../components/login/loginForm";
import { SignUpForm } from "../../components/login/signUpForm";
import goatlogo from "../../assets/images/cabrita.png";
import { Link } from "react-router-dom";
export function Login() {
  return (
    <div>
      {/* <span>GOAT.ASK</span> */}
      <Link to="/feed">
        <div className="title0 ">
          GOAT.ASK
          <img
            src={goatlogo}
            alt="goat logo"
            className="h-[10%] w-[10%]   ml-[56%] mt-[-9%] animate-bounce "
          />
        </div>
      </Link>

      <div className="centerlogin0">
        <LoginForm />
        <span className="logindivider0">.</span>
        <SignUpForm />
      </div>
    </div>
  );
}
