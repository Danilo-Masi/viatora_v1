export default function Footer() {
    return (
        <div className="w-full h-auto  flex flex-wrap items-start justify-start py-5 gap-10 border-t">
            <div className="w-full md:w-[calc(25%-30px)] h-auto flex flex-col gap-3 text-center md:text-left">
                <h1 className="text-3xl font-extrabold">
                    Viat<span className="text-amber-300">ora</span>
                </h1>
                <h3 className="text-base md:text-sm text-zinc-400 text-balance">Live the experience with a mapped itinerary</h3>
            </div>
            <div className="w-full md:w-[calc(25%-30px)] h-auto flex flex-col text-center">
                <h1 className="text-xl font-bold">Product</h1>
                <ul className="text-base font-light text-zinc-400 mt-3 flex flex-col gap-3">
                    <li>Features</li>
                    <li>Itinerary</li>
                    <li>Faqs</li>
                </ul>
            </div>
            <div className="w-full md:w-[calc(25%-30px)] h-auto flex flex-col text-center">
                <h1 className="text-xl font-bold">Legal</h1>
                <ul className="text-base font-light text-zinc-400 mt-3 flex flex-col gap-3">
                    <li>Terms of services</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="w-full md:w-[calc(25%-30px)] h-auto  flex flex-col text-center">
                <h1 className="text-xl font-bold">Resources</h1>
                <ul className="text-base font-light text-zinc-400 mt-3 flex flex-col gap-3">
                    <li>X (Twitter)</li>
                    <li>Reddit</li>
                    <li>Want to sell your itineray?</li>
                </ul>
            </div>
            <div className="w-full h-auto flex flex-col md:flex-row gap-3 items-center justify-between border-t pt-5">
                <p className="text-sm text-zinc-400">@2026 Viatora - All right reserved</p>
                <p className="text-sm text-zinc-400 underline">sitemap</p>
            </div>
        </div>
    )
}
