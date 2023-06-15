"use client";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { formatRelative } from "date-fns";
import { capitalizeFirstLetter } from "@/utils/string-helpers";
import { deleteMessage } from "@/utils/actions/message-actions";

export default function MessageItem({ message }) {
  const router = useRouter();

  const handleDeleteMessage = async (id) => {
    await deleteMessage(id);
    router.refresh();
  };

  return (
    <div
      key={message.id}
      className="border p-2 rounded-md mt-2 flex flex-col justify-between"
    >
      <div className="whitespace-pre-wrap">{message.text}</div>
      <hr className="m-2" />
      <div className="flex flex-row justify-between">
        <p className="text-xs text-gray-500">
          {capitalizeFirstLetter(formatRelative(message.createdAt, new Date()))}
        </p>
        <button
          onClick={() => handleDeleteMessage(message.id)}
          className="text-red-500"
        >
          <AiOutlineClose size={20} />
        </button>
      </div>
    </div>
  );
}
