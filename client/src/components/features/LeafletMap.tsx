import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"
import L from "leaflet"
import { useEffect } from "react"
// Data
import { mapData } from "@/data/mapData"

const createIcon = (type: string, label?: string,) => {
    let bg = "#ef4444"

    if (type === "food") bg = "#f97316"
    if (type === "bar") bg = "#1e3a8a"
    if (type === "hotel") bg = "#7c3aed"
    if (type === "photo") bg = "#f59e0b"

    return L.divIcon({
        html: `
      <div style="
        width:32px;
        height:32px;
        border-radius:999px;
        background:${bg};
        display:flex;
        align-items:center;
        justify-content:center;
        color:white;
        font-size:12px;
        font-weight:600;
        box-shadow:0 4px 10px rgba(0,0,0,0.2);
      ">
        ${label || "B"}
      </div>
    `,
        className: "",
    })
}

export default function LeafletMap({ daySelected }: { daySelected: number }) {
    const markers = mapData[daySelected as 1 | 2 | 3]

    function FitBounds({ markers }: any) {
        const map = useMap()
        useEffect(() => {
            const bounds = L.latLngBounds(markers.map((m: any) => m.coords))
            map.fitBounds(bounds, { padding: [50, 50] })
        }, [markers])
        return null
    }

    return (
        <MapContainer
            center={[40.7128, -74.0060]}
            zoom={15}
            scrollWheelZoom={true}
            zoomControl={false}
            className="w-full h-full rounded-t-[3rem] absolute top-0 left-0 z-0">

            <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />

            <FitBounds markers={markers} />

            {markers.map((m, i) => (
                <Marker
                    key={i}
                    position={m.coords as [number, number]}
                    icon={createIcon(m.type, m.label)} />
            ))}

        </MapContainer>
    )
}