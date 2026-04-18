import { useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { CountryName } from "react-countryname-flag";
import ReactCountryFlag from "react-country-flag";
import { Separator } from "../ui/separator";
import { Dialog, DialogContent } from "../ui/dialog";
import DataVisualization from "./DataVisualization";
import ToggleButtons from "./ToggleButtons";
import { useAnalytics } from "@/lib/useAnalytics";

export default function AnalyticsDialog({ countriesState }: { countriesState: Record<string, string> }) {

    const [selectedType, setSelectedType] = useState<"visited" | "wishlist">("visited");
    const { isAnalyticsDialogOpen, setAnalyticsDialogOpen } = useAppContext();
    const { grouped, selectedCount, percentage, worldRegionsVisited, continentsData } = useAnalytics(countriesState, selectedType);

    const colorBar = selectedType === "visited" ? "bg-amber-400" : "bg-blue-400";

    return (
        <Dialog open={isAnalyticsDialogOpen} onOpenChange={setAnalyticsDialogOpen}>
            <DialogContent
                showCloseButton={false}
                className="z-50 max-w-md max-h-[90svh] overflow-y-scroll p-6 flex flex-col gap-10">

                {/* HEADER STATS */}
                <section className="w-full flex items-center justify-between">
                    <DataVisualization
                        data={`${selectedCount}/195`}
                        info="countries" />
                    <Separator orientation="vertical" className="h-10" />
                    <DataVisualization
                        data={`${percentage}%`}
                        info="of the world" />
                    <Separator orientation="vertical" className="h-10" />
                    <DataVisualization
                        data={`${worldRegionsVisited}/5`}
                        info="regions" />
                </section>

                {/* TOGGLE */}
                <div className="w-full flex justify-center">
                    <ToggleButtons value={selectedType} onChange={setSelectedType} />
                </div>

                {/* PROGRESS CONTINENTS */}
                <section className="flex flex-col gap-4">
                    {continentsData.map(({ continent, visited, total }) => (
                        <div key={continent} className="flex flex-col gap-1">
                            {/* Text */}
                            <div className="flex justify-between text-xs text-zinc-500">
                                <span>{continent}</span>
                                <span>{visited}/{total}</span>
                            </div>
                            {/* Progress bar */}
                            <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all ${colorBar}`}
                                    style={{ width: `${total ? (visited / total) * 100 : 0}%` }} />
                            </div>
                        </div>
                    ))}
                </section>

                {/* LIST */}
                <section className="w-full h-[35svh] overflow-y-auto flex flex-col gap-4">
                    {/* Empty list */}
                    {Object.keys(grouped).length === 0 && (
                        <p className="text-sm text-zinc-400 text-center py-10">
                            No {selectedType} countries yet
                        </p>
                    )}
                    {/* List divided by continent */}
                    {Object.entries(grouped).map(([continent, codes]) => (
                        <div key={continent} className="flex flex-col gap-2">
                            <h2 className="text-sm font-semibold text-zinc-800">
                                {continent}
                            </h2>
                            <div className="flex flex-col gap-2">
                                {codes.map((code) => (
                                    <div
                                        key={code}
                                        className="px-3 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 transition flex items-center gap-2">
                                        <ReactCountryFlag countryCode={code} />
                                        <CountryName countryCode={code} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>

            </DialogContent>
        </Dialog>
    );
}