"use client";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function MessageItem({ message }) {
  const router = useRouter();

  const handleDeleteMessage = async (id) => {
    await fetch(`/api/messages/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.refresh();
  };

  return (
    <div
      key={message.id}
      className="border p-2 rounded-md my-2 flex justify-between items-center"
    >
      {message.text}
      <button
        onClick={() => handleDeleteMessage(message.id)}
        className="text-red-500"
      >
        <AiOutlineClose size={20} />
      </button>
    </div>
  );
}
