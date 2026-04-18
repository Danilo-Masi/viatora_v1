import rome from "../assets/itineraries/rome_card.jpg";
import rome2 from "../assets/itineraries/rome_card_2.jpg";
import florence from "../assets/itineraries/florence_card.jpg";
import florence2 from "../assets/itineraries/florence_card_2.jpg";
import milan from "../assets/itineraries/milano_card.jpg";
import milan2 from "../assets/itineraries/milan_card_2.jpg";
import naples from "../assets/itineraries/naples_card.jpg";
import naples2 from "../assets/itineraries/naples_card_2.jpg";
import amsterdam from "../assets/itineraries/amsterdam_card.jpg";
import amsterdam2 from "../assets/itineraries/amsterdam_card_3.webp";
import split from "../assets/itineraries/split_card.jpg";
import split2 from "../assets/itineraries/split_card_2.jpg";
import dubrovnik from "../assets/itineraries/dubrovnik_card.jpg";
import dubrovnik2 from "../assets/itineraries/dubrovnik_card_2.jpg";
import budapest from "../assets/itineraries/budapest_card.jpg";
import budapest2 from "../assets/itineraries/budapest_card_2.jpg";
import vienna from "../assets/itineraries/vienna_card.jpg";
import vienna2 from "../assets/itineraries/vienna_card_2.jpg";
import seville from "../assets/itineraries/siviglia_card.jpg";
import seville2 from "../assets/itineraries/seville_card_2.jpg";
import bilbao from "../assets/itineraries/bilbao_card.jpg";
import bilbao2 from "../assets/itineraries/bilbao_card_2.jpg";
import london from "../assets/itineraries/london_card.jpg";
import london2 from "../assets/itineraries/london_card_2.jpg";
import paris from "../assets/itineraries/paris_card.jpg";
import paris2 from "../assets/itineraries/paris_card_2.jpg";
import lisbon from "../assets/itineraries/lisbon_card.jpg";
import lisbon2 from "../assets/itineraries/lisbon_card_2.jpg";
import newyork from "../assets/itineraries/newyork_card.jpg";
import newyork2 from "../assets/itineraries/newyork_card_2.jpg";

type ItineraryType = {
    id: string,
    title: string,
    description: string,
    city: string,
    country: string,
    continent: string,
    cover: string, // DA CAMBIARE
    cover2: string, // DA CAMBIARE
    images?: string[],
    price: number,
    duration: number,
    period: string,
    badge: string,
    spots: number,
    level: string,
    vibes: string[],
    position: { lat: number, lng: number },
    previewSpots: { id: string, title: string, position: { lat: number, lng: number }, type: string }[],
}

