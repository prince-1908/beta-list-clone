'use client'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

export const Startups = (props:any) => {

    const map = props.startups.map((id:any) => {
        console.log(id.startup_name);
    });

    return (
        <div className="p-8 mt-4">
            <div className="text-3xl text-gray-400"><strong className="text-black">Today</strong> September 19th</div>
            <div className="mt-4 grid grid-cols-5 gap-3">
                {props.startups.map((item:any) => (
                    <Card key={item.id.toString()} className="py-4 cursor-pointer">
                        <Link href={'./startup/1'}>
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <h4 className="font-bold text-large">{item.startup_name}</h4>
                                <p className="text-tiny uppercase font-bold">{item.startup_name}</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src={item.main_image}
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