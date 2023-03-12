import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import usePaintings from "../../../hooks/usePaintings/usePaintings";
import { store } from "../../../store";
import { loadPaintingsActionCreator } from "../../../store/features/paintingsSlice/paintingsSlice";
import { mockPaintings } from "../../../utils/testUtils/mockHardcodedData";
import Wrapper from "../../../utils/testUtils/Wrapper";

jest.mock("node-fetch", () =>
  jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      paintings: [
        {
          id: "1",
          author: "Mary Heilmann",
          name: "New Line Up",
          year: "2018",
          gallery: "Private collection",
          technique: "Oil on canvas",
          size: "40 x 50 in",
          medium: "Painting",
          materials: "Oil paint, canvas",
          unique: true,
          certificate: true,
          rarity: "unique",
          condition: "excellent",
          signature: true,
          price: 28000,
          frame: false,
          highlightOrder: 1,
          summary:
            "Colorful abstract painting with horizontal lines and curved shapes",
          image:
            "https://icqwpkxwddqofeibjqcj.supabase.co/storage/v1/object/public/paitings/newLineUp.png?t=2023-03-12T13%3A23%3A46.999Z",
        },
        {
          id: "2",
          author: "Charles Ray",
          name: "Untitled",
          year: "1991",
          gallery: "Museum of Modern Art, New York",
          technique: "Mixed media",
          size: "Dimensions variable",
          medium: "Oil on canvas",
          materials: "Oil paint, canvas",
          unique: true,
          certificate: true,
          rarity: "unique",
          condition: "excellet",
          signature: true,
          price: 3000,
          frame: false,
          highlightOrder: 1,
          summary: "Floral mural",
          image:
            "https://icqwpkxwddqofeibjqcj.supabase.co/storage/v1/object/public/paitings/charlesRayUntilted.png?t=2023-03-11T16%3A11%3A40.075Z",
        },
      ],
    }),
    ok: true,
  })
);

jest.mock("next/router", () => require("next-router-mock"));

const mockDispatcher = jest.spyOn(store, "dispatch");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given a usePaintings function", () => {
  describe("When it is called to get a list of 2 paintings", () => {
    test("Then it should load a list of 2 paintings", async () => {
      const {
        result: {
          current: { getPaintings },
        },
      } = renderHook(() => usePaintings(), {
        wrapper: Wrapper,
      });

      await act(async () => getPaintings());

      expect(mockDispatcher).toHaveBeenCalledWith(
        loadPaintingsActionCreator(mockPaintings)
      );
    });
  });
});
