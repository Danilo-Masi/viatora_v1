import { Bookmark, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

interface ItineraryCardInterface {
    image: string;
    title: string;
    price: string;
    state: string;
    days: number;
    description: string;
}

export default function ItineraryCard({ image, title, price, state, days, description }: ItineraryCardInterface) {

    return (
        <div className="w-full md:w-[calc(33%-10px)] h-[80svh] rounded-xl relative border-2 border-amber-300">

            {/* Bg images */}
            <img src={image} className="w-full h-full object-cover rounded-xl" />

            {/* Saving */}
            <div className="absolute top-5 right-5 p-3 rounded-full bg-black flex items-center justify-center cursor-pointer">
                <Bookmark color="white" size={18} />
            </div>

            {/* Information */}
            <section className="flex flex-col w-full h-min absolute bottom-0 left-0 backdrop-blur-2xl rounded-b-2xl p-5 mask-t-from-95% bg-linear-to-t from-black via-black/50 to-transparent">

                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-white">
                        {title}
                    </h1>
                    <p className="py-1 px-3 bg-white/10 backdrop-blur-sm text-sm font-semibold text-white rounded-xl border border-white/20">
                        {price}
                    </p>
                </div>

                <p className="text-white/70 font-light text-xs italic mt-1 mb-3">{state} | {days} days trip</p>

                {/* Description */}
                <p className="text-sm text-white/80 leading-relaxed line-clamp-3 mb-3">
                    {description}
                </p>

                <p className="text-sm text-white/80 leading-relaxed underline mb-3">View other information</p>

                {/* CTA */}
                <Button className="mt-2 w-full py-7 md:py-6 bg-amber-300 text-black font-bold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200">
                    Buy itinerary <ShoppingCart />
                </Button>

            </section>

        </div>
    )
}
