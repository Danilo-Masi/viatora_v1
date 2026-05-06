import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { Star, Utensils } from "lucide-react";
import { renderToString } from "react-dom/server";
import { useMemo } from "react";

const createStarIcon = () =>
    new L.DivIcon({
        html: `
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-xs font-bold shadow-md border-2 border-white">
                ${renderToString(<Star size={12} color="white" fill="white" />)}
            </div>
        `,
        className: "",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
    })

const createFoodIcon = () =>
    new L.DivIcon({
        html: `
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs font-bold shadow-md border-2 border-white">
                ${renderToString(<Utensils size={12} color="white" fill="white" />)}
            </div>
        `,
        className: "",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
    })

export default function PreviewMap({ itinerary }: { itinerary: any }) {

    const center: any = useMemo(
        () => [itinerary.position.lat, itinerary.position.lng],
        [itinerary.position.lat, itinerary.position.lng]
    );

    const icons = useMemo(() => ({
        star: createStarIcon(),
        food: createFoodIcon(),
    }), []);

    const previewSpots = itinerary.previewSpots.slice(0, 8);

    return (
        <div className="w-full h-[30svh] relative rounded-xl overflow-hidden border border-zinc-200 shadow-lg">

            <MapContainer
                center={center}
                zoom={12}
                zoomControl={false}
                dragging={false}
                doubleClickZoom={false}
                scrollWheelZoom={false}
                touchZoom={false}
                className="w-full h-full z-10">

                <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />

                {previewSpots.map((spot: any) => (
                    <Marker
                        key={spot.id}
                        position={[spot.position.lat, spot.position.lng]}
                        icon={spot.type === "food" ? icons.food : icons.star}
                    />
                ))}
            </MapContainer>

        </div>
    );
}