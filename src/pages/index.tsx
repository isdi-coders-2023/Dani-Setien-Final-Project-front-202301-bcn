import PaintingsList from "../components/PaintingsList/PaintingsList";
import HomePageStyled from "./HomePageStyled";
import Header from "../components/Header/Header";

const Home = (): JSX.Element => {
  return (
    <HomePageStyled>
      <Header />
      <h3 className="section-title">Other works from this auction</h3>
      <PaintingsList />
    </HomePageStyled>
  );
};

export default Home;
