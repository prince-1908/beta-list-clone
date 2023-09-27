import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET() {

    await prisma.startups.deleteMany();

    await prisma.startups.createMany({
        data: [{
            startup_name: "Project 1",
            startup_description: "project 1 description",
            main_image: "https://picsum.photos/id/237/200/300"
        },
        {
            startup_name: "project 2",
            startup_description: "project 2 description",
            main_image: "https://picsum.photos/id/212/200/300"
        },
        {
            startup_name: "project 3",
            startup_description: "project 3 description",
            main_image: "https://picsum.photos/id/201/200/300"
        },
        {
            startup_name: "project 4",
            startup_description: "project 4 description",
            main_image: "https://picsum.photos/id/201/200/300"
        },
        {
            startup_name: "project 5",
            startup_description: "project 5 description",
            main_image: "https://picsum.photos/id/201/200/300"
        },
        {
            startup_name: "project 6",
            startup_description: "project 6 description",
            main_image: "https://picsum.photos/id/201/200/300"
        },
        {
            startup_name: "project 7",
            startup_description: "project 7 description",
            main_image: "https://picsum.photos/id/201/200/300"
        },
        {
            startup_name: "project 8",
            startup_description: "project 8 description",
            main_image: "https://picsum.photos/id/201/200/300"
        },
        {
            startup_name: "project 9",
            startup_description: "project 9 description",
            main_image: "https://picsum.photos/id/201/200/300"
        },
    ]
    });

    return NextResponse.json({ message: "Data adding to database" }, { status: 200 });
}