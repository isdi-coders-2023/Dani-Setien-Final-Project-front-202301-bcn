import {
  initialPaintingsState,
  loadPaintingsActionCreator,
  paintingsReducer,
} from "../../store/features/paintingsSlice/paintingsSlice";
import { Paintings } from "../../types/paintingTypes";
import { mockPaintings } from "../../utils/testUtils/mockHardcodedData";

describe("Given a paintingsSlice", () => {
  describe("When its function loadPaintings is called", () => {
    test("Then it should update our paintings list with the paintings it gets", () => {
      const expectedPaintingsState: Paintings = [...mockPaintings];

      const loadPaintings = loadPaintingsActionCreator(mockPaintings);

      const updatedPaintings = paintingsReducer(
        initialPaintingsState,
        loadPaintings
      );

      expect(updatedPaintings).toStrictEqual(expectedPaintingsState);
    });
  });
});
