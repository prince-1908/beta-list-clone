'use client'
import { Nav } from "@/components/nav"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";


export default function Startup() {

    const [pageData, setPageData] = useState<dbDataType>();
    const pathName = usePathname();
    const pageId = Number(pathName.split("/")[2]);

    interface dbDataType {
        id: number,
        startup_name: string,
        startup_description: string,
        main_image: string,
        image_gallery: string,
        created_at: string,
        updated_at: string
    }

    useEffect(() => {
        fetch("/api/startupGet", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.json();
        }).then((data) => {
            data.map((item: dbDataType) => {
                if (item.id === pageId) {
                    setPageData(item);
                }
            })
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const imageArray = pageData?.image_gallery.split(',');

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
            <div className="grid place-items-center p-4">
                {/* <ImageList sx={{ width: 500, height: 450 }} cols={3} className="w-1/2 h-auto">
                    {imageArray?.map((item) => (
                        <ImageListItem key={item}>
                            <img
                                srcSet={`${item}`}
                                src={`${item}`}
                                alt={item}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList> */}
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