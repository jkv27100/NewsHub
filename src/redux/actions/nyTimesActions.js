import {
  getTrendingArticleService,
  searchAtricleService,
} from "../../API/newsServices";
import {
  getSearchReq,
  getTopStoriesFail,
  getTopStoriesReq,
  getTopStoriesSuccess,
  getSearchFail,
  getSearchSuccess,
} from "../reducers/nyTimes";

export const getTopStories =
  ({ category }) =>
  async (dispatch) => {
    dispatch(getTopStoriesReq());
    try {
      const res = await getTrendingArticleService({ category });
      dispatch(getTopStoriesSuccess(res.data.results));
    } catch (error) {
      dispatch(getTopStoriesFail(error));
    }
  };

export const getSearchResult =
  ({ query, filters }) =>
  async (dispatch) => {
    dispatch(getSearchReq());
    try {
      const res = await searchAtricleService({ query, filters });
      dispatch(getSearchSuccess(res.data.response.docs));
    } catch (error) {
      dispatch(getSearchFail(error));
    }
  };

export const clearSearchResult = () => (dispatch) => {
  dispatch(getSearchSuccess([]));
};
