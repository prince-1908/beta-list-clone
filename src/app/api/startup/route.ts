import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log(data);

    let variable;
    variable = await prisma.startups.create({
        data: {
            startup_name: data.startupName,
            startup_description: data.startupDesc,
            main_image: data.mainImageUrl,
            // image_gallery: ''
        }
    });

    return NextResponse.json({ message: variable }, { status: 200 });
}