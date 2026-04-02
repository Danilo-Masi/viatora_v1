import { Flag, Heart } from "lucide-react";
import { AlertDialog, AlertDialogContent } from "../ui/alert-dialog";
import { Separator } from "../ui/separator";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag"
import { CountryName } from 'react-countryname-flag'

interface AnalyticsDialogProps {
    isAnalyticsOpen: boolean;
    setAnalyticsOpen: (open: boolean) => void;
}

interface DataVisualizationProps {
    data: string;
    info: string;
}

{/* Mapping country codes to continents // TO REPLACE // */ }
const countryToContinent: Record<string, string> = {
    IT: "Europe",
    FR: "Europe",
    ES: "Europe",
    US: "North America",
    BR: "South America",
    JP: "Asia",
    AU: "Oceania",
    ZA: "Africa",
};

{/* Data Visualization Component */ }
function DataVisualization({ data, info }: DataVisualizationProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-sm text-zinc-800 font-semibold">{data}</h1>
            <h3 className="text-xs text-zinc-400 text-balance">{info}</h3>
        </div>
    )
}

{/* Toggle Button Component */ }
function ToggleButton({ value, onChange }: any) {
    return (
        <ToggleGroup
            variant="outline"
            type="single"
            defaultValue="visited"
            size="lg"
            value={value}
            onValueChange={(val) => val && onChange(val)}>
            <ToggleGroupItem value="visited" aria-label="Toggle visited" className="flex gap-2 cursor-pointer">
                <Flag fill="currentColor" />Visited
            </ToggleGroupItem>
            <ToggleGroupItem value="wishlist" aria-label="Toggle wishlist" className="flex gap-2 cursor-pointer">
                <Heart fill="currentColor" /> Wishlist
            </ToggleGroupItem>
        </ToggleGroup>
    )
}

export default function AnalyticsDialog({ isAnalyticsOpen, setAnalyticsOpen }: AnalyticsDialogProps) {

    const [countriesState, setCountriesState] = useState<any>({});
    const [selectedType, setSelectedType] = useState<"visited" | "wishlist">("visited");

    useEffect(() => {
        const saved = localStorage.getItem("countriesState");
        if (saved) {
            setCountriesState(JSON.parse(saved));
        }
    }, []);

    {/* Group countries by continent based on their status */ }
    function groupCountries() {
        const grouped: Record<string, string[]> = {};

        Object.entries(countriesState).forEach(([code, status]) => {
            if (status !== selectedType) return;

            const continent = countryToContinent[code] || "Other";

            if (!grouped[continent]) {
                grouped[continent] = [];
            }

            grouped[continent].push(code);
        });

        return grouped;
    }

    const grouped = groupCountries();

    const visited = Object.values(countriesState).filter(v => v === "visited").length;
    const percentage = Math.round((visited / 195) * 100);
    const worldRegion = Object.keys(grouped).length;

    return (
        <AlertDialog open={isAnalyticsOpen} onOpenChange={setAnalyticsOpen}>
            <AlertDialogContent className="z-50 max-w-md p-6 flex flex-col gap-6">

                {/* Data Visualization Section */}
                <section className="w-full min-h-[5svh] flex items-start justify-between">
                    <DataVisualization data={`${visited}/195`} info="countries" />
                    <Separator orientation="vertical" className="h-[5svh]" />
                    <DataVisualization data={`${percentage}%`} info="of the world" />
                    <Separator orientation="vertical" className="h-[5svh]" />
                    <DataVisualization data={worldRegion.toString()} info="world region" />
                </section>

                {/* Toggle Button Section */}
                <section className="w-full h-auto min-h-[5svh] flex items-center justify-center">
                    <ToggleButton value={selectedType} onChange={setSelectedType} />
                </section>

                {/* Countries List Section */}
                <section className="w-full h-[40svh] overflow-y-auto flex flex-col items-start justify-start gap-4">
                    {/* No countries */}
                    {Object.keys(grouped).length === 0 && (
                        <p className="w-full h-full flex items-center justify-center text-sm text-zinc-400">
                            No countries yet
                        </p>
                    )}
                    {/* Countries */}
                    {Object.entries(grouped).map(([continent, countries]) => (
                        <div key={continent} className="flex flex-col gap-2">
                            <h2 className="text-sm font-semibold text-zinc-800">
                                {continent}
                            </h2>
                            <div className="flex flex-col gap-3">
                                {countries.map((code) => (
                                    <h3
                                        key={code}
                                        className="px-3 py-1 rounded-lg bg-zinc-100 text-sm flex items-center gap-2">
                                        <ReactCountryFlag countryCode={code} />
                                        <CountryName countryCode={code} />
                                    </h3>
                                ))}
                            </div>

                        </div>
                    ))}
                </section>

            </AlertDialogContent>
        </AlertDialog>
    )
}
