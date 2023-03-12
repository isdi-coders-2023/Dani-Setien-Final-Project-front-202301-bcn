import { useEffect } from "react";
import useToken from "../hooks/useToken/useToken";
import PaintingsList from "../components/PaintingsList/PaintingsList";

const Home = (): JSX.Element => {
  const { fetchToken } = useToken();

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  return <PaintingsList />;
};

export default Home;
