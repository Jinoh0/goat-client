import { UserCard } from "../userCard";
import { SettingsButton } from "../settingsButton";
import goatlogo from "../../../assets/images/cabrita.png";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="navbar1">
      <div className="goatlogo0">
        <Link to={"/feed"}>
          <img
            src={goatlogo}
            alt=""
            className="flex justify-center items-center self-center ml-[17%] mt-[12%] "
          />
          <p className="text-graygoat w-[37%] self-center flex justify-center mt-[-25%] ml-[28%]  font-bold bg-orangegoat">
            GOAT.ASK
          </p>
        </Link>
      </div>
      <UserCard />
      <SettingsButton />
    </div>
  );
}
