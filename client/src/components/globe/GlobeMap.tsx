import { MapContainer, TileLayer, GeoJSON, Pane } from 'react-leaflet'
import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from 'react';

interface GlobeMapProps {
    countriesState: { [key: string]: string };
    setDialogOpen: Dispatch<SetStateAction<boolean>>;
    setSelectedCountry: Dispatch<SetStateAction<{ name: string; code: string }>>;
}

export default function GlobeMap({ countriesState, setDialogOpen, setSelectedCountry }: GlobeMapProps) {
    const isMobile = window.innerWidth < 768;
    const geoJsonRef = useRef<any>(null);
    const [geoData, setGeoData] = useState<any>(null);

    // Function to load GeoJSON data for countries
    const loadGeoData = () => {
        fetch("/countries.geojson")
            .then((res) => res.json())
            .then((data) => setGeoData(data));
    };

    useEffect(() => {
        loadGeoData();
    }, []);

    function getColor(status: string) {
        switch (status) {
            case "visited":
                return "#f59e0b"; // giallo
            case "wishlist":
                return "#3b82f6"; // blu
            default:
                return "#e5e7eb"; // grigio
        }
    }

    function style(feature: any) {
        const iso = "ISO3166-1-Alpha-2";
        const code = feature.properties[iso];

        return {
            fillColor: getColor(countriesState[code]),
            weight: 1.5,
            color: "#ffffff",
            fillOpacity: 0.4,
        };
    }

    function onEachFeature(feature: any, layer: any) {
        const iso = "ISO3166-1-Alpha-2";
        const name = feature.properties.name;
        const code = feature.properties[iso];

        layer.on({
            click: () => {
                setSelectedCountry({ name, code });
                setDialogOpen(true);
            },

            mouseover: (e: any) => {
                const layer = e.target;

                layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    color: "#000",
                });

                layer.bringToFront();
            },

            mouseout: (e: any) => {
                geoJsonRef.current.resetStyle(e.target); // 🔥 FIX VERO
            },
        });
    }

    return (
        <div className='w-full h-full z-0'>
            <MapContainer
                center={[20, 0]}
                zoomControl={isMobile ? false : true}
                zoom={3}
                minZoom={3}
                maxZoom={8}
                maxBounds={[
                    [-90, -180],
                    [90, 180],
                ]}
                maxBoundsViscosity={1.0}
                scrollWheelZoom={false}
                className="w-full h-full z-0">

                {/* Panes */}
                <Pane name="base" style={{ zIndex: 200 }} />
                <Pane name="countries" style={{ zIndex: 400 }} />
                <Pane name="labels" style={{ zIndex: 600, pointerEvents: "none" }} />

                {/* Base map */}
                <TileLayer
                    pane='base'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />

                {/* Countries */}
                {geoData && (
                    <GeoJSON
                        pane='countries'
                        ref={geoJsonRef}
                        key={JSON.stringify(countriesState)}
                        data={geoData}
                        style={style}
                        onEachFeature={onEachFeature}
                    />
                )}

                {/* Labels */}
                <TileLayer
                    pane='labels'
                    url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png" />

            </MapContainer>
        </div>
    )
}
