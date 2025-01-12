import {
  getGurdianStoriesService,
  searchArticleService,
} from "../../API/gurdianService";
import {
  getTopStoriesReq,
  getTopStoriesFail,
  getTopStoriesSuccess,
} from "../reducers/gurdian";

export const getGurdianTopStories =
  ({ category }) =>
  async (dispatch) => {
    dispatch(getTopStoriesReq());
    try {
      const res = await getGurdianStoriesService({ category });
      dispatch(getTopStoriesSuccess(res.data.response.results));
    } catch (error) {
      dispatch(getTopStoriesFail(error));
    }
  };

export const getGurdianSearchResult =
  ({ query, filters }) =>
  async (dispatch) => {
    dispatch(getTopStoriesReq());
    try {
      const res = await searchArticleService({ query, filters });
      dispatch(getTopStoriesSuccess(res.data.response.results));
    } catch (error) {
      dispatch(getTopStoriesFail(error));
    }
  };

export const clearGurdianSearchResult = () => (dispatch) => {
  dispatch(getTopStoriesSuccess([]));
};
