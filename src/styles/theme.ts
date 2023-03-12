import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#fff",
    secondary: "#000",
    accent: "#0d2cce",
    grayscale: {
      lightest: "#f7f7f7",
      ligther: "#e7e7e7",
      gray: "#d8d8d8",
      dark: "#c2c2c2",
      darker: "#999",
      darkest: "#707070",
    },
    modalError: "#F3E4E2",
  },
  fonts: {
    primary: "Quattrocento Sans",
  },
  fontWeight: {
    primary: 400,
  },
  fontSize: {
    medium: "18px",
    bigger: "20px",
    button: "24px",
    title: "30px",
  },
  margin: {
    page: "20px",
    titleBottom: "20px",
  },
  lineHeight: {
    title: "52px",
  },
  input: {
    fontSize: "22px",
    paddingBottom: "12px",
    paddingTop: "12px",
    marginTop: "8px",
    marginBottom: "32px",
    paddingLeft: "12px",
  },
  label: {
    marginTop: "8px",
    paddingBottom: "8px",
  },
  borderRadius: {
    button: "25px",
  },
  form: {
    width: "485px",
  },
  breakpoint: {
    smallest: "525px",
  },
  cardPainting: {
    width: "320px",
    buttonWidthAndHeigth: "80px",
    buttonDistanceToEdge: "15px;",
    informationMarginTop: "10px",
    fontSizeAuthor: "30px",
    fontSizeNameOfPainting: "23px",
    fontSizePrice: "27px",
    fontSizeFavoriteIcon: "90px",
    imageWidth: "320px",
  },
};

export default theme;
