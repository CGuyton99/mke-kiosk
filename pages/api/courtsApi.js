// pages/api/products.js
import prisma1 from "../../lib/prisma1";

export default async function handle(req, res) {
  const Courts = await prisma1.Courts.findMany();
  res.json(Courts);
}