import { Button, Card, Image, ListGroup } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const NewsDetails = () => {
  const { state } = useLocation();
  const {
    abstract,
    web_url,
    lead_paragraph,
    headline,
    pub_date,
    byline,
    multimedia,
    keywords,
  } = state.article;

  const navigate = useNavigate();

  const imageUrl = multimedia?.[0]?.url
    ? `https://static01.nyt.com/${multimedia[0].url}`
    : null;

  return (
    <div className="mt-4 px-5" style={{ width: "98vw" }}>
      <Button className="mb-4" onClick={() => navigate("/")}>
        Back
      </Button>
      <Card>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Article"
            fluid
            style={{ maxHeight: "400px" }}
          />
        )}
        <Card.Body>
          <Card.Title>{headline.main}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {byline?.original || "Unknown Author"}
          </Card.Subtitle>
          <Card.Text>
            <strong>Published:</strong>{" "}
            {new Date(pub_date).toLocaleDateString()}
          </Card.Text>
          <Card.Text>
            <strong>Abstract:</strong> {abstract}
          </Card.Text>
          <Card.Text>
            <strong>Lead Paragraph:</strong> {lead_paragraph}
          </Card.Text>
          <ListGroup className="mb-3">
            <ListGroup.Item>
              <strong>Keywords:</strong>{" "}
              {keywords.map((keyword) => keyword.value).join(", ")}
            </ListGroup.Item>
          </ListGroup>
          <a
            href={web_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Read Full Article
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsDetails;
