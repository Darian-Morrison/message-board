"use client";
import { useState } from "react";
import { Message } from '@prisma/client'

import MessageForm from "@/components/message-form";
import MessageItem from "@/components/message-item";

export default function MessageBoard({ messages }: {messages: Message[] }){
  const [readOnly, setReadOnly] = useState(false);
  const handleReadOnlyChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    setReadOnly(event?.target?.checked || false);
  };

  return (
    <div className="w-11/12 md:max-w-none p-6 mx-6 bg-white rounded-xl shadow-md">
      <h1 className="text-center text-3xl font-bold mb-4">Our Message Board</h1>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} readOnly={readOnly} />
      ))}
      {!readOnly && <MessageForm />}
      <div className="flex items-center justify-end">
        <input
          type="checkbox"
          id="hideForm"
          checked={readOnly}
          onChange={handleReadOnlyChange}
        />
        <label htmlFor="hideForm" className="ml-2 text-xm-sm">
          Read Only
        </label>
      </div>
    </div>
  );
}
