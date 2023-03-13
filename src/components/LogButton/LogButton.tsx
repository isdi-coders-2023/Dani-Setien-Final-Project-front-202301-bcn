import Link from "next/link";
import { frontRouteUtils } from "../../utils/routeUtils/routeUtils";
import LogButtonStyled from "./LogButtonStyled";

interface LogButtonProps {
  isLogged: boolean;
}

const LogButton = ({ isLogged }: LogButtonProps): JSX.Element => {
  return (
    <LogButtonStyled>
      <Link href={isLogged ? "" : frontRouteUtils.loginPage}>
        <button className={`button ${isLogged ? "log-out" : "log-in"}`}>
          {isLogged ? "Log out" : "Log in"}
        </button>
      </Link>
    </LogButtonStyled>
  );
};

export default LogButton;
