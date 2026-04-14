import { itineraries } from "@/data/itineraries"
import { useMemo } from "react"
import AdCard from "./AdCard";

const items = itineraries.filter((i) => i.badge === "trending");

export default function InfiniteCards() {

    const duplicated = useMemo(() => [...items, ...items], [items]);

    return (
        <div className="w-full overflow-hidden relative">
            {/* Lateral fade */}
            <div className="absolute left-0 top-0 w-20 h-full bg-linear-to-r from-zinc-50 via-zinc-50/30 to-transparent z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-linear-to-l from-zinc-50 via-zinc-50/30 to-transparent z-10" />
            {/* Track */}
            <div className="flex w-max animate-scroll gap-6">
                {duplicated.map((item) => (
                    <AdCard
                        key={item.id}
                        id={item.id}
                        spots={item.spots}
                        city={item.city}
                        description={item.description}
                        cover={item.cover2}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
}