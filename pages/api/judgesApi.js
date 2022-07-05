// pages/api/products.js
import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const Judges = await prisma.Judges.findMany();
  res.json(Judges);
}