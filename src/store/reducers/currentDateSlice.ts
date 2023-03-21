/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { currentDate: string } = {
  currentDate: "",
};

export const currentDateSlice = createSlice({
  name: "currentDate",
  initialState,
  reducers: {
    setDate(state, action: PayloadAction<string>) {
      state.currentDate = action.payload;
    },
  },
});

export default currentDateSlice.reducer;
