'use client'
import { Nav } from "@/components/nav";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function Submit() {
    const router = useRouter();
    const handleAddNewStartup = () => {
        router.push('./submit/create-new-startup');
    }
    return (
        <>
            <Nav />
            <div className="px-32">
                <h1 className="text-4xl text-center font-extrabold my-16">
                    Your Startups
                </h1>

                <Button
                    className="bg-[#00cbd2] rounded-[4px] text-base text-white p-7 font-semibold"
                    onClick={handleAddNewStartup}
                >
                    SUBMIT A NEW STARTUP
                </Button>
            </div>
        </>
    );
}