import { combineReducers } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import nyTimesReducer from "./reducers/nyTimes";
import preferenceReducer from "./reducers/preference";
import gurdianReducer from "./reducers/gurdian";

const rootReducer = combineReducers({
  nyTimes: nyTimesReducer,
  preference: preferenceReducer,
  gurdian: gurdianReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["preference"],
};

export default persistReducer(persistConfig, rootReducer);
