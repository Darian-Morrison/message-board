import prisma from "@/utils/primsa";

export default async function handler(req, res) {
  const { id } = req.query
  if (req.method === "DELETE") {
    await prisma.message.delete({
      where:{
        id: Number(id),
      },
    });
    res.status(200).json({ message: "OK" });
  }else{
    res.status(404).json({ message: "Not Found" });
  }
}
