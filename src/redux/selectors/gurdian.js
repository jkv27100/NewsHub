import { createSelector } from "@reduxjs/toolkit";

const selectGurdian = (state) => state.gurdian;

export const selectGurdianArticles = createSelector(
  selectGurdian,
  (nyTimes) => nyTimes.topStories
);

export const selectGurdianLoading = createSelector(
  selectGurdian,
  (nyTimes) => nyTimes.storiesLoading
);

export const selectSearchGurdianLoading = createSelector(
  selectGurdian,
  (nyTimes) => nyTimes.searchLoading
);

export const selectSearchGurdianResults = createSelector(
  selectGurdian,
  (nyTimes) => nyTimes.searchResults
);
