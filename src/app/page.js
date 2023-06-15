import MessageBoard from "@/components/message-board";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-100">
      <MessageBoard />
    </main>
  );
}
