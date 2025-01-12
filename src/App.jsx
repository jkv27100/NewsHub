import { Form, FormControl, Button, ListGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  selectSearchLoading,
  selectSearchResults,
  selectTrendingArticles,
  selectTrendingLoading,
} from "./redux/selectors/nyTimes";
import {
  clearSearchResult,
  getSearchResult,
  getTopStories,
} from "./redux/actions/nyTimesActions";

import {
  FilterModal,
  GurdianArticleCard,
  NewsCard,
  Sidebar,
} from "./components";

import { useNavigate } from "react-router-dom";
import { selectPreference } from "./redux/selectors/preference";
import {
  clearGurdianSearchResult,
  getGurdianSearchResult,
  getGurdianTopStories,
} from "./redux/actions/gurdianActions";
import {
  selectGurdianArticles,
  selectGurdianLoading,
} from "./redux/selectors/gurdian";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    date: "",
    category: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector(selectTrendingLoading);
  const nyTimesData = useSelector(selectTrendingArticles);
  const searchResult = useSelector(selectSearchResults);
  const serchLoading = useSelector(selectSearchLoading);
  const preferences = useSelector(selectPreference);

  const gurdianLoading = useSelector(selectGurdianLoading);
  const gurdianData = useSelector(selectGurdianArticles);

  // const isFilterApplied = filters.date || filters.category;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    if (preferences.source === "NYTimes") {
      dispatch(getSearchResult({ query, filters }));
    }
    if (preferences.source === "The Guardian") {
      dispatch();
    }
  };

  const handleFilter = () => {
    setShowModal(false);
    if (!query) return;
    console.log("filters", filters);
    if (preferences.source === "NYTimes") {
      dispatch(getSearchResult({ query, filters }));
    }
    if (preferences.source === "The Guardian") {
      dispatch(getGurdianSearchResult({ query, filters }));
    }
  };

  const handleNavigate = (article) => {
    navigate(`/article`, { state: { article } });
    dispatch(clearSearchResult());
    dispatch(clearGurdianSearchResult());
  };

  useEffect(() => {
    if (preferences.source === "NYTimes") {
      dispatch(getTopStories({ category: preferences.category }));
    }
    if (preferences.source === "The Guardian") {
      dispatch(getGurdianTopStories({ category: preferences.category }));
    }
  }, [dispatch, preferences.category, preferences.source]);

  useEffect(() => {
    if (!query) {
      dispatch(clearSearchResult());
    }
  }, [query, dispatch]);

  return (
    <div style={{ width: "98vw" }}>
      <FilterModal
        showModal={showModal}
        setShowModal={setShowModal}
        onApplyFilters={handleFilter}
        filters={filters}
        setFilters={setFilters}
      />
      <Sidebar />
      <div className="d-flex flex-column justify-content-center position-relative">
        <div className="d-flex justify-content-center gap-2">
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search articles..."
              className="me-2 search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="primary" type="submit" className="me-3">
              Search
            </Button>

            <Button variant="secondary" onClick={() => setShowModal(true)}>
              Filter
            </Button>
          </Form>
        </div>
        {searchResult.length > 0 && query ? (
          <div className="w-100 d-flex justify-content-center search_container">
            <div className="mt-4 d-flex flex-column align-items-center w-50 shadow search_result">
              {serchLoading ? (
                <h2>Loading...</h2>
              ) : (
                <>
                  <ListGroup>
                    {searchResult.map((article) => (
                      <ListGroup.Item
                        key={article._id}
                        className="d-flex flex-column"
                        onClick={() => handleNavigate(article)}
                      >
                        <Card className="cursor-pointer">
                          <Card.Body>
                            <Card.Title>
                              {article.headline.main.length > 50
                                ? `${article.headline.main.slice(0, 50)}...`
                                : article.headline.main}
                            </Card.Title>
                            <Card.Text>{article.abstract}</Card.Text>
                          </Card.Body>
                        </Card>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </>
              )}
            </div>
          </div>
        ) : null}
      </div>

      <div className="w-100 d-flex justify-content-center">
        {preferences.source === "NYTimes" && (
          <section className="d-flex flex-column  mt-5">
            {loading ? (
              <h2>Loading...</h2>
            ) : (
              nyTimesData?.map((article) => (
                <NewsCard key={article.url} news={article} />
              ))
            )}
          </section>
        )}
        {preferences.source === "The Guardian" && (
          <section className="d-flex flex-column  mt-5">
            {gurdianLoading ? (
              <h2>Loading...</h2>
            ) : (
              gurdianData?.map((article) => (
                <GurdianArticleCard key={article.type} article={article} />
              ))
            )}
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
