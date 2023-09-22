'use client'
import { Nav } from "@/components/nav"
import { Button } from "@nextui-org/react";

export default function newStartup() {
    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(e.target.image.value);
    }
    return (
        <>
            <Nav />
            <form onSubmit={handleSubmit} className="p-8 mt-4 flex flex-col gap-8">
                <input
                    type="text"
                    name="name"
                    id="name" aria-label="name"
                    maxLength={20}
                    placeholder="Startup Name"
                    className="outline-none border border-gray-400 focus:border-none focus:bg-[#22d3ee40] py-2 px-4 rounded-md focus:ring-2 focus:ring-cyan-400 w-1/2 mx-auto text-black focus:font-semibold"
                />

                <input
                    type="text"
                    name="desc"
                    id="desc"
                    aria-label="desc"
                    maxLength={100}
                    placeholder="Startup Description"
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
                        name="image"
                        id="image"
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