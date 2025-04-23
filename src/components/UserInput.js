import React, { useState } from "react";

const UserInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        type="text"
        className="form-control me-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask for travel recommendations information"
      />
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
};

export default UserInput;
