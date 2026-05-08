import rome from "../assets/itineraries/rome_card.jpg";
import rome2 from "../assets/itineraries/rome_card_2.jpg";
import amsterdam from "../assets/itineraries/amsterdam_card.jpg";
import amsterdam2 from "../assets/itineraries/amsterdam_card_3.webp";
import budapest from "../assets/itineraries/budapest_card.jpg";
import budapest2 from "../assets/itineraries/budapest_card_2.jpg";
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
    cover: string, // TO UPDATE
    cover2: string, // TO UPDATE
    images?: string[],
    price: number,
    duration: number,
    period: string,
    badge: string,
    spots: number,
    position: { lat: number, lng: number },
    previewSpots: { id: string, title: string, position: { lat: number, lng: number }, type: string, adress?: string }[],
}

export const itineraries: ItineraryType[] = [
    // PORTUGAL //
    {
        id: "lisbon_by_mapswapp",
        title: "Lisbon, beyond the obvious",
        description: "Get lost in the hills, catch the right viewpoints at the right time, and move through Lisbon like someone who’s already been there.",
        city: "Lisbon",
        country: "Portugal",
        continent: "Europe",
        cover: lisbon, // TO UPDATE
        cover2: lisbon2, // TO UPDATE
        price: 9.99,
        duration: 3,
        period: "spring",
        badge: "best_value",
        spots: 21,
        position: { lat: 38.7223, lng: -9.1393 },
        previewSpots: [
            { id: "1", title: "Praça do Comércio", position: { lat: 38.70769, lng: -9.1365 }, type: "activity", adress: "1100-148 Lisbon, Portugal" },
            { id: "2", title: "Elevador de Santa Justa", position: { lat: 38.71213, lng: -9.13942 }, type: "activity", adress: "R. de Santa Justa, 1150-060 Lisboa, Portugal" },
            { id: "3", title: "Convento do Carmo", position: { lat: 38.71203, lng: -9.14061 }, type: "activity", adress: "Largo do Carmo, 1200-092 Lisboa, Portugal" },
            { id: "4", title: "Dear Breakfast", position: { lat: 38.70959, lng: -9.15128 }, type: "food", adress: "R. das Gaivotas 17, 1200-163 Lisboa, Portugal" }
        ]
    },
    // UNITED KINGDOM //
    {
        id: "london_by_mapswapp",
        title: "London, without the chaos",
        description: "Move through the city with a clear plan, hit the icons at the right time, and slip into the neighborhoods most people never reach.",
        city: "London",
        country: "United Kingdom",
        continent: "Europe",
        cover: london, // TO UPDATE
        cover2: london2, // TO UPDATE
        price: 18.99,
        duration: 4,
        period: "autumn",
        badge: "trending",
        spots: 42,
        position: { lat: 51.5074, lng: -0.1278 },
        previewSpots: [
            { id: "1", title: "Westminster Abbey", position: { lat: 51.49936, lng: -0.12729 }, type: "activity", adress: "Dean's Yard, London SW1P 3PA, United Kingdom" },
            { id: "2", title: "Houses of Parliament & Big Ben", position: { lat: 51.50072, lng: -0.12462 }, type: "activity", adress: "Londra SW1A 0AA, United Kingdom" },
            { id: "3", title: "Southbank Walk", position: { lat: 51.5036, lng: -0.1173 }, type: "activity", adress: "Belvedere Rd, London SE1, United Kingdom" },
            { id: "4", title: "Borough Market", position: { lat: 51.50558, lng: -0.09048 }, type: "food", adress: "London SE1 9AH, United Kingdom" }
        ]
    },
    // FRANCE //
    {
        id: "paris_by_mapswapp",
        title: "Paris is better when you wander",
        description: "A slower, better-paced way to experience Paris, mixing iconic places with quiet corners most visitors walk straight past.",
        city: "Paris",
        country: "France",
        continent: "Europe",
        cover: paris, // TO UPDATE
        cover2: paris2, // TO UPDATE
        price: 18.99,
        duration: 4,
        period: "spring",
        badge: "trending",
        spots: 40,
        position: { lat: 48.8566, lng: 2.3522 },
        previewSpots: [
            { id: "1", title: "Cathédrale de Notre-Dame", position: { lat: 48.85296, lng: 2.3499 }, type: "activity", adress: "6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France" },
            { id: "2", title: "Île Saint-Louis", position: { lat: 48.85155, lng: 2.35742 }, type: "activity", adress: "Île Saint-Louis, 75004 Paris, France" },
            { id: "3", title: "Square René Viviani", position: { lat: 48.85217, lng: 2.34759 }, type: "activity", adress: "2 Rue du Fouarre, 75005 Paris, France" },
            { id: "4", title: "Café de Flore", position: { lat: 48.85415, lng: 2.3326 }, type: "food", adress: "172 Bd Saint-Germain, 75006 Paris, France" }
        ]
    },
    // HUNGARY //
    {
        id: "budapest_by_mapswapp",
        title: "Budapest, slow mornings and late nights",
        description: "A balanced route through the city’s baths, viewpoints, ruin bars, and local corners that make Budapest feel alive after sunset.",
        city: "Budapest",
        country: "Hungary",
        continent: "Europe",
        cover: budapest, // TO UPDATE
        cover2: budapest2, // TO UPDATE
        price: 14.99,
        duration: 3,
        period: "autumn",
        badge: "best_value",
        spots: 33,
        position: { lat: 47.4979, lng: 19.0402 },
        previewSpots: [
            { id: "1", title: "Buda Castle", position: { lat: 47.4962, lng: 19.03956 }, type: "activity", adress: "Budapest, Szent György tér, 1014 Hungary" },
            { id: "2", title: "Fisherman’s Bastion", position: { lat: 47.50218, lng: 19.03478 }, type: "activity", adress: "Budapest, 1014 Hungary" },
            { id: "3", title: "Matthias Church", position: { lat: 47.50195, lng: 19.03416 }, type: "activity", adress: "Budapest, Szentháromság tér 2, 1014 Hungary" },
            { id: "4", title: "Ruszwurm Confectionery", position: { lat: 47.50122, lng: 19.033 }, type: "food", adress: "Budapest, Szentháromság u. 7, 1014 Hungary" }
        ]
    },
    // ITALY //
    {
        id: "rome_by_mapswapp",
        title: "Rome never really feels finished",
        description: "Ancient landmarks, quiet backstreets, sunset viewpoints, and the kind of places that make you slow down without realizing it.",
        city: "Rome",
        country: "Italy",
        continent: "Europe",
        cover: rome, // TO UPDATE
        cover2: rome2, // TO UPDATE
        price: 19.99,
        duration: 4,
        period: "spring",
        badge: "trending",
        spots: 44,
        position: { lat: 41.9028, lng: 12.4964 },
        previewSpots: [
            { id: "1", title: "Colosseo", position: { lat: 41.89021, lng: 12.49223 }, type: "activity", adress: "P.za del Colosseo, 1, 00184 Rome" },
            { id: "2", title: "Foro Romano", position: { lat: 41.89209, lng: 12.48643 }, type: "activity", adress: "00186 Rome" },
            { id: "3", title: "Via dei Fori Imperiali walk", position: { lat: 41.89275, lng: 12.488 }, type: "activity", adress: "Via dei Fori Imperiali, Rome" },
            { id: "4", title: "Ai Tre Scalini", position: { lat: 41.89628, lng: 12.49051 }, type: "food", adress: "Via Panisperna, 251, 00184 Rome" }
        ]
    },
    // NETHERLANDS //
    {
        id: "amsterdam_by_mapswapp",
        title: "Amsterdam, beyond the postcard",
        description: "A well-paced route through the city’s canals, creative corners, and everyday spots that make Amsterdam feel lived-in, not touristy.",
        city: "Amsterdam",
        country: "Netherlands",
        continent: "Europe",
        cover: amsterdam, // TO UPDATE
        cover2: amsterdam2, // TO UPDATE
        price: 14.99,
        duration: 3,
        period: "autumn",
        badge: "best_value",
        spots: 32,
        position: { lat: 52.3676, lng: 4.9041 },
        previewSpots: [
            { id: "1", title: "Dam Square", position: { lat: 52.37307, lng: 4.89264 }, type: "activity", adress: "Dam, 1012 Amsterdam, Netherlands" },
            { id: "2", title: "Begijnhof", position: { lat: 52.36962, lng: 4.89018 }, type: "activity", adress: "Begijnhof, 1012 Amsterdam, Netherlands" },
            { id: "3", title: "De Negen Straatjes", position: { lat: 52.37038, lng: 4.88605 }, type: "activity", adress: "Negen Straatjes, 1016 Amsterdam, Netherlands" },
            { id: "4", title: "Koffiespot", position: { lat: 52.3694, lng: 4.88059 }, type: "food", adress: "Elandsgracht 53, 1016 TN Amsterdam, Netherlands" }
        ]
    },
    // USA //
    {
        id: "newyork_by_mapswapp",
        title: "New York never sleep",
        description: "A clean flow through Manhattan and Brooklyn built to balance big landmarks, local energy, and moments where the city suddenly feels real.",
        city: "New York",
        country: "USA",
        continent: "Americas",
        cover: newyork, // TO UPDATE
        cover2: newyork2, // TO UPDATE
        price: 25.99, // TO UPDATE
        duration: 7, // TO UPDATE 
        period: "autumn", // TO UPDATE
        badge: "trending",
        spots: 59, // TO UPDATE
        position: { lat: 40.7128, lng: -74.0060 },
        previewSpots: [
            { id: "1", title: "Metropolitan Museum of Art", position: { lat: 40.77943, lng: -73.96324 }, type: "activity" }, // TO UPDATE
            { id: "2", title: "Central Park", position: { lat: 40.78255, lng: -73.96558 }, type: "activity" }, // TO UPDATE
            { id: "3", title: "Bow Bridge", position: { lat: 40.77575, lng: -73.97177 }, type: "photo" } // TO UPDATE
        ]
    }
];