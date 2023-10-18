'use client'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SkeletonComp } from "@/components/skeleton";

export const Startups = (props:any) => {

    const [startups, setStartups] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch('/api/startupGet', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.json()
        }).then((dataObj) => {
            setStartups(dataObj.data);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="p-8 mt-4">
            <div className="text-3xl text-gray-400"><strong className="text-black">New</strong> Startups</div>

            {loading ? <SkeletonComp/> :
            <div className="mt-4 flex flex-wrap-reverse justify-around content-around gap-4">
                {startups.map((item: any) => (
                    <Card key={item.id.toString()} className="py-4 cursor-pointer">
                        <Link href={`./startup/${item.id}`}>
                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                <h4 className="font-bold text-large">{item.startup_name}</h4>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src={item.main_image.length ? item.main_image : 'loading.png'}
                                    width={270}
                                />
                            </CardBody>
                        </Link>
                    </Card>
                ))}
            </div>}
        </div>
    )
}