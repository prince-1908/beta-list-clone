import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest } from "next";
import { useInfiniteQuery } from "react-query";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';
export async function GET(req:NextRequest) {
    const getData = await prisma.startups.findMany({
        include: {
            images: true,
        }
    })
    return NextResponse.json(getData, { status: 200 });
}