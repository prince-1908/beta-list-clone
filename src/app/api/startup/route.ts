import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    interface imagesDataType {
        image: String;
    }

    const data = await req.json();

    console.log(data.imagesArray);

    let variable;
    variable = await prisma.startups.create({
        data: {
            startup_name: data.startupName,
            startup_description: data.startupDesc,
            main_image: data.mainImageUrl,
            images: {
                create: [
                    {
                        image: `http://res.cloudinary.com/dhvl1gnlv/image/upload/v1697120817/images_1_tsrwu3.jpg`
                    },
                    {
                        image: "http://res.cloudinary.com/dhvl1gnlv/image/upload/v1697120817/images_1_tsrwu3.jpg"
                    },
                    {
                        image: "http://res.cloudinary.com/dhvl1gnlv/image/upload/v1697120817/images_1_tsrwu3.jpg"
                    },
                    {
                        image: "http://res.cloudinary.com/dhvl1gnlv/image/upload/v1697120817/images_1_tsrwu3.jpg"
                    }
                ]
            }
        }
    });

    return NextResponse.json({ message: variable }, { status: 200 });
}