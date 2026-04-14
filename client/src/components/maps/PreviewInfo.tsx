import { Button } from "../ui/button"
import { ChevronRight, Lock, MapPin } from "lucide-react"

const typeLabel: any = {
    food: "Food spot",
    bar: "Bar",
    hotel: "Stay",
    activity: "Experience",
    photo: "Photo spot"
}

export default function PreviewInfo({ itinerary }: { itinerary: any }) {
    return (
        <div className="w-full h-[50svh] overflow-y-auto flex flex-col justify-between gap-6 px-1">

            {/* HEADER */}
            <div className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-zinc-900">
                    First stops of your trip
                </h2>
                <p className="text-sm text-zinc-500">
                    These are just a few highlights. Unlock the full map with all spots, routes and local tips.
                </p>
            </div>

            {/* STOPS */}
            <ul className="flex flex-col gap-3">
                {itinerary.previewSpots.map((spot: any, i: number) => (
                    <li
                        key={spot.id}
                        className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-white hover:shadow-md hover:scale-[1.01] transition cursor-pointer">

                        <div className="flex items-center gap-3">
                            {/* NUMBER */}
                            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-semibold">
                                {i + 1}
                            </div>

                            {/* TEXT */}
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-zinc-800">
                                    {spot.title}
                                </span>

                                <span className="text-xs text-zinc-400">
                                    {spot.type ? typeLabel[spot.type] : "Point of interest"} • Tap to view
                                </span>
                            </div>
                        </div>

                        <MapPin className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 transition" />
                    </li>
                ))}

                {/* LOCKED */}
                <li className="relative flex items-center justify-between p-4 rounded-xl border border-dashed border-zinc-300 bg-zinc-50">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-zinc-200 text-zinc-500 text-xs font-semibold">
                            ...
                        </div>

                        <span className="text-sm text-zinc-600">
                            + {Math.max(itinerary.spots - itinerary.previewSpots.length, 0)} more spots
                        </span>
                    </div>

                    <Lock className="w-4 h-4 text-zinc-400" />
                </li>
            </ul>

            {/* CTA */}
            <div className="flex flex-col gap-3">
                {/* SOCIAL PROOF */}
                <p className="text-xs text-zinc-500 text-center">
                    Join 1,200+ travelers exploring smarter ✈️
                </p>

                <Button
                    className="w-full py-6 text-base font-semibold bg-blue-500 hover:bg-blue-600 shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2">
                    Unlock full itinerary for €{itinerary.price}
                    <ChevronRight className="w-5 h-5" />
                </Button>

                {/* MICRO COPY */}
                <p className="text-xs text-zinc-400 text-center">
                    Instant access • One-time payment
                </p>
            </div>
        </div>
    )
}