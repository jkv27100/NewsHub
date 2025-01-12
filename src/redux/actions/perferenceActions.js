import { setPreferences } from "../reducers/preference";

export const storePreferences = (preferences) => (dispatch) => {
  dispatch(setPreferences(preferences));
};
