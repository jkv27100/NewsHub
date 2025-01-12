import { createSelector } from "@reduxjs/toolkit";

const preferenceState = (state) => state.preference;

export const selectPreference = createSelector(
  preferenceState,
  (preference) => preference
);
