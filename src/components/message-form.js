"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createMessage } from "@/utils/actions/message-actions";

export default function MessageForm() {
  const router = useRouter();
  const [newMessage, setNewMessage] = useState("");
  const [hideForm, setHideForm] = useState(false);

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleNewMessageSubmit = async (event) => {
    event.preventDefault();
    await createMessage({ text: newMessage });
    setNewMessage("");
    router.refresh();
  };

  const handleHideFormChange = (event) => {
    setHideForm(event.target.checked);
  };

  return (
    <>
      {!hideForm && (
        <form className="flex flex-col" onSubmit={handleNewMessageSubmit}>
          <textarea
            className="mt-2 p-2 border rounded-md w-full"
            type="text"
            placeholder="Type your message here..."
            value={newMessage}
            onChange={handleNewMessageChange}
          />
          <button
            className="mt-2 p-2 w-40 bg-blue-500 text-white rounded-md mx-auto"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
      <div className="flex items-center justify-end">
        <input
          type="checkbox"
          id="hideForm"
          checked={hideForm}
          onChange={handleHideFormChange}
        />
        <label htmlFor="hideForm" className="ml-2 text-xm-sm">
          Hide Input
        </label>
      </div>
    </>
  );
}
