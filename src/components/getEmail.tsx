import { X } from 'lucide-react';
export const GetEmail = (props: any) => {
    const handleCut = () => {
        props.getEmailShow(false);
    }
    return (
        <div className="p-8 mt-4">
            <div className="border border-black p-8 bg-black rounded-lg flex items-center relative">
                <button onClick={handleCut} className="absolute right-3 top-3 bg-gray-500 hover:bg-gray-400 rounded-full p-[2px] transition-all">
                    <X
                        size={20}
                    />
                </button>
                <div className="flex items-center w-1/2">
                    <div className="text-4xl px-1">🔥</div>
                    <div>
                        <h1 className="text-2xl font-medium text-white">Stay ahead of the curve</h1>
                        <p className="text-gray-400">Receive a daily digest of the newest startups.</p>
                    </div>
                </div>

                <div className="w-1/2 flex gap-2 ml-auto">
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email address"
                        className="border-none outline-none rounded bg-gray-800 text-xl placeholder:text-xl py-2 px-3 grow focus:ring-2 ring-cyan-400"
                        required
                    />

                    <button className="py-2 px-3 bg-cyan-800 hover:bg-cyan-700 rounded cursor-pointer text-xl text-white">
                        Get early access
                    </button>
                </div>
            </div>
        </div>
    )
}