'use client'
import { Nav } from "@/components/nav";
import { Button } from "@nextui-org/react";

export default function Submit() {
    return (
        <>
            <Nav />
            <div className="px-32">
                <h1 className="text-4xl text-center font-extrabold my-16">
                    Your Startups
                </h1>

                <Button
                    className="bg-[#00cbd2] rounded-[4px] text-base text-white p-7 font-semibold"
                >
                    SUBMIT A NEW STARTUP
                </Button>
            </div>
        </>
    );
}