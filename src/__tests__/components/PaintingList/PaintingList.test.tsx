import { screen } from "@testing-library/react";
import PaintingsList from "../../../components/PaintingsList/PaintingsList";
import { mockPaintings } from "../../../utils/testUtils/mockHardcodedData";
import renderWithProviders from "../../../utils/testUtils/renderWithProviders";

describe("Given a PaintingList component", () => {
  describe("When is given a list of two paintings", () => {
    test("Then it should show two images of paintings", () => {
      const firstPaintingName = mockPaintings[0].name;
      const secondPaintingName = mockPaintings[1].name;

      const preloadedState = { paintings: mockPaintings };

      renderWithProviders(<PaintingsList />, preloadedState);

      const firstPainting = screen.getByRole("img", {
        name: firstPaintingName,
      });
      const secondPainting = screen.getByRole("img", {
        name: secondPaintingName,
      });

      expect(firstPainting).toBeInTheDocument();
      expect(secondPainting).toBeInTheDocument();
    });
  });
});
