/* eslint-disable react/prop-types */
import { Card, Button, Col } from "react-bootstrap";

const GurdianArticleCard = ({ article }) => {
  return (
    <Col className="mb-4">
      <Card>
        <Card.Body>
          <Card.Title>
            {article.webTitle.length > 60
              ? `${article.webTitle.slice(0, 60)}...`
              : article.webTitle}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Section: {article.sectionName}
          </Card.Subtitle>
          <Card.Text>
            Published:{" "}
            {new Date(article.webPublicationDate).toLocaleDateString()}
          </Card.Text>
          <Button
            variant="primary"
            href={article.webUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GurdianArticleCard;
