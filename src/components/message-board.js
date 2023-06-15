import MessageForm from "@/components/message-form";
import MessageItem from "@/components/message-item";

export default function MessageBoard({ messages }) {
  return (
    <div className="w-11/12 md:max-w-none p-6 mx-6 bg-white rounded-xl shadow-md">
      <h1 className="text-center text-3xl font-bold mb-4">Our Message Board</h1>
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      <MessageForm />
    </div>
  );
}
