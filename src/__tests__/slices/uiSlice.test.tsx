import { UiState } from "../../types/uiTypes";
import {
  initialUiState,
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsLoadingActionCreator,
} from "../../store/features/userUi/uiSlice";

describe("Given a uiSlice", () => {
  describe("When its function setIsLoading is called", () => {
    test("Then it should set the isLoading variable to true", () => {
      const expectedMockUiState: UiState = {
        ...initialUiState,
        isLoading: true,
      };

      const setIsLoading = setIsLoadingActionCreator();

      const updatedUiState = uiReducer(initialUiState, setIsLoading);

      expect(updatedUiState).toStrictEqual(expectedMockUiState);
    });
  });

  describe("When its function unsetIsLoading is called", () => {
    test("Then it should set the isLoading variable to false", () => {
      const mockInitialUiState: UiState = {
        ...initialUiState,
        isLoading: true,
      };

      const expectedMockUiState: UiState = {
        ...initialUiState,
        isLoading: false,
      };

      const unsetIsLoading = unsetIsLoadingActionCreator();

      const updatedUiState = uiReducer(mockInitialUiState, unsetIsLoading);

      expect(updatedUiState).toStrictEqual(expectedMockUiState);
    });
  });
});
