import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const GET = async (req: Request) => {
  const datas = await prisma.datas.findMany();
  console.log(datas);
  return new Response(JSON.stringify(datas));
};

export { GET };
