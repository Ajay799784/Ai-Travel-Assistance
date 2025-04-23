import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";

const TravelCard = ({ item, onQuickBook }) => {
  return (
    <Card className="shadow" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Price:</strong> ${item.price}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Duration:</strong> {item.duration}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Includes:</strong> {item.includes.join(", ")}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button variant="primary" onClick={() => onQuickBook(item.id)}>
          Quick Book
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TravelCard;
