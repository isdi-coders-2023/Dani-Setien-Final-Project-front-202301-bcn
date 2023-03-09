import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import StyledComponentsRegistry from "../../styles/styled-components/registry";
import LoginForm from "./LoginForm";

describe("Given a LoginFormStyled component", () => {
  describe("When rendered", () => {
    test("Then it should show the label 'Email", () => {
      const expectedLabel = "Email";

      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <LoginForm />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const emailLabel = screen.getByLabelText(expectedLabel, {
        selector: "input",
      });

      expect(emailLabel).toBeInTheDocument();
    });

    test("Then it should show the input 'Email'", () => {
      const expectedInput = "Email";

      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <LoginForm />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const emailLabel = screen.getByLabelText(expectedInput);

      expect(emailLabel).toBeInTheDocument();
    });

    test("Then it should show the label 'Password'", () => {
      const expecetedLabel = "Password";

      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <LoginForm />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const passwordLabel = screen.getByLabelText(expecetedLabel, {
        selector: "input",
      });

      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show the input 'Password'", () => {
      const expectedInput = "Password";

      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <LoginForm />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const passwordLabel = screen.getByLabelText(expectedInput);

      expect(passwordLabel).toBeInTheDocument();
    });

    test("Then it should show the button 'Log in'", () => {
      const expectedButtonName = "Log in";

      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <LoginForm />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const loginButton = screen.getByRole("button", {
        name: expectedButtonName,
      });

      expect(loginButton).toBeInTheDocument();
    });
  });
});
