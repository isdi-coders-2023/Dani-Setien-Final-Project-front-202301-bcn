import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/globalStyles";
import StyledComponentsRegistry from "../../styles/styled-components/registry";
import theme from "../../styles/theme";
import LoginPage from "./page";

describe("Given a LoginPage", () => {
  describe("When rendered", () => {
    test("Then it should show the Brushbids logo", () => {
      const expectedLogoName = "brushbids logo";

      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LoginPage />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const brushbidsLogo = screen.getByRole("img", {
        name: expectedLogoName,
      });

      expect(brushbidsLogo).toBeInTheDocument();
    });

    test(`Then it should show a title "Log in to collect art by the world's leading artists"`, () => {
      const expectedTitle =
        "Log in to collect art by the world's leading artists";

      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LoginPage />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const loginPageTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(loginPageTitle).toBeInTheDocument();
    });

    test(`Then it should show a LoginForm component with its 'Log in' button`, () => {
      const expectedButtonName = "Log in";

      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LoginPage />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const loginButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      expect(loginButton).toBeInTheDocument();
    });

    test("Then it should show the question 'Do you want an account?'", () => {
      const expectedText = "Do you want an account?";

      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LoginPage />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const registerQuestion = screen.getByText(expectedText);

      expect(registerQuestion).toBeInTheDocument();
    });
  });
});