export const itineraries: ItineraryType[] = [
    {
        id: "rome-3-days",
        title: "Rome in 3 days — history, food & hidden corners",
        description: "Walk through history, eat like a local and discover secret Rome.",
        city: "Rome",
        country: "Italy",
        continent: "Europe",
        cover: rome,
        cover2: rome2,
        price: 14.99,
        duration: 3,
        period: "spring",
        badge: "best_value",
        spots: 32,
        level: "medium",
        vibes: ["food", "culture"],
        position: { lat: 41.9028, lng: 12.4964 },
        previewSpots: [
            { id: "1", title: "Colosseum", position: { lat: 41.8902, lng: 12.4922 }, type: "activity" },
            { id: "2", title: "Trevi Fountain", position: { lat: 41.9009, lng: 12.4833 }, type: "photo" },
            { id: "3", title: "Trastevere dinner", position: { lat: 41.8897, lng: 12.4708 }, type: "food" }
        ]
    },

    {
        id: "florence-2-days",
        title: "Florence in 2 days — art & Tuscan vibes",
        description: "Renaissance art, viewpoints and authentic food in 48h.",
        city: "Florence", country: "Italy", continent: "Europe",
        cover: florence, cover2: florence2, price: 12.99, duration: 2, period: "spring",
        badge: "new", spots: 28, level: "easy", vibes: ["culture", "food"],
        position: { lat: 43.7696, lng: 11.2558 },
        previewSpots: [
            { id: "1", title: "Duomo", position: { lat: 43.7731, lng: 11.2560 }, type: "activity" },
            { id: "2", title: "Piazzale Michelangelo", position: { lat: 43.7629, lng: 11.2651 }, type: "photo" },
            { id: "3", title: "Local trattoria", position: { lat: 43.7700, lng: 11.2500 }, type: "food" }
        ]
    },

    {
        id: "milan-2-days",
        title: "Milan in 2 days — design & aperitivo",
        description: "Duomo, Navigli and the best aperitivo spots.",
        city: "Milan", country: "Italy", continent: "Europe",
        cover: milan, cover2: milan2, price: 9.99, duration: 2, period: "autumn",
        badge: "best_value", spots: 28, level: "easy", vibes: ["food", "nightlife"],
        position: { lat: 45.4642, lng: 9.19 },
        previewSpots: [
            { id: "1", title: "Duomo", position: { lat: 45.4642, lng: 9.1916 }, type: "activity" },
            { id: "2", title: "Navigli", position: { lat: 45.4525, lng: 9.1772 }, type: "photo" },
            { id: "3", title: "Aperitivo bar", position: { lat: 45.4510, lng: 9.18 }, type: "bar" }
        ]
    },

    {
        id: "naples-3-days",
        title: "Naples in 3 days — pizza & chaos",
        description: "Raw Italy: food, history and seaside views.",
        city: "Naples", country: "Italy", continent: "Europe",
        cover: naples, cover2: naples2, price: 13.99, duration: 3, period: "summer",
        badge: "trending", spots: 30, level: "medium", vibes: ["food", "culture"],
        position: { lat: 40.8518, lng: 14.2681 },
        previewSpots: [
            { id: "1", title: "Historic center", position: { lat: 40.8510, lng: 14.2580 }, type: "activity" },
            { id: "2", title: "Pizza spot", position: { lat: 40.8515, lng: 14.2550 }, type: "food" },
            { id: "3", title: "Seafront", position: { lat: 40.8300, lng: 14.2400 }, type: "photo" }
        ]
    },

    {
        id: "amsterdam-3-days",
        title: "Amsterdam in 3 days — canals & bikes",
        description: "Explore beyond clichés with cafés and hidden areas.",
        city: "Amsterdam", country: "Netherlands", continent: "Europe",
        cover: amsterdam, cover2: amsterdam2, price: 9.99, duration: 3, period: "summer",
        badge: "trending", spots: 30, level: "easy", vibes: ["culture", "relax"],
        position: { lat: 52.3676, lng: 4.9041 },
        previewSpots: [
            { id: "1", title: "Canals", position: { lat: 52.3731, lng: 4.8922 }, type: "activity" },
            { id: "2", title: "Jordaan", position: { lat: 52.3752, lng: 4.8830 }, type: "photo" },
            { id: "3", title: "Coffee shop", position: { lat: 52.3700, lng: 4.8900 }, type: "food" }
        ]
    },

    {
        id: "split-3-days",
        title: "Split in 3 days — sea & history",
        description: "Beach, ruins and summer vibes.",
        city: "Split", country: "Croatia", continent: "Europe",
        cover: split, cover2: split2, price: 11.99, duration: 3, period: "summer",
        badge: "trending", spots: 26, level: "easy", vibes: ["relax", "food"],
        position: { lat: 43.5081, lng: 16.4402 },
        previewSpots: [
            { id: "1", title: "Diocletian Palace", position: { lat: 43.5085, lng: 16.4390 }, type: "activity" },
            { id: "2", title: "Beach", position: { lat: 43.5050, lng: 16.4550 }, type: "photo" },
            { id: "3", title: "Seaside bar", position: { lat: 43.5060, lng: 16.4450 }, type: "bar" }
        ]
    },

    {
        id: "dubrovnik-2-days",
        title: "Dubrovnik in 2 days — walls & sea",
        description: "Iconic views and sunsets.",
        city: "Dubrovnik", country: "Croatia", continent: "Europe",
        cover: dubrovnik, cover2: dubrovnik2, price: 10.99, duration: 2, period: "summer",
        badge: "trending", spots: 24, level: "easy", vibes: ["relax", "culture"],
        position: { lat: 42.6507, lng: 18.0944 },
        previewSpots: [
            { id: "1", title: "City walls", position: { lat: 42.6410, lng: 18.1100 }, type: "activity" },
            { id: "2", title: "Old town", position: { lat: 42.6400, lng: 18.1080 }, type: "photo" },
            { id: "3", title: "Cliff bar", position: { lat: 42.6390, lng: 18.1050 }, type: "bar" }
        ]
    },

    {
        id: "budapest-3-days",
        title: "Budapest in 3 days — spas & nightlife",
        description: "Relax, explore and party.",
        city: "Budapest", country: "Hungary", continent: "Europe",
        cover: budapest, cover2: budapest2, price: 10.99, duration: 3, period: "spring",
        badge: "trending", spots: 30, level: "medium", vibes: ["nightlife", "culture"],
        position: { lat: 47.4979, lng: 19.0402 },
        previewSpots: [
            { id: "1", title: "Thermal baths", position: { lat: 47.5186, lng: 19.0810 }, type: "activity" },
            { id: "2", title: "Parliament", position: { lat: 47.5070, lng: 19.0450 }, type: "photo" },
            { id: "3", title: "Ruin bar", position: { lat: 47.4970, lng: 19.0630 }, type: "bar" }
        ]
    },

    {
        id: "vienna-2-days",
        title: "Vienna in 2 days — elegance & coffee",
        description: "Imperial culture and cafés.",
        city: "Vienna", country: "Austria", continent: "Europe",
        cover: vienna, cover2: vienna2, price: 9.99, duration: 2, period: "winter",
        badge: "best_value", spots: 24, level: "easy", vibes: ["culture", "relax"],
        position: { lat: 48.2082, lng: 16.3738 },
        previewSpots: [
            { id: "1", title: "Schönbrunn", position: { lat: 48.1845, lng: 16.3122 }, type: "activity" },
            { id: "2", title: "Cafe Central", position: { lat: 48.2100, lng: 16.3650 }, type: "food" },
            { id: "3", title: "City center", position: { lat: 48.2080, lng: 16.3730 }, type: "photo" }
        ]
    },

    {
        id: "seville-3-days",
        title: "Seville in 3 days — tapas & flamenco",
        description: "Feel southern Spain energy.",
        city: "Seville", country: "Spain", continent: "Europe",
        cover: seville, cover2: seville2, price: 11.99, duration: 3, period: "spring",
        badge: "trending", spots: 28, level: "easy", vibes: ["food", "culture"],
        position: { lat: 37.3891, lng: -5.9845 },
        previewSpots: [
            { id: "1", title: "Alcázar", position: { lat: 37.3830, lng: -5.9900 }, type: "activity" },
            { id: "2", title: "Plaza España", position: { lat: 37.3772, lng: -5.9869 }, type: "photo" },
            { id: "3", title: "Tapas bar", position: { lat: 37.3880, lng: -5.9850 }, type: "food" }
        ]
    },

    {
        id: "bilbao-2-days",
        title: "Bilbao in 2 days — art & food",
        description: "Modern vibes and local culture.",
        city: "Bilbao", country: "Spain", continent: "Europe",
        cover: bilbao, cover2: bilbao2, price: 9.99, duration: 2, period: "summer",
        badge: "hidden_gems", spots: 22, level: "easy", vibes: ["culture", "food"],
        position: { lat: 43.2630, lng: -2.9350 },
        previewSpots: [
            { id: "1", title: "Guggenheim", position: { lat: 43.2687, lng: -2.9340 }, type: "activity" },
            { id: "2", title: "Old town", position: { lat: 43.2590, lng: -2.9240 }, type: "photo" },
            { id: "3", title: "Pintxos bar", position: { lat: 43.2600, lng: -2.9300 }, type: "food" }
        ]
    },

    {
        id: "london-4-days",
        title: "London in 4 days — iconic & local",
        description: "Landmarks + hidden areas.",
        city: "London", country: "United Kingdom", continent: "Europe",
        cover: london, cover2: london2, price: 15.99, duration: 4, period: "autumn",
        badge: "trending", spots: 36, level: "medium", vibes: ["culture", "food"],
        position: { lat: 51.5074, lng: -0.1278 },
        previewSpots: [
            { id: "1", title: "Big Ben", position: { lat: 51.5007, lng: -0.1246 }, type: "photo" },
            { id: "2", title: "Camden", position: { lat: 51.5416, lng: -0.1420 }, type: "activity" },
            { id: "3", title: "Pub", position: { lat: 51.5100, lng: -0.1300 }, type: "bar" }
        ]
    },

    {
        id: "paris-3-days",
        title: "Paris in 3 days — romance & food",
        description: "The perfect Paris experience.",
        city: "Paris", country: "France", continent: "Europe",
        cover: paris, cover2: paris2, price: 14.99, duration: 3, period: "spring",
        badge: "trending", spots: 34, level: "medium", vibes: ["food", "culture"],
        position: { lat: 48.8566, lng: 2.3522 },
        previewSpots: [
            { id: "1", title: "Eiffel Tower", position: { lat: 48.8584, lng: 2.2945 }, type: "photo" },
            { id: "2", title: "Louvre", position: { lat: 48.8606, lng: 2.3376 }, type: "activity" },
            { id: "3", title: "Montmartre", position: { lat: 48.8867, lng: 2.3431 }, type: "activity" }
        ]
    },

    {
        id: "lisbon-3-days",
        title: "Lisbon in 3 days — views & food",
        description: "Hills, trams and ocean vibes.",
        city: "Lisbon", country: "Portugal", continent: "Europe",
        cover: lisbon, cover2: lisbon2, price: 11.99, duration: 3, period: "summer",
        badge: "best_value", spots: 29, level: "medium", vibes: ["food", "relax"],
        position: { lat: 38.7223, lng: -9.1393 },
        previewSpots: [
            { id: "1", title: "Alfama", position: { lat: 38.7110, lng: -9.1300 }, type: "activity" },
            { id: "2", title: "Viewpoint", position: { lat: 38.7150, lng: -9.1350 }, type: "photo" },
            { id: "3", title: "Pastel de nata", position: { lat: 38.7130, lng: -9.1400 }, type: "food" }
        ]
    },

    {
        id: "newyork-5-days",
        title: "New York in 5 days — real NYC",
        description: "Manhattan, Brooklyn and local spots.",
        city: "New York", country: "USA", continent: "Americas",
        cover: newyork, cover2: newyork2, price: 19.99, duration: 5, period: "autumn",
        badge: "trending", spots: 40, level: "intense", vibes: ["food", "nightlife", "culture"],
        position: { lat: 40.7128, lng: -74.0060 },
        previewSpots: [
            { id: "1", title: "Times Square", position: { lat: 40.7580, lng: -73.9855 }, type: "photo" },
            { id: "2", title: "Brooklyn Bridge", position: { lat: 40.7061, lng: -73.9969 }, type: "activity" },
            { id: "3", title: "Williamsburg food", position: { lat: 40.7081, lng: -73.9571 }, type: "food" }
        ]
    }
];