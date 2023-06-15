"use server";
import prisma from "@/utils/primsa";

export async function deleteMessage(id) {
  await prisma.message.delete({
    where: {
      id: Number(id),
    },
  });
}

export async function createMessage({ text }) {
  await prisma.message.create({
    data: {
      text: text || 'blah',
    },
  });
}
