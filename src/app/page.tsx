import MessageBoard from "@/app/message-board";

import prisma from "@/utils/primsa";

export default async function Home() {
  const messages = await prisma.message.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-100">
      <MessageBoard messages={messages} />
    </main>
  );
}
