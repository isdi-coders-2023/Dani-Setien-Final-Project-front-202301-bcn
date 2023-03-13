import LogButtonStyled from "./LogButtonStyled";

interface LogButtonProps {
  isLogged: boolean;
}

const LogButton = ({ isLogged }: LogButtonProps): JSX.Element => {
  return (
    <LogButtonStyled>
      <button className={`button ${isLogged ? "log-out" : "log-in"}`}>
        {isLogged ? "Log out" : "Log in"}
      </button>
    </LogButtonStyled>
  );
};

export default LogButton;
