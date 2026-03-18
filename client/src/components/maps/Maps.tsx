import amsterdam from "../../assets/amsterdam_card.jpg";
import siviglia from "../../assets/siviglia_card.jpg";
import budapest from "../../assets/budapest_card.jpg";
import milano from "../../assets/milano_card.jpg";
import ItineraryCard from "./ItineraryCard";
import { useState } from "react";
import MobileInformation from "./MobileInformation";

const itinerari = [
    {
        id: 1,
        image: amsterdam,
        title: "Amsterdam Highlights",
        price: "$9.99",
        state: "🇳🇱 Netherlands",
        days: 3,
        description: "Explore canals, Anne Frank House, Jordaan, and museums. A compact route through Amsterdam’s most iconic sights, perfect for a first visit.",
    },
    {
        id: 2,
        image: siviglia,
        title: "Seville in One Day",
        price: "$8.99",
        state: "🇪🇸 Spain",
        days: 4,
        description: "Visit the Cathedral, Giralda, Alcázar, and Plaza de España. Experience tapas, flamenco vibes, and Andalusian charm in a walkable historic center.",
    },
    {
        id: 3,
        image: budapest,
        title: "Budapest Essentials",
        price: "$7.99",
        state: "🇭🇺 Hungary",
        days: 2,
        description: "Discover Buda Castle, Parliament, Fisherman’s Bastion, and thermal baths. A scenic itinerary across the Danube with stunning viewpoints and rich history.",
    },
    {
        id: 4,
        image: milano,
        title: "Milan City Guide",
        price: "$6.99",
        state: "🇮🇹 Italy",
        days: 7,
        description: "See the Duomo, Galleria Vittorio Emanuele II, Brera, and Navigli. A mix of fashion, history, and vibrant nightlife in Italy’s modern cultural capital.",
    },
];

export default function Maps() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-start gap-15">

            <h1 className="text-4xl font-bold text-center md:max-w-lg">
                Chose your itinerary
            </h1>

            <div className="w-full h-auto flex flex-wrap gap-5">
                {itinerari.map((itinerario) => (
                    <ItineraryCard
                        image={itinerario.image}
                        title={itinerario.title}
                        price={itinerario.price}
                        state={itinerario.state}
                        days={itinerario.days}
                        description={itinerario.description} />
                ))}
            </div>
        </div>
    )
}
