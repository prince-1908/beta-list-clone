'use client'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

export const Startups = () => {
    type dataType = {
        id: Number,
        name: string,
        description: string,
        imgSrc: string
    };

    const startupData: Array<dataType> = [
        {
            id: 0,
            name: "prince",
            description: "lorem ipsum dolor sit amet",
            imgSrc: "https://picsum.photos/id/123/200/300"
        },
        {
            id: 1,
            name: "Prince",
            description: "lorem ipsum dolor sit amet",
            imgSrc: "https://picsum.photos/id/456/200/300"
        },
        {
            id: 2,
            name: "Prince Singh Chouhan",
            description: "lorem ipsum dolor sit amet",
            imgSrc: "https://picsum.photos/id/789/200/300"
        },
        {
            id: 3,
            name: "Prince Singh Chouhan 1",
            description: "lorem ipsum dolor sit amet",
            imgSrc: "https://picsum.photos/id/101/200/300"
        },
        {
            id: 4,
            name: "Prince Singh Chouhan 1",
            description: "lorem ipsum dolor sit amet",
            imgSrc: "https://picsum.photos/id/112/200/300"
        },
        {
            id: 5,
            name: "Prince Singh Chouhan 1",
            description: "lorem ipsum dolor sit amet",
            imgSrc: "https://picsum.photos/id/131/200/300"
        },
        {
            id: 6,
            name: "Prince Singh Chouhan 1",
            description: "lorem ipsum dolor sit amet",
            imgSrc: "https://picsum.photos/id/415/200/300"
        },
    ];
    return (
        <div className="p-8 mt-4">
            <div className="text-3xl text-gray-400"><strong className="text-black">Today</strong> September 19th</div>
            <div className="mt-4 grid grid-cols-5 gap-3">
                    {startupData.map((item) => (
                        <Card className="py-4 cursor-pointer">
                            <Link href={'./startup/1'}>
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <h4 className="font-bold text-large">{item.name}</h4>
                                    <p className="text-tiny uppercase font-bold">{item.description}</p>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={item.imgSrc}
                                        width={270}
                                    />
                                </CardBody>
                            </Link>
                        </Card>
                    ))}
            </div>
        </div>
    )
}