import { NextResponse, NextRequest } from "next/server";
import { NextApiRequest } from "next";
import { useInfiniteQuery } from "react-query";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';
export async function GET(req:NextRequest) {

    // const limit = 5;
    const page = req.nextUrl.searchParams.get('page');
    // const cursorObj = cursor == "" ? undefined : { id: parseInt(cursor as string) };

    // const getData = await prisma.startups.findMany({
    //     include: {
    //         images: true,
    //     }
    // })


    // ################################################################################################
    const getData = async (pageParams:number) => {
        
        const data = await prisma.startups.findMany({
            include: {
                images: true,
            },
            take: 5,
            skip: pageParams*5,
        });
        return data;
    }

    const mainData = await getData(Number(page));
    // ################################################################################################

    // const getData = await prisma.startups.findMany({
    //     include: {
    //         images: true,
    //     },
    //     take: limit,
    //     cursor: cursorObj,
    //     skip: cursor == "" ? 0 : 1
    // })

    return NextResponse.json(mainData, { status: 200 });


    // return NextResponse.json(
    //     {
    //         getData,
    //         nextId: getData.length == limit ? getData[limit - 1].id : undefined
    //     },
    //     { status: 200 }
    // );

}