/* eslint-disable react/prop-types */
import { Button, Modal, Form } from "react-bootstrap";
import { selectPreference } from "../redux/selectors/preference";
import { useSelector } from "react-redux";

const FilterModal = ({
  showModal,
  setShowModal,
  onApplyFilters,
  filters,
  setFilters,
}) => {
  const categories = ["Sports", "Arts", "Politics", "Business", "Culture"];
  const preferences = useSelector(selectPreference);

  const handleClose = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Filter Articles</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={filters?.date}
              onChange={handleInputChange}
            />
          </Form.Group>

          {preferences.source === "NYTimes" && (
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                value={filters?.category}
                onChange={handleInputChange}
              >
                <option value="">Select a category</option>
                {categories.map((source, index) => (
                  <option key={index} value={source}>
                    {source}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => setFilters({ date: "", category: "" })}
        >
          Clear
        </Button>
        <Button variant="primary" onClick={onApplyFilters}>
          Apply Filters
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
