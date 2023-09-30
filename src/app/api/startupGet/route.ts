import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(){

    const getData = await prisma.startups.findMany();

    return NextResponse.json(getData, {status: 200});
}