import { screen } from "@testing-library/react";
import Header from "../../components/Header/Header";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

describe("Given a Header component", () => {
  describe("When rendered", () => {
    test("Then it should show a logo image", () => {
      const expectedLogoName = "brushbids logo";

      renderWithProviders(<Header />);

      const logo = screen.getByRole("img", {
        name: expectedLogoName,
      });

      expect(logo).toBeInTheDocument();
    });

    test("Then it should show a Log out button", () => {
      const expectedButtonText = "Log out";

      renderWithProviders(<Header />);

      const logoutButton = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(logoutButton).toBeInTheDocument();
    });
  });
});
