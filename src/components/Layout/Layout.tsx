import { useAppSelector } from "../../store/hooks";
import Loader from "../Loader/Loader";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <>
      {isLoading && <Loader />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
