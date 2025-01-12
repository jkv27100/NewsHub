import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  topStories: [],
  searchResults: [],
  storiesLoading: false,
  searchLoading: false,
  error: null,
};

const gurdianSlice = createSlice({
  name: "gurdian",
  initialState: initialValue,
  reducers: {
    getTopStoriesReq: (state) => ({
      ...state,
      storiesLoading: true,
      topStories: [],
    }),
    getTopStoriesSuccess: (state, action) => ({
      ...state,
      storiesLoading: false,
      topStories: action.payload,
    }),
    getTopStoriesFail: (state, action) => ({
      ...state,
      storiesLoading: false,
      error: action.payload,
    }),
    getSearchReq: (state) => state,
    getSearchSuccess: (state, action) => ({
      ...state,
      searchLoading: false,
      searchResults: action.payload,
    }),
    getSearchFail: (state, action) => ({
      ...state,
      searchLoading: false,
      error: action.payload,
    }),
  },
});

export const {
  getTopStoriesFail,
  getTopStoriesReq,
  getTopStoriesSuccess,
  getSearchFail,
  getSearchReq,
  getSearchSuccess,
} = gurdianSlice.actions;

export default gurdianSlice.reducer;
