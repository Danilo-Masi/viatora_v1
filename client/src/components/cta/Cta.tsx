import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import fullmap from "../../assets/fullmap-screen.png"

export default function Cta() {
    return (
        <section className="w-[95%] md:w-5/6 py-24 flex flex-col items-center justify-center relative overflow-hidden rounded-2xl border border-zinc-800">

            {/* Background */}
            <img
                src={fullmap}
                className="w-full h-full object-cover absolute inset-0 opacity-70" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-black/30 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center gap-5 px-6">
                {/* Headline */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-white max-w-xl leading-tight">
                    Open your next trip on Google Maps
                </h1>
                {/* Subtext */}
                <p className="text-zinc-300 text-sm md:text-lg max-w-md">
                    Buy once. Get instant access to a ready-to-follow itinerary and start exploring immediately.
                </p>
                {/* CTA */}
                <Button
                    size="lg"
                    className="group mt-4 p-6 text-base font-semibold bg-blue-500 text-white flex items-center gap-2 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200">
                    Browse itineraries
                    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                {/* Trust */}
                <p className="text-xs text-zinc-400">
                    Instant delivery • No app needed
                </p>
            </div>

        </section>
    )
}