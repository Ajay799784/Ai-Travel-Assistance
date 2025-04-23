import React from "react";
import TravelCard from "./TravelCard";
import { Carousel } from "react-bootstrap";

const RecommendationCarousel = ({ items, onQuickBook }) => {
  return (
    <div className="recommendations">
      <h5 className="mb-3 text-info">Recommended Travel Options</h5>
      <Carousel indicators={false} interval={null}>
        {items.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="d-flex justify-content-center">
              <TravelCard item={item} onQuickBook={onQuickBook} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default RecommendationCarousel;
