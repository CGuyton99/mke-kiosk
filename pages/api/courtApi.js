
//define an api route that our front-end will consume
// import "../../styles/globals.css"
import prisma1 from "../../lib/prisma1";

export default async function handle(req, res) {
    const court = await prisma1.court.findMany();
    // console.log("court:", court);
    // console.table(court);
    res.json(court);

}


