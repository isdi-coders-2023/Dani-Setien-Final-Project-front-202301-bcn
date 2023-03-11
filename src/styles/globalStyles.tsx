import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    box-sizing: border-box;
  }

  h1, h2, h3 {
  font-weight: normal;
  margin: 0;
  }

  ul, ol, li {
    list-style-type: none;
    padding: 0;
    margin: 0;
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

  html {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
    sans-serif;
  }

  .toast-error {
    background-color: ${(props) => props.theme.colors.modalError};
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export default GlobalStyles;
