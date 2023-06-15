import prisma from "@/utils/primsa";

export default async function handler(req, res) {
  if (req.method === "POST") {
    await prisma.message.create({
      data: {
        text: req.body.text,
      },
    });
    res.status(200).json({ message: "OK" });
  }else{
    res.status(404).json({ message: "Not Found" });
  }
}
