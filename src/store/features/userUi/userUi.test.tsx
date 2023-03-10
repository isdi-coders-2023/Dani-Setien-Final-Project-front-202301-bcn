import { UiState } from "../../../types/uiTypes";
import { initialUiState, setIsLoadingActionCreator, uiReducer } from "./userUi";

export {};

describe("Given a setIsLoading function", () => {
  describe("When it is called", () => {
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
});
