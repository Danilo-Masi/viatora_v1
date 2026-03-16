import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import fullmap from "../../assets/fullmap-screen.png"

export default function Cta() {
    return (
        <section className="w-full h-[55svh] flex flex-col items-center justify-center relative overflow-hidden rounded-2xl border border-zinc-400">

            {/* Background image */}
            <img
                src={fullmap}
                className="w-full h-full object-cover absolute inset-0 opacity-70" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-zinc-900/80 via-zinc-800/50 to-zinc-900/30 backdrop-blur-xs z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center gap-4 px-6">

                {/* Titolo */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-white max-w-xl leading-tight drop-shadow-lg">
                    Stop planning. <br />Start exploring.
                </h1>

                {/* Subtext */}
                <p className="text-zinc-300 text-sm md:text-lg max-w-sm drop-shadow-sm">
                    Discover ready to follow itineraries and find your next adventure in seconds.
                </p>

                {/* CTA */}
                <Button
                    size="lg"
                    className="mt-2 px-8 py-5 text-base font-bold bg-amber-300 text-zinc-900 flex items-center gap-2 hover:scale-105 hover:shadow-xl transition-all duration-200">
                    Explore itineraries
                    <ArrowRight className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" />
                </Button>

                {/* Statistiche */}
                <p className="text-xs md:text-sm text-zinc-400">
                    1,200+ itineraries across 50+ cities
                </p>

            </div>
        </section>
    )
}