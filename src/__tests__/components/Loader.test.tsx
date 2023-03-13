import { screen } from "@testing-library/react";
import Loader from "../../components/Loader/Loader";
import renderWithProviders from "../../utils/testUtils/renderWithProviders";

describe("Given a Loader component", () => {
  describe("When rendered", () => {
    test("Then it should show a progress indicator", () => {
      renderWithProviders(<Loader />);

      const progressIndicator = screen.getByLabelText(
        "loading progress indicator"
      );

      expect(progressIndicator).toBeInTheDocument;
    });
  });
});
