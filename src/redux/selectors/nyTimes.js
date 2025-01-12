import { createSelector } from "@reduxjs/toolkit";

const selectNyTimes = (state) => state.nyTimes;

export const selectTrendingArticles = createSelector(
  selectNyTimes,
  (nyTimes) => nyTimes.topStories
);

export const selectTrendingLoading = createSelector(
  selectNyTimes,
  (nyTimes) => nyTimes.storiesLoading
);

export const selectSearchLoading = createSelector(
  selectNyTimes,
  (nyTimes) => nyTimes.searchLoading
);

export const selectSearchResults = createSelector(
  selectNyTimes,
  (nyTimes) => nyTimes.searchResults
);
