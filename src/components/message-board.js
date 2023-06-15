import MessageForm from "@/components/message-form";
import MessageItem from "@/components/message-item";

export default function MessageBoard({ messages }) {
  return (
    <div className=" max-w-md w-full p-6 mt-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-4">Our Message Board</h1>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      <MessageForm />
    </div>
  );
}
