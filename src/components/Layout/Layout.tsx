import { useEffect } from "react";
import useToken from "../../hooks/useToken/useToken";
import { useAppSelector } from "../../store/hooks";
import Loader from "../Loader/Loader";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { fetchTokenAndLogin } = useToken();

  useEffect(() => {
    fetchTokenAndLogin();
  }, [fetchTokenAndLogin]);

  return (
    <>
      {isLoading && <Loader />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
