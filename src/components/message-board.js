"use client";

import { useState } from "react";

export default function MessageBoard() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleNewMessageSubmit = (event) => {
    event.preventDefault();
    setMessages([
      ...messages,
      {
        id: messages.length,
        text: newMessage,
      },
    ]);
    setNewMessage("");
  };

  return (
    <div className=" max-w-md w-full p-6 mt-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-4">Our Message Board</h1>
      {messages.map((message) => (
        <div key={message.id} className="border p-2 rounded-md my-2">
          {message.text}
        </div>
      ))}
      <form onSubmit={handleNewMessageSubmit}>
        <input
          className="mt-2 p-2 border rounded-md w-full"
          type="text"
          placeholder="Type your message here..."
          value={newMessage}
          onChange={handleNewMessageChange}
        />
        <button
          className="mt-2 p-2 bg-blue-500 text-white rounded-md w-full"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
