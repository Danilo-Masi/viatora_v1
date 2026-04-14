import { Bookmark, ChevronRight, Flame, Sparkles, MapPin, Vault, Flag } from "lucide-react";
import { Button } from "../ui/button";
import { useAppContext } from "@/context/AppContext";

interface ItineraryCardInterface {
    id: string;
    image: string;
    title: string;
    price: number;
    country: string;
    city: string;
    duration: number;
    shortDescription: string;
    spots: number;
    badges?: ("trending" | "new" | "best_value" | "hidden_gems")[];
    vibe?: ("food" | "nature" | "nightlife" | "culture" | "relax")[];
}

function getBadge(badges?: string[]) {
    if (!badges) return null;

    if (badges.includes("trending")) {
        return (
            <div className="flex items-center gap-1 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                <Flame size={12} fill="white" /> Trending
            </div>
        );
    }

    if (badges.includes("new")) {
        return (
            <div className="flex items-center gap-1 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                <Sparkles size={12} fill="white" /> New
            </div>
        );
    }

    if (badges.includes("best_value")) {
        return (
            <div className="flex items-center gap-1 bg-amber-300 text-zinc-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                <Flag size={12} fill="current" />Best value
            </div>
        );
    }

    if (badges.includes("hidden_gems")) {
        return (
            <div className="flex items-center gap-1 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                <Vault size={12} /> Hidden gems
            </div>
        );
    }

    return null;
}

export default function ItineraryCard({ id, image, title, price, country, city, duration, shortDescription, spots, badges, vibe }: ItineraryCardInterface) {
    const { setPreviewOpen, setSelectedItinerary } = useAppContext();

    const handlePreview = () => {
        setSelectedItinerary(id);
        setPreviewOpen(true);
    }

    return (
        <div className="w-full md:w-[calc(33%-18px)] h-[80svh] rounded-2xl relative overflow-hidden bg-zinc-900 border border-zinc-200 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">

            {/* IMAGE */}
            <img src={image} className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-75 group-hover:opacity-100" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

            {/* TOP BAR */}
            <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-20">

                {/* BADGE */}
                {getBadge(badges)}

                {/* SAVE */}
                <div className="p-2 rounded-full bg-black/60 backdrop-blur-md hover:bg-black transition">
                    <Bookmark color="white" size={16} />
                </div>
            </div>

            {/* CONTENT */}
            <section className="absolute bottom-0 left-0 w-full p-5 z-20 flex flex-col gap-3">

                {/* LOCATION */}
                <div className="flex items-center gap-2 text-white/70 text-xs">
                    <MapPin size={14} />
                    {city}, {country}
                </div>

                {/* TITLE */}
                <h1 className="text-xl font-bold text-white leading-tight">
                    {title}
                </h1>

                {/* QUICK INFO */}
                <div className="flex items-center gap-3 text-xs text-white/70">
                    <span>📍 {spots} spots</span>
                    <span>•</span>
                    <span>🗓 {duration} days</span>
                </div>

                {/* VIBE TAGS */}
                {vibe && (
                    <div className="flex flex-wrap gap-2">
                        {vibe.slice(0, 3).map((v, i) => (
                            <span
                                key={i}
                                className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                                {v}
                            </span>
                        ))}
                    </div>
                )}

                {/* DESCRIPTION */}
                <p className="text-sm text-white/80 line-clamp-2">
                    {shortDescription}
                </p>

                {/* PRICE + CTA */}
                <div className="flex items-center gap-3 mt-2">

                    <div className="text-white font-bold text-lg">
                        €{price}
                    </div>

                    <Button
                        onClick={handlePreview}
                        className="flex-1 py-5 bg-blue-500 text-white font-semibold text-sm rounded-xl hover:scale-[1.02] hover:shadow-xl transition-all duration-200">
                        View itinerary <ChevronRight size={16} />
                    </Button>
                </div>

            </section>
        </div>
    );
}