import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  source: "NYTimes",
  category: "home",
  author: null,
};

const preferenceSlice = createSlice({
  name: "preference",
  initialState,
  reducers: {
    setPreferences: (state, action) => ({
      ...state,
      source: action.payload.source,
      category: action.payload.category,
      author: action.payload.author,
    }),
  },
});

export const { setPreferences } = preferenceSlice.actions;

export default preferenceSlice.reducer;
