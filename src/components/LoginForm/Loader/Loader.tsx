import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled className="loader-container">
      <div className="loader-bar"></div>
    </LoaderStyled>
  );
};

export default Loader;
