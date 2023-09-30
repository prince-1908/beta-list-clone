'use client'
import { Nav } from "@/components/nav"
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function newStartup() {
    const [startupName, setStartupName] = useState('');
    const [startupDesc, setStartupDesc] = useState('');
    const [mainImage, setMainImage] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        fetch('/api/startup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                startupName: startupName,
                startupDesc: startupDesc
            }),
        }).then((response) => response.json())
            .then((data) => console.log(data));
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
                        htmlFor="image"
                        className=""
                    >
                        Add 3 Images
                    </label>
                    <input
                        type="file"
                        name="main_image"
                        id="main_image"
                        accept=".jpg, .jpeg, .png"
                        multiple
                        className=""
                    />
                </div>

                <Button
                    type="submit"
                    className="w-1/4 mx-auto bg-[#00cbd2] rounded-[4px] text-base text-white p-7 font-semibold"
                >
                    SUBMIT A NEW STARTUP
                </Button>
            </form>
        </>
    );
}