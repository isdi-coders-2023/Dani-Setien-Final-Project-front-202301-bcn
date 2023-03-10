import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState } from "../../../types/uiTypes";

export const initialUiState: UiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    setIsLoading: (
      currentUserState: UiState,
      action: PayloadAction<void>
    ): UiState => ({
      ...currentUserState,
      isLoading: true,
    }),
  },
});

export const { setIsLoading: setIsLoadingActionCreator } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
