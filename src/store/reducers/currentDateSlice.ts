/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getMonthDayAndWeekDayName from "../../utils/getMonthDayAndWeekDayName";

const { dateString } = getMonthDayAndWeekDayName(new Date());

const initialState: { currentDate: string } = {
  currentDate: dateString,
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
