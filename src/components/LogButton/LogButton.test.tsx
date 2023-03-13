import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LogButton from "./LogButton";

export {};

describe("Given a LogButton component", () => {
  describe("When rendered when the user is logged in", () => {
    test("Then it should show the text 'Log out'", () => {
      const isLogged = true;
      const expectedText = "Log out";

      renderWithProviders(<LogButton isLogged={isLogged} />);

      const logoutButton = screen.getByText(expectedText);

      expect(logoutButton).toBeInTheDocument();
    });
  });

  describe("When rendered when the user is not logged in", () => {
    test("Then it should show the text 'Log in'", () => {
      const isLogged = false;
      const expectedText = "Log in";

      renderWithProviders(<LogButton isLogged={isLogged} />);

      const loginButton = screen.getByText(expectedText);

      expect(loginButton).toBeInTheDocument();
    });
  });
});
