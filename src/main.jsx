import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";

import { store } from "./redux/store.js";
import App from "./App.jsx";

import NewsDetails from "./NewsDetails.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/article" element={<NewsDetails />} />
          <Route path="*" element={<App />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
