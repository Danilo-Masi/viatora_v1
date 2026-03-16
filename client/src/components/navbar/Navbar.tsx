import { Button } from "../ui/button";

export default function () {
    return (
        <div className="w-full h-[6svh] flex items-center justify-between">
            <h1
                className="text-3xl font-extrabold">
                Viat<span className="text-amber-300">ora</span>
            </h1>
            <Button
                size="lg"
                className="mt-2 p-5 text-base font-bold bg-amber-300 text-zinc-900 flex items-center gap-2 hover:scale-105 hover:shadow-xl transition-all duration-200">
                🚢 View itinerary ✈️
            </Button>
        </div>
    )
}
