import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log(data);
    let startup;
    if (data.startupName && data.startupDesc) {
        startup = await prisma.startups.create({
            data: {
                startup_name: data.startupName,
                startup_description: data.startupDesc,
                main_image: ""
            }
        });
    }

    return NextResponse.json("Data added to Database", { status: 200 });
}