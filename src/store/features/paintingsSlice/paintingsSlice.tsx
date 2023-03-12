import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Paintings } from "../../../types/paintingTypes";

export const initialPaintingsState: Paintings = [];

const paintingsSlice = createSlice({
  name: "paintings",
  initialState: initialPaintingsState,
  reducers: {
    loadPaintings: (
      currentPaintingsState: Paintings,
      action: PayloadAction<Paintings>
    ) => [...action.payload],
  },
});

export const { loadPaintings: loadPaintingsActionCreator } =
  paintingsSlice.actions;

export const paintingsReducer = paintingsSlice.reducer;
