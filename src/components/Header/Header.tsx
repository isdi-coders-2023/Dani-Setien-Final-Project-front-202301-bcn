import Image from "next/image";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <Image
        src={"/favicon.ico"}
        alt="brushbids logo"
        width={50}
        height={50}
        priority
        className="logo"
      ></Image>

      <span className="navigation-link">Home</span>
      <span className="navigation-link">Add</span>
      <div className="button-container">
        <button className="logout-button">Log out</button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
