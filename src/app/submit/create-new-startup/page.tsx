'use client'
import { Nav } from "@/components/nav"
import { Button, image } from "@nextui-org/react";
import { calcLength } from "framer-motion";
import { useState } from "react";
import Link from "next/link";


export default function NewStartup() {

    const [startupName, setStartupName] = useState('');
    const [startupDesc, setStartupDesc] = useState('');
    const [mainImage, setMainImage] = useState<Blob>();
    const [imageGallery, setImageGallery] = useState<FileList>();

    const [isLoading, setIsLoading] = useState(false);

    const [goToHome, setGoToHome] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setIsLoading(true);

        let mainImageUrl;

        let imagesArray: string[] = [];

        async function uploadImages() {
            if (imageGallery) {
                for (const item of Object.values(imageGallery)) {
                    const imageData = new FormData();
                    imageData.append("file", item);
                    imageData.append("upload_preset", "beta-list-clone");
                    imageData.append("cloud_name", process.env.CLOUDINARY_CLOUD_NAME!);

                    fetch(`https://api.cloudinary.com/v1_1/dhvl1gnlv/image/upload`, {
                        method: "POST",
                        body: imageData
                    }).then((response) => {
                        return response.json();
                    }).then((data) => {
                        imagesArray.push(data.url);
                    }).catch((err) => {
                        console.log(err);
                    });
                }
            }
        }
        await uploadImages();

        if (mainImage) {
            const mainImageData = new FormData();
            mainImageData.append("file", mainImage);
            mainImageData.append("upload_preset", "beta-list-clone");
            mainImageData.append("cloud_name", process.env.CLOUDINARY_CLOUD_NAME!);

            await fetch(`https://api.cloudinary.com/v1_1/dhvl1gnlv/image/upload`, {
                method: "POST",
                body: mainImageData
            }).then((response) => {
                return response.json()
            }).then((data) => {
                mainImageUrl = data.url
            }).catch((err) => {
                console.log("Error for main image upload = " + err);
            });
        }

        await fetch('/api/startup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                startupName: startupName,
                startupDesc: startupDesc,
                mainImageUrl: mainImageUrl,
                imagesArray: imagesArray
            })
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            setIsLoading(false);
            setGoToHome(true);
        }).catch((err) => {
            console.log(err);
        });
    }
    return (
        <>
            <Nav />
            <form onSubmit={handleSubmit} className="p-8 mt-4 flex flex-col gap-8">
                <input
                    type="text"
                    name="startup_name"
                    id="startup_name"
                    aria-label="startup_name"
                    maxLength={20}
                    placeholder="Startup Name"
                    onChange={(e) => setStartupName(e.target.value)}
                    className="outline-none border border-gray-400 focus:border-none focus:bg-[#22d3ee40] py-2 px-4 rounded-md focus:ring-2 focus:ring-cyan-400 w-1/2 mx-auto text-black focus:font-semibold"
                />

                <input
                    type="text"
                    name="startup_desc"
                    id="startup_desc"
                    aria-label="startup_desc"
                    maxLength={100}
                    placeholder="Startup Description"
                    onChange={(e) => setStartupDesc(e.target.value)}
                    className="outline-none border border-gray-400 focus:border-none focus:bg-[#22d3ee40] py-2 px-4 rounded-md focus:ring-2 focus:ring-cyan-400 w-1/2 mx-auto text-black focus:font-semibold"
                />

                <div className="w-1/2 mx-auto flex flex-col">
                    <label
                        htmlFor="main_image"
                        className=""
                    >
                        Add Main image
                    </label>
                    <input
                        type="file"
                        name="main_image"
                        id="main_image"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => { e.target.files && setMainImage(e.target.files[0]) }}
                        className=""
                        required
                    />
                </div>

                <div className="w-1/2 mx-auto flex flex-col">
                    <label
                        htmlFor="image"
                        className=""
                    >
                        Add 3 Images
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        accept=".jpg, .jpeg, .png"
                        multiple
                        onChange={(e) => { e.target.files ? setImageGallery(e.target.files) : null }}
                        className=""
                        required
                    />
                </div>

                {isLoading ?
                    <Button
                        className="w-1/4 mx-auto bg-[#00cbd2] rounded-[4px] text-base text-white p-7 font-semibold"
                        isLoading
                    >
                        Please Wait...
                    </Button> :

                    goToHome ?
                        <Link href="/" className="w-1/4 mx-auto">
                            <Button
                                className="bg-[#54da3d] w-full p-7 rounded-[4px] text-base text-white font-semibold"
                                onClick={() => {setGoToHome(false)}}
                            >
                                Go To Home
                            </Button>
                        </Link> :
                        <Button
                            type="submit"
                            className="w-1/4 mx-auto bg-[#00cbd2] rounded-[4px] text-base text-white p-7 font-semibold"
                        >
                            SUBMIT A NEW STARTUP
                        </Button>
                }
            </form >
        </>
    );
}