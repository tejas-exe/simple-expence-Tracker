import { createSlice } from "@reduxjs/toolkit";

const ExpenceSlice = createSlice({
  name: "Expence",
  initialState: { income: 0, expenceList: [] },
  reducers: {
    addExpences(state, action) {
      state = state.expenceList = [...state.expenceList, action.payload];
    },
    updateIncome(state, action) {
      state.income = action.payload.income;
    },
  },
});

export default ExpenceSlice;

export const ExpenceTrackerActions = ExpenceSlice.actions;
