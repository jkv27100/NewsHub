import DataService from "./DataService";
import { NY_IMES } from "./endPoints";

const API_KEY = import.meta.env.VITE_NY_API_KEY;

export const getTrendingArticleService = ({ category }) =>
  DataService.get(`${NY_IMES.TOP_STORIES}/${category}.json?api-key=${API_KEY}`);

const constructFilterQuery = (filters) => {
  const { date, category, source } = filters;
  const filterParts = [];

  if (date) {
    // Assuming date is in YYYY-MM-DD format
    filterParts.push(`pub_date:"${date}"`);
  }

  if (category) {
    // If multiple categories are possible, adjust accordingly
    filterParts.push(`news_desk:("${category}")`);
  }

  if (source) {
    // If multiple sources are possible, adjust accordingly
    filterParts.push(`source:("${source}")`);
  }

  // Combine all filter parts with AND
  return filterParts.length > 0 ? `&fq=${filterParts.join(" AND ")}` : "";
};

export const searchAtricleService = ({ query, filters }) => {
  let url = `${NY_IMES.SEARCH}?api-key=${API_KEY}&q=${encodeURIComponent(
    query
  )}`;

  // Construct the filter query
  const filterQuery = constructFilterQuery(filters);
  url += filterQuery;

  return DataService.get(url);
};
