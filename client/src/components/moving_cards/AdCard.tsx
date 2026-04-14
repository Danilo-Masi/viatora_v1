import { ArrowUpRight } from "lucide-react"
import { Button } from "../ui/button"
import { useAppContext } from "@/context/AppContext";

type AdCardProps = {
    spots: number,
    id: string,
    city: string,
    description: string,
    cover: string,
    price: number
}

export default function AdCard({ id, spots, city, description, cover, price }: AdCardProps) {
    const { setSelectedItinerary, setPreviewOpen } = useAppContext();

    const handleSelect = () => {
        setSelectedItinerary(id);
        setPreviewOpen(true);
    }

    return (
        <div className="group relative w-[45svh] h-[50svh] rounded-3xl overflow-hidden cursor-pointer">

            {/* IMAGE */}
            <img
                src={cover}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40" />

            {/* TOP FOMO TEXT */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white text-xs font-medium">
                <span className="bg-white/10 backdrop-blur px-3 py-1 rounded-full">
                    📍 {spots} spots avaible
                </span>
            </div>

            {/* BOTTOM CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col">

                {/* CITY */}
                <h2 className="text-white text-3xl font-bold tracking-tight">
                    {city}
                </h2>

                {/* SUBTEXT */}
                <p className="text-white/80 text-sm max-w-[80%] line-clamp-2 mt-1">
                    {description}
                </p>

                {/* CTA ROW */}
                <div className="flex items-center justify-between mt-5">

                    {/* PRICE */}
                    <span className="text-white text-lg font-semibold">
                        €{price}
                    </span>

                    {/* CTA */}
                    <Button
                        onClick={handleSelect}
                        variant="outline"
                        size="icon-lg"
                        className="bg-zinc-200 text-zinc-900">
                        <ArrowUpRight size={16} />
                    </Button>
                </div>
            </div>

            {/* GLOW HOVER */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-white/10 pointer-events-none" />
        </div>
    )
}