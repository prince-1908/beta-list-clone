import { Card, CardBody } from "@nextui-org/react";
import { ChevronRight } from 'lucide-react';
import { useState } from "react";

export const TrendingTopics = () => {
    return (
        <div className="p-8 mt-4">
            <h1 className="text-sm">Trending Topics</h1>
            <div className="grid grid-cols-6 gap-4 mt-2">
                <Card className="group shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardBody>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#d2540033] p-1 rounded-[4px] aspect-square">💻</div>
                                <div className="whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">SaaS</div>
                            </div>
                            <div className="hidden group-hover:block"><ChevronRight /></div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="group shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardBody>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#1977b333] p-1 rounded-[4px] aspect-square">🤖</div>
                                <div className="whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">AI Tools</div>
                            </div>
                            <div className="hidden group-hover:block"><ChevronRight /></div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="group shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardBody>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#d2540033] p-1 rounded-[4px] aspect-square">🚀</div>
                                <div className="whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">Startups</div>
                            </div>
                            <div className="hidden group-hover:block"><ChevronRight /></div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="group shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardBody>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#1977b333] p-1 rounded-[4px] aspect-square">🔨</div>
                                <div className="whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">Web Tools</div>
                            </div>
                            <div className="hidden group-hover:block"><ChevronRight /></div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="group shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardBody>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#d2540033] p-1 rounded-[4px] aspect-square">💻</div>
                                <div className="whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">AI Copywriting</div>
                            </div>
                            <div className="hidden group-hover:block"><ChevronRight /></div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="group shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardBody>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#1977b333] p-1 rounded-[4px] aspect-square">🗣</div>
                                <div className="whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">Sales and Marketing</div>
                            </div>
                            <div className="hidden group-hover:block"><ChevronRight /></div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="group shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardBody>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#d2540033] p-1 rounded-[4px] aspect-square">📱</div>
                                <div className="whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">Apps</div>
                            </div>
                            <div className="hidden group-hover:block"><ChevronRight /></div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="group shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardBody>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#1977b333] p-1 rounded-[4px] aspect-square">🔧</div>
                                <div className="whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">Developer Tools</div>
                            </div>
                            <div className="hidden group-hover:block"><ChevronRight /></div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="group shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardBody>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#d2540033] p-1 rounded-[4px] aspect-square">💡</div>
                                <div className="whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">ChatGPT Powered</div>
                            </div>
                            <div className="hidden group-hover:block"><ChevronRight /></div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="group shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardBody>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#1977b333] p-1 rounded-[4px] aspect-square">📚</div>
                                <div className="whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">Education</div>
                            </div>
                            <div className="hidden group-hover:block"><ChevronRight /></div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="group shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardBody>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#d2540033] p-1 rounded-[4px] aspect-square">💬</div>
                                <div className="whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">Social Media</div>
                            </div>
                            <div className="hidden group-hover:block"><ChevronRight /></div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="group shadow-none border hover:bg-gray-100 cursor-pointer">
                    <CardBody>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <div className="bg-[#1977b333] p-1 rounded-[4px] aspect-square">💻</div>
                                <div className="whitespace-nowrap overflow-hidden text-ellipsis w-[80%]">Machine Learning</div>
                            </div>
                            <div className="hidden group-hover:block"><ChevronRight /></div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}