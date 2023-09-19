import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export const Trending = () => {
    return (
        <div className='p-8 mt-4'>
            <h1>TRENDING STARTUPS</h1>
            <div className="grid grid-cols-3 gap-4 mt-2">
                <Card className="shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardHeader className="flex gap-3 items-start">
                        <Image
                            alt="nextui logo"
                            height={100}
                            width={100}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        />
                        <div className="flex flex-col">
                            <p className="text-md">NextUI</p>
                            <p className="text-small text-default-500">nextui.org</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </div>
                    </CardHeader>
                </Card>

                <Card className="shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardHeader className="flex gap-3 items-start">
                        <Image
                            alt="nextui logo"
                            height={100}
                            width={100}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        />
                        <div className="flex flex-col">
                            <p className="text-md">NextUI</p>
                            <p className="text-small text-default-500">nextui.org</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </div>
                    </CardHeader>
                </Card>

                <Card className="shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardHeader className="flex gap-3 items-start">
                        <Image
                            alt="nextui logo"
                            height={100}
                            width={100}
                            radius="sm"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        />
                        <div className="flex flex-col">
                            <p className="text-md">NextUI</p>
                            <p className="text-small text-default-500">nextui.org</p>
                            <p>Make beautiful websites regardless of your design experience.</p>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}
