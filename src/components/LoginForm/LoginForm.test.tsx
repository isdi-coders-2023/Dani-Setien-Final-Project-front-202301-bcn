import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import StyledComponentsRegistry from "../../styles/styled-components/registry";
import LoginForm from "./LoginForm";

describe("Given a LoginFormStyled component", () => {
  describe("When rendered", () => {
    test("Then it should show the label 'Email", () => {
      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <LoginForm />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const emailLabel = screen.getByLabelText("Email", { selector: "input" });

      expect(emailLabel).toBeInTheDocument();
    });

    test("Then it should show the input 'Email'", () => {
      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <LoginForm />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const emailLabel = screen.getByLabelText("Email");

      expect(emailLabel).toBeInTheDocument();
    });

    test("Then it should show the label 'Password'", () => {
      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <LoginForm />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const passwordLabel = screen.getByLabelText("Password", {
        selector: "input",
      });

      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show the input 'Password'", () => {
      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <LoginForm />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const passwordLabel = screen.getByLabelText("Password");

      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show the button 'Log in'", () => {
      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <LoginForm />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const loginButton = screen.getByRole("button", { name: "Log in" });

      expect(loginButton).toBeInTheDocument();
    });
  });
});
