import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {

    const data = await req.json();

    const arr:any[] =  [];

    await data.imagesArray.map((img:String) => {
        arr.push({
            image: img
        });
        console.log(arr);
    });

    let variable;
    variable = await prisma.startups.create({
        data: {
            startup_name: data.startupName,
            startup_description: data.startupDesc,
            main_image: data.mainImageUrl,
            images: {
                create: arr
            }
        }
    });

    return NextResponse.json({ message: variable }, { status: 200 });
}