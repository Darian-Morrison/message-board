"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createMessage } from "@/utils/actions/message-actions";

export default function MessageForm() {
  const router = useRouter();
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event : React.ChangeEvent<HTMLTextAreaElement>  ) => {
    setNewMessage(event?.target?.value);
  };

  const handleNewMessageSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await createMessage({ text: newMessage });
    setNewMessage("");
    router.refresh();
  };

  return (
    <form className="flex flex-col" onSubmit={handleNewMessageSubmit}>
      <textarea
        className="mt-2 p-2 border rounded-md w-full"
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
  );
}
