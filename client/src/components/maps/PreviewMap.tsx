import { MapContainer, TileLayer, Marker } from "react-leaflet"
import L from "leaflet"

// Custom marker (numero)
const createNumberIcon = (number: number) =>
    new L.DivIcon({
        html: `
            <div class="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-xs font-bold shadow-md border-2 border-white">
                ${number}
            </div>
        `,
        className: "",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
    })


export default function PreviewMap({ itinerary }: { itinerary: any }) {
    return (
        <div className="w-full h-[30svh] relative rounded-xl overflow-hidden border border-zinc-200 shadow-lg">

            {/* MAP */}
            <MapContainer
                center={[itinerary.position.lat, itinerary.position.lng]}
                zoom={12}
                zoomControl={false}
                dragging={false}
                className="w-full h-full z-10">

                <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />

                {/* MARKERS DINAMICI */}
                {itinerary.previewSpots.map((spot: any, i: number) => (
                    <Marker
                        key={spot.id}
                        position={[spot.position.lat, spot.position.lng]}
                        icon={createNumberIcon(i + 1)} />
                ))}

            </MapContainer>

        </div>
    )
}