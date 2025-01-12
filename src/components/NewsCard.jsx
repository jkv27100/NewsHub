/* eslint-disable react/prop-types */
import { Card, Button } from "react-bootstrap";

const NewsCard = ({ news }) => {
  const { section, title, abstract, url, byline, published_date, multimedia } =
    news;

  const imageUrl = multimedia?.length > 0 ? multimedia[0].url : null;

  return (
    <Card className="mb-4" style={{ maxWidth: "600px" }}>
      {imageUrl && (
        <Card.Img variant="top" src={imageUrl} alt="News Thumbnail" />
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{byline}</Card.Subtitle>
        <Card.Text>
          <small className="text-muted">Section: {section}</small>
        </Card.Text>
        <Card.Text>{abstract}</Card.Text>
        <Card.Text>
          <small className="text-muted">
            Published: {new Date(published_date).toLocaleDateString()}
          </small>
        </Card.Text>
        <Button
          variant="primary"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
