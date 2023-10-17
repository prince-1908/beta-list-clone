import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(){

    const getData = await prisma.startups.findMany();
    const getImages = await prisma.images.findMany();

    const dataObj = {
        data : getData,
        images : getImages
    }

    return NextResponse.json(dataObj, {status: 200});
}