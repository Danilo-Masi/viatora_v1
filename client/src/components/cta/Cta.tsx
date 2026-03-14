import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import fullmap from "../../assets/fullmap-screen.png";

export default function Cta() {
    return (
        <div className="w-full h-[55svh] flex flex-col items-center justify-center gap-6 rounded-2xl relative overflow-hidden border border-zinc-700">

            {/* Background image */}
            <img
                src={fullmap}
                className="w-full h-full object-cover absolute inset-0 opacity-60"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-800 via-zinc/80 to-zinc-800/30 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center gap-3 px-6">

                <h1 className="text-3xl md:text-4xl font-bold text-white max-w-xl leading-tight">
                    Stop planning. Start exploring.
                </h1>

                <p className="text-zinc-300 text-sm md:text-base max-w-md">
                    Discover ready-to-follow itineraries and find your next adventure in seconds.
                </p>

                <Button
                    size="lg"
                    className="p-6 text-base bg-yellow-500 text-zinc-800 font-bold">
                    Explore itineraries
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-zinc-400 mt-1">
                    1,200+ itineraries across 50+ cities
                </p>

            </div>
        </div>
    )
}