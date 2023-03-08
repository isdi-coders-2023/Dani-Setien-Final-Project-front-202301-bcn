import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 20px;
    font-family: ${(props) => props.theme.fonts.primary};
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  }
  ul, ol, li {
    list-style-type: none;
    padding: 0;
  }
  button, input {
    font-family: inherit;
    font-size: inherit;
    border: none;
  }
  button {
    cursor: pointer;
  }
  a, a:active, a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
