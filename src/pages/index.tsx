import { useEffect } from "react";
import useToken from "../hooks/useToken/useToken";

const Home = (): JSX.Element => {
  const { fetchToken } = useToken();

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  return <></>;
};

export default Home;
