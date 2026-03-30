import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import { useEffect, useState } from 'react';

export default function Globe() {

    const [countriesState, setCountriesState] = useState<{ [key: string]: string }>({});
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
        const code = feature.properties.ISO_A2;

        return {
            fillColor: getColor(countriesState[code]),
            weight: 1.5,
            color: "#ffffff",
            fillOpacity: 0.7,
        };
    }

    function onEachFeature(feature: any, layer: any) {
        layer.on({
            mouseover: (e: any) => {
                e.target.setStyle({
                    weight: 2,
                    fillOpacity: 0.9,
                });
            },
            mouseout: (e: any) => {
                e.target.setStyle({
                    weight: 1.5,
                    fillOpacity: 0.7,
                });
            },
        });
    }

    return (
        <div className="w-full h-screen relative">
            <MapContainer
                center={[20, 0]}
                zoom={3}
                minZoom={3}
                maxZoom={8}
                maxBounds={[
                    [-90, -180],
                    [90, 180],
                ]}
                maxBoundsViscosity={1.0}
                scrollWheelZoom={false}
                className="w-full h-full">
                {geoData && (
                    <GeoJSON
                        key={JSON.stringify(countriesState)}
                        data={geoData}
                        style={style}
                        onEachFeature={onEachFeature}
                    />
                )}
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
                />

                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
                />
            </MapContainer>
        </div>
    )
}