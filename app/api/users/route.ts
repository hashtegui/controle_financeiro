import prisma from "@/lib/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(
    users.map((user) => ({ ...user, id: user.id.toString() }))
  );
}

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body);

  return NextResponse.json({});
}
