import React, { useRef, useEffect } from "react";
import UserInput from "./UserInput";

const ChatInterface = ({ messages, isLoading, onSendMessage }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (message) => {
    if (message.trim()) {
      onSendMessage(message);
    }
  };

  return (
    <div className="chat-interface">
      <div
        className="chat-messages mb-3 p-3"
        style={{
          height: "300px",
          overflowY: "auto",
          border: "1px solid #eee",
          borderRadius: "5px",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender} mb-2`}>
            <div
              className={`d-flex ${
                msg.sender === "user"
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={`p-2 rounded ${
                  msg.sender === "user" ? "bg-primary text-white" : "bg-light"
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message ai mb-2">
            <div className="d-flex justify-content-start">
              <div className="p-2 rounded bg-light">
                <div
                  className="spinner-border spinner-border-sm text-primary"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>{" "}
              </div>
              LoadingData....
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <UserInput onSend={handleSend} />
    </div>
  );
};

export default ChatInterface;
