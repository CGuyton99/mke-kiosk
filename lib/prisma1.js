import { PrismaClient } from "@prisma/client";


let prisma1;

if (process.env.NODE_ENV === "production") {
  prisma1 = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma1 = global.prisma;
}
// console.log(prisma1);
export default prisma1;     