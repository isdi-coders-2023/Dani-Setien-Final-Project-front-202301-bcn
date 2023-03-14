import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import usePaintings from "../../../hooks/usePaintings/usePaintings";
import { store } from "../../../store";
import { loadPaintingsActionCreator } from "../../../store/features/paintingsSlice/paintingsSlice";
import { mockPaintings } from "../../../utils/testUtils/mockHardcodedData";
import Wrapper from "../../../utils/testUtils/Wrapper";

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
