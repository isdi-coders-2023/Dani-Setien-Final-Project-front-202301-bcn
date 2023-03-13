import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";
import LogButton from "./LogButton";
import { frontRouteUtils } from "../../utils/routeUtils/routeUtils";

describe("Given a LogButton component", () => {
  describe("When rendered when the user is logged in", () => {
    test("Then it should show the text 'Log out'", () => {
      const isLogged = true;
      const expectedText = "Log out";

      renderWithProviders(<LogButton isLogged={isLogged} />);

      const logoutButton = screen.getByText(expectedText);

      expect(logoutButton).toBeInTheDocument();
    });

    test("Then the Log out button should not link to the login page", async () => {
      const isLogged = true;
      const loginLink = frontRouteUtils.loginPage;

      const expectedText = "Log out";

      renderWithProviders(<LogButton isLogged={isLogged} />);

      const loginButtonLink = screen.getByText(expectedText).closest("a");

      expect(loginButtonLink).not.toHaveAttribute("href", loginLink);
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

    test("Then the Log in button should link to the login page", async () => {
      const isLogged = false;
      const loginLink = frontRouteUtils.loginPage;

      const expectedText = "Log in";

      renderWithProviders(<LogButton isLogged={isLogged} />);

      const loginButtonLink = screen.getByText(expectedText).closest("a");

      expect(loginButtonLink).toHaveAttribute("href", loginLink);
    });
  });
});
