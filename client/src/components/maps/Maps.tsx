import ItineraryCard from "./ItineraryCard";

export default function Maps() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-start gap-10">

            <h1 className="text-4xl font-bold text-center md:max-w-lg">
                tried & tested travel guides for different type of traverlers
            </h1>

            <div className="w-full h-auto flex flex-wrap gap-5">
                <ItineraryCard />
                <ItineraryCard />
                <ItineraryCard />
                <ItineraryCard />
            </div>

        </div>
    )
}
