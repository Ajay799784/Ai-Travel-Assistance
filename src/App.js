import React, { useState } from "react";
import ChatInterface from "./components/ChatInterface";
import RecommendationCarousel from "./components/RecommendationCarousel";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const aiResponses = {
    cruise: [
      {
        id: 1,
        title: "Caribbean 7-Day Cruise",
        description:
          "Explore beautiful Caribbean islands with all-inclusive package",
        price: 1299,
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        duration: "7 days",
        includes: ["Flights", "Meals", "Excursions"],
      },
      {
        id: 2,
        title: "Mediterranean Cruise",
        description:
          "Visit historic Mediterranean ports with luxury accommodations",
        price: 1450,
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        duration: "7 days",
        includes: ["Flights", "All meals", "Guided tours"],
      },
    ],
    beach: [
      {
        id: 3,
        title: "Maldives Luxury Resort",
        description: "Private beach villa with all amenities included",
        price: 1800,
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        duration: "5 days",
        includes: ["Flights", "Transfers", "Breakfast"],
      },
    ],
    default: [
      {
        id: 4,
        title: "European City Tour",
        description: "Visit 4 European capitals in 10 days",
        price: 1200,
        image:
          "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        duration: "10 days",
        includes: ["Flights", "Hotels", "Some meals"],
      },
    ],
  };

  const handleUserMessage = (message) => {
    const userMsg = { text: message, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);
    setTimeout(() => {
      let recommendations = aiResponses.default;
      if (message.toLowerCase().includes("cruise")) {
        recommendations = aiResponses.cruise;
      } else if (message.toLowerCase().includes("beach")) {
        recommendations = aiResponses.beach;
      }

      const aiMsg = {
        text: `Here are some ${
          recommendations === aiResponses.default ? "" : "best matching"
        } travel options for you:`,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMsg]);
      setRecommendations(recommendations);
      setIsLoading(false);
    }, 1000);
  };

  const handleQuickBook = (id) => {
    const bookedItem = recommendations.find((item) => item.id === id);
    const confirmationMsg = {
      text: `Booking confirmed for ${bookedItem.title} at $${bookedItem.price}!`,
      sender: "ai",
    };
    setMessages((prev) => [...prev, confirmationMsg]);
  };

  return (
    <div className="container-fluid travel-assistant">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1 className="text-center my-4">AI Travel Assistant</h1>
          <div className="card shadow">
            <div className="card-body">
              <ChatInterface
                messages={messages}
                isLoading={isLoading}
                onSendMessage={handleUserMessage}
              />

              {recommendations.length > 0 && (
                <div className="mt-4">
                  <RecommendationCarousel
                    items={recommendations}
                    onQuickBook={handleQuickBook}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
