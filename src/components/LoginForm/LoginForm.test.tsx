import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import StyledComponentsRegistry from "../../styles/styled-components/registry";
import LoginForm from "./LoginForm";
import GlobalStyles from "../../styles/globalStyles";

describe("Given a LoginFormStyled component", () => {
  describe("When rendered", () => {
    test("Then it should show the label 'Email", () => {
      const expectedLabel = "Email";

      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
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
            <GlobalStyles />
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
            <GlobalStyles />
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
            <GlobalStyles />
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
            <GlobalStyles />
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

  describe("When the user inputs 'mail@address.com' as email", () => {
    test("Then the Email input value should be 'mail@address.com'", async () => {
      const userEmail = "mail@address.com";

      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LoginForm />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const emailInput = screen.getByLabelText("Email");

      await act(async () => await userEvent.type(emailInput, userEmail));

      expect(emailInput).toHaveValue(userEmail);
    });
  });

  describe("When the user inputs 'username1234' as password", () => {
    test("Then the Password input value should be 'username1234'", async () => {
      const userPassword = "username1234";

      render(
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <LoginForm />
          </ThemeProvider>
        </StyledComponentsRegistry>
      );

      const passwordInput = screen.getByLabelText("Password");

      await act(async () => await userEvent.type(passwordInput, userPassword));

      expect(passwordInput).toHaveValue(userPassword);
    });
  });
});
