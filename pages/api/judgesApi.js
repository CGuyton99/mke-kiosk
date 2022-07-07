// define an api route that our front-end will consume

// import "../../styles/globals.css"
import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const judges = await prisma.judges.findMany();
  // console.log("judges:", judges);
  res.json(judges);
  
}

