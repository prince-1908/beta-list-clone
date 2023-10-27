'use client'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SkeletonComp } from "@/components/skeleton";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

export const Startups = (props: any) => {

    const [startups, setStartups] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [pageParams, setPageParams] = useState<number>(0);
    const { inView, ref } = useInView();
    const [scrollLoader, setScrollLoader] = useState<boolean>(true);

    useEffect(() => {
        setPageParams(pageParams + 1);
    }, [inView]);

    useEffect(() => {
        setTimeout(
            () => {
                fetch(`/api/startupGet?page=${pageParams}`).then((response) => {
                    return response.json();
                }).then((newData) => {
                    newData.map((item: any) => {
                        setStartups(prev => [...prev, item]);
                    });
                    if (newData.length === 0) {
                        setScrollLoader(false);
                    }
                }).catch((err) => {
                    console.log(err);
                });
            }, 1000)
    }, [pageParams]);

    useEffect(() => {
        fetch('/api/startupGet', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.json()
        }).then((allData) => {
            setStartups(allData);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <div className="p-8 mt-4">

            <div className="text-3xl text-gray-400">
                <strong className="text-black">New</strong>
                Startups
            </div>

            {loading ? <SkeletonComp /> :
                <div className="mt-4 flex flex-wrap justify-around content-around gap-4">
                    {startups.map((item: any) => (
                        <Card key={crypto.randomUUID()} className="py-4 cursor-pointer">
                            <Link href={`./startup/${item.id}`}>
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                    <h4 className="font-bold text-large">{item.startup_name}</h4>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        alt="Card background"
                                        className="object-cover rounded-xl"
                                        src={item.main_image ? item.main_image : 'loading.png'}
                                        width={270}
                                    />
                                </CardBody>
                            </Link>
                        </Card>
                    ))}
                </div>
            }
            {scrollLoader &&
                <div className="flex justify-center my-12">
                    <div
                        className="custom-loader"
                        ref={ref}
                    ></div>
                </div>
            }
        </div>
    )
}