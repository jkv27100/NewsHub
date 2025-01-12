import { Form } from "react-bootstrap";
import { AppLogo } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { selectPreference } from "../redux/selectors/preference";
import { storePreferences } from "../redux/actions/perferenceActions";
const Sidebar = () => {
  const sources = ["NYTimes", "The Guardian"];
  const categories = [
    "home",
    "arts",
    "sports",
    "sceience",
    "business",
    "technology",
  ];
  const gurdianSections = ["sport", "technology", "business", "politics"];
  // const authors = ["Author1", "Author2", "Author3"];

  const dispatch = useDispatch();
  const preferences = useSelector(selectPreference);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(storePreferences({ ...preferences, [name]: value }));
  };

  return (
    <div className="sidebar_container px-3">
      <img src={AppLogo} className="App-logo" alt="logo" />
      <h3 className="mt-3">Preferences</h3>
      <Form.Group className="mb-3">
        <Form.Label>Source</Form.Label>
        <Form.Select
          name="source"
          value={preferences.source}
          onChange={handleInputChange}
        >
          {sources.map((source, index) => (
            <option key={index} value={source}>
              {source}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select
          name="category"
          value={preferences?.category}
          onChange={handleInputChange}
        >
          {(preferences?.source === "The Guardian"
            ? gurdianSections
            : categories
          ).map((source, index) => (
            <option key={index} value={source}>
              {source}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      {/* {preferences?.source === "The Guardian" && (
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Select
            name="category"
            value={preferences?.author}
            onChange={handleInputChange}
          >
            <option value="">Select a category</option>
            {authors.map((source, index) => (
              <option key={index} value={source}>
                {source}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      )} */}
    </div>
  );
};

export default Sidebar;
