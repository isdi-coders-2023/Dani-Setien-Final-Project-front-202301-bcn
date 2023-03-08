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
  },
  margin: {
    page: "20px",
  },
};

export default theme;
