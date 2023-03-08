import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#fff",
    secondary: "#000",
    grayscale: {
      lightest: "#f7f7f7",
      ligther: "#e7e7e7",
      gray: "#d8d8d8",
      dark: "#c2c2c2",
      darker: "#999",
      darkest: "#707070",
    },
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
    paddingBottom: "12px",
    marginTop: "8px",
    marginBottom: "32px",
    placeholderPaddingLeft: "12px",
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
    small: "525px",
  },
};

export default theme;
