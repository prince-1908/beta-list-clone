'use client'
import { Nav } from "@/components/nav"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnyARecord } from "dns";
import { Prisma } from "@prisma/client";

export default function Startup() {

    const [pageData, setPageData] = useState<dbDataType | null>();
    const [imageGallery, setImageGallery] = useState<String[]>([]);
    const pathName = usePathname();
    const pageId = Number(pathName.split("/")[2]);
    const imageUrl = [];

    type dbDataType = Prisma.startupsGetPayload<{
        include: {
            images: true,
        }
    }>
    let arr: any = [];

    useEffect(() => {
        fetch("/api/getStartupData", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.json();
        }).then((allData) => {
            allData.map((data: any) => {
                if (data.id === pageId) {
                    setPageData(data);
                }
            });
        }).catch((err) => {
            console.log(err);
        });

    }, []);

    // if (pageData) {
    //     pageData.images.map((item) => {
    //         console.log(item.image);
    //     })
    // }


    return (
        <>
            <Nav />

            {/* page title */}
            <div className="p-8 mt-4">
                <div className="text-4xl font-black text-center">
                    {pageData?.startup_name}
                </div>
            </div>

            {/* image gallery */}
            <div className="p-4 m-auto w-[50vw] h-auto flex flex-wrap max-h-[50vh] overflow-x-scroll justify-center gap-4">
                {pageData ? pageData.images.map((item) => {
                    return (
                        <Image
                            key={crypto.randomUUID()}
                            src={item.image}
                            alt=""
                            height={250}
                            width={250}
                            className="h-auto w-auto"
                        />
                    )
                }) : null}

            </div>

            {/* description */}
            <div className="p-8 mt-4">
                <div className="text-xl text-center">
                    {pageData?.startup_description}
                </div>
            </div>
        </>
    );
}