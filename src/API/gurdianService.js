import DataService from "./DataService";
import { GURDIAN } from "./endPoints";

const API_KEY = import.meta.env.VITE_GURIDAN_API_KEY;

export const searchArticleService = ({ query, filters }) => {
  const { date, category } = filters;
  let url = `${GURDIAN.SEARCH}?api-key=${API_KEY}&q=${encodeURIComponent(
    query
  )}`;

  // Construct the filter query
  if (date) {
    // Assuming date is in YYYY-MM-DD format
    url += `&from-date=${date}`;
  }

  if (category) {
    url += `&section=${category}`;
  }

  return DataService.get(url);
};
export const getGurdianStoriesService = ({ category }) => {
  let url = `${GURDIAN.STORIES}/${category}?api-key=${API_KEY}`;
  return DataService.get(url);
};
