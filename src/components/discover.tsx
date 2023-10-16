import { X } from 'lucide-react';

export const Discover = (props:any) => {
    const handleCut = () => {
        props.discoverShow(false);
    }
    return (
        <div className="p-8 mt-4">
            <div className="border border-black p-8 bg-black flex rounded-lg relative">
                <button onClick={handleCut} className="absolute right-3 top-3 bg-gray-500 hover:bg-gray-400 rounded-full p-1 transition-all">
                    <X />
                </button>
                <div className="text-6xl font-extrabold text-white w-1/2">Discover tomorrow&apos;s Startup, today.</div>
                <div className="w-1/2">
                    <p className="text-white text-3xl">BetaList helps you find early-stage startups before they make it big.</p>
                    <div className="mt-2 text-2xl flex gap-4">
                        <button className="px-5 py-2 text-black bg-[#00CCD1] rounded-full cursor-pointer hover:bg-[#2aadaf] transition-all">Submit startup</button>
                        <button className="px-5 py-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-500 transition-all">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
