import { Button } from "../ui/button";
import PhoneMockup from "./PhoneMockup";
// Images
import amsterdam_map from "../../assets/amsterdam-map.png";
import rome_map from "../../assets/rome-map.png";
import seville_map from "../../assets/seville-map.png";

export default function Hero() {

    const isMobile = window.innerWidth < 728;

    const daySelector1 = [
        {
            "day": "27",
            "weekday": "Monday",
            "selected": false,
        },
        {
            "day": "28",
            "weekday": "Tuesday",
            "selected": true,
        },
        {
            "day": "29",
            "weekday": "Wendsday",
            "selected": false,
        },
    ];

    const daySelector2 = [
        {
            "day": "13",
            "weekday": "Thursday",
            "selected": true,
        },
        {
            "day": "14",
            "weekday": "Friday",
            "selected": false,
        },
        {
            "day": "15",
            "weekday": "Saturday",
            "selected": false,
        },
    ];

    const daySelector3 = [
        {
            "day": "03",
            "weekday": "Saturday",
            "selected": false,
        },
        {
            "day": "04",
            "weekday": "Sunday",
            "selected": false,
        },
        {
            "day": "05",
            "weekday": "Monday",
            "selected": true,
        },
    ];

    const coordinates1 = [
        { t: "top-5", l: "left-10" },
        { t: "top-5", l: "left-50" },
        { t: "top-30", l: "left-50" },
    ];

    const coordinates2 = [
        { t: "top-10", l: "left-20" },
        { t: "top-30", l: "left-50" },
        { t: "top-50", l: "left-30" },
    ];

    const coordinates3 = [
        { t: "top-20", l: "left-60" },
        { t: "top-30", l: "left-50" },
        { t: "top-10", l: "left-10" },
    ];

    return (
        <div className="w-full h-auto min-h-[80svh] flex flex-col items-center justify-center gap-10 relative">
            {/* Text */}
            <section className="w-full flex flex-col items-center justify-center text-center gap-6 z-50">
                <h1 className="text-6xl font-extrabold leading-tight max-w-2xl text-balance">
                    Your next <span className="text-amber-300 italic">adventure</span> is already mapped
                </h1>
                <p className="text-base md:text-lg text-zinc-400 max-w-lg text-balance">
                    Stop wasting hours planning. Discover beautiful, ready to follow itineraries
                    and start exploring the world with intention.
                </p>
                <Button
                    size="lg"
                    className="mt-2 p-6 text-lg font-bold bg-amber-300 text-amber-950">
                    📍 Explore itineraries 🌍
                </Button>
            </section>
            {/* Design */}
            <div className="w-full h-full flex flex-wrap items-end justify-center gap-5">
                {isMobile ? (
                    <PhoneMockup
                        height="h-[80svh]"
                        hour="9:41"
                        title="Amsterdam 🌷🇳🇱"
                        days="3 days itinerary"
                        description="Canals, bicycles and cozy cafés, a perfect weekend lost in Dutch charm."
                        map={amsterdam_map}
                        daySelector={daySelector2}
                        coordinates={coordinates2}
                    />
                ) : (
                    <>
                        <PhoneMockup
                            height="h-[70svh]"
                            hour="10:37"
                            title="Seville ☀️🇪🇸"
                            days="10 days itinerary"
                            description="Golden sunsets, flamenco nights and slow walks through Andalusia’s sun-drenched streets."
                            map={seville_map}
                            daySelector={daySelector1}
                            coordinates={coordinates1} />
                        <PhoneMockup
                            height="h-[80svh]"
                            hour="9:41"
                            title="Amsterdam 🌷🇳🇱"
                            days="3 days itinerary"
                            description="Canals, bicycles and cozy cafés, a perfect weekend lost in Dutch charm."
                            map={amsterdam_map}
                            daySelector={daySelector2}
                            coordinates={coordinates2} />
                        <PhoneMockup
                            height="h-[70svh]"
                            hour="18:11"
                            title="Rome 🍝🇮🇹"
                            days="5 days itinerary"
                            description="Ancient ruins, golden light and endless plates of pasta in the Eternal City."
                            map={rome_map}
                            daySelector={daySelector3}
                            coordinates={coordinates3} />
                    </>
                )}

            </div>
            {/* Effetcs */}
            <div className="w-full h-full absolute bottom-0 left-0 bg-linear-to-t from-5%/3 from-zinc-50 via-transparent to-transparent z-20" />
            <div className="w-full h-full absolute bottom-0 left-0 bg-linear-to-t from-zinc-50 via-transparent to-transparent z-20" />
        </div>
    )
}
