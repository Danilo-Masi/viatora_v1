import itinerary_card from "../../assets/itinerary_card.jpg";
import { Button } from "../ui/button";

export default function ItineraryCard() {
    return (
        <div className="w-full md:w-[calc(33%-10px)] h-[80svh] rounded-4xl relative">

            <img src={itinerary_card} className="w-full h-full object-cover rounded-4xl" />

            <div className="w-full h-[55%] absolute bottom-0 left-0 bg-linear-to-b from-white/50 to-transparent" />

            <div className="w-full h-[55%] absolute bottom-0 left-0 backdrop-blur-xl rounded-b-2xl p-5" >

                <section className="w-full h-full flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-bold text-white">Swiss Alps Reatreat</h1>
                        <p className="py-2 px-4 bg-zinc-800 text-sm font-bold text-white rounded-2xl">$9.99</p>
                    </div>
                    <p className="text-sm text-zinc-800">
                        Cras egestas ut tellus ac tempor. Maecenas laoreet eros at mauris tempus placerat. Sed rutrum lacus interdum felis interdum malesuada. Integer rutrum metus turpis, vel porta nisl varius a. Quisque sit amet dui nisi.
                    </p>
                    <div className="w-full h-min flex gap-3">
                        <p className="py-2 px-4 rounded-2xl font-bold text-white bg-zinc-400">Top rated</p>
                        <p className="py-2 px-4 rounded-2xl font-bold text-white bg-zinc-400">5 days itinerary</p>
                    </div>
                    <Button className="p-6 rounded-3xl bg-white text-black font-bold text-lg">
                        Buy itinerary
                    </Button>

                </section>

            </div>

        </div>
    )
}
