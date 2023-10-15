'use client'
import { Nav } from "@/components/nav"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Startup() {

    const [pageData, setPageData] = useState<dbDataType>();
    const [imageGallery, setImageGallery] = useState<String[]>([]);
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

    let arr:any = [];

    useEffect(() => {
        fetch("/api/startupGet", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            return response.json();
        }).then((item) => {
            item.data.map((itemData: dbDataType) => {
                if (itemData.id === pageId) {
                    setPageData(itemData);
                }
            });
            item.images.map((itemImages: any) => {
                if (itemImages.startups_id === pageId && !arr.includes(itemImages.image)) {
                    arr.push(itemImages.image);
                }
            });
            setImageGallery(arr);
        }).catch((err) => {
            console.log(err);
        });
        
    }, []);



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
            <div className="grid place-items-center p-4 w-full border border-black">
                <ImageList cols={4} className="w-full border-2 border-black h-auto">
                    {imageGallery.map((item) => (
                        <ImageListItem key={crypto.randomUUID()}>
                            <img
                                srcSet={`${item}`}
                                src={`${item}`}
                                alt={pageData?.startup_name}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
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