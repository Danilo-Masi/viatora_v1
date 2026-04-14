import { Battery, Signal, Wifi } from "lucide-react";
import LeafletMap from "./LeafletMap";

export default function PhoneMockup({ daySelected }: { daySelected: number }) {
    return (
        <div className="w-full h-[70svh] rounded-t-[3.5rem] p-2 pb-0 bg-zinc-900 relative shadow-2xl shadow-blue-500">
            {/* BUTTONS */}
            <div className="w-[1svh] h-[4svh] absolute top-20 -left-0.5 rounded-full bg-zinc-900" />
            <div className="w-[1svh] h-[5svh] absolute top-40 -left-0.5 rounded-full bg-zinc-900" />
            <div className="w-[1svh] h-[5svh] absolute top-50 -left-0.5 rounded-full bg-zinc-900" />

            <div className="w-full h-full rounded-t-[3rem] flex flex-col items-center justify-start gap-5 overflow-hidden relative isolate bg-zinc-100">

                {/* MAP */}
                <LeafletMap
                    daySelected={daySelected}
                />

                {/* HEADER */}
                <div className="w-full h-[8svh] flex items-center justify-between px-5 rounded-t-[3rem] relative isolate">
                    {/* Overlays */}
                    <div className="absolute inset-0 rounded-t-[3rem] backdrop-blur-2xl bg-white/30" />
                    <div className="absolute inset-0 bg-linear-to-b from-white/80 via-white/20 to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-px bg-white/50" />
                    {/* Components */}
                    <h1 className="w-1/3 text-sm font-semibold z-20">19:20</h1>
                    <div className="w-1/3 h-[4svh] rounded-full flex items-center justify-start p-2 gap-2 z-20 bg-zinc-900">
                        <div className="w-4 h-full rounded-full bg-zinc-700" />
                        <div className="w-full h-full rounded-full bg-zinc-700" />
                    </div>
                    <div className="w-1/3 flex justify-end gap-2 z-20">
                        <Signal size={18} />
                        <Wifi size={18} />
                        <Battery size={18} fill="black" />
                    </div>
                </div>

                {/* FLOATING CARD */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-xl p-3 shadow-lg flex flex-col gap-1 z-30">
                    <h3 className="text-xs text-zinc-400">
                        {daySelected === 1
                            ? "Day 1"
                            : daySelected === 2
                                ? "Day 2"
                                : "Day 3"
                        }
                    </h3>
                    <h2 className="text-sm font-semibold text-zinc-900">
                        {daySelected === 1
                            ? "Central Park, The Met, and hidden gems in Manhattan"
                            : daySelected === 2
                                ? "Brooklyn vibes: street art, food, and culture"
                                : "Off the beaten path: Queens and Bronx exploration"
                        }
                    </h2>
                </div>

            </div>
        </div>
    )
}
