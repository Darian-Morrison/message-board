"use server";
import prisma from "@/utils/primsa";

export async function createMessage({ text }: { text: string }) {
  await prisma.message.create({
    data: {
      text: text || "blah",
    },
  });
}

export async function deleteMessage(id:number) {
  await prisma.message.delete({
    where: {
      id: Number(id),
    },
  });
}
