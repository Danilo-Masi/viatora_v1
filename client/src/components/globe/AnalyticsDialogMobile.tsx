import { useState } from "react";
import { Drawer, DrawerContent } from "../ui/drawer";
import { Separator } from "../ui/separator";
import DataVisualization from "./DataVisualization";
import ToggleButtons from "./ToggleButtons";
import ReactCountryFlag from "react-country-flag";
import { CountryName } from "react-countryname-flag";
import { useAppContext } from "@/context/AppContext";
import { useAnalytics } from "@/lib/useAnalytics";

export default function AnalyticsDialogMobile({ countriesState }: { countriesState: Record<string, string> }) {

  const [selectedType, setSelectedType] = useState<"visited" | "wishlist">("visited");
  const { isAnalyticsDialogOpen, setAnalyticsDialogOpen } = useAppContext();
  const { grouped, selectedCount, percentage, worldRegionsVisited, continentsData } = useAnalytics(countriesState, selectedType);

  const colorBar = selectedType === "visited" ? "bg-amber-400" : "bg-blue-400";

  return (
    <Drawer open={isAnalyticsDialogOpen} onOpenChange={setAnalyticsDialogOpen}>
      <DrawerContent className="p-4 pt-0 z-50 flex flex-col gap-8">

        {/* HEADER STATS */}
        <section className="flex justify-between items-center">
          <DataVisualization
            data={`${selectedCount}/195`}
            info="countries" />
          <Separator orientation="vertical" className="h-6" />
          <DataVisualization
            data={`${percentage}%`}
            info="of the world" />
          <Separator orientation="vertical" className="h-6" />
          <DataVisualization
            data={`${worldRegionsVisited}/5`}
            info="regions" />
        </section>

        {/* TOGGLE */}
        <section className="w-full flex justify-center">
          <ToggleButtons value={selectedType} onChange={setSelectedType} />
        </section>

        {/* LIST */}
        <section className="flex flex-col gap-8 max-h-[50svh] overflow-y-auto pb-3 no-scrollbar">
          {/* Empty list */}
          {Object.keys(grouped).length === 0 && (
            <p className="text-center text-sm text-zinc-400 py-10">
              No {selectedType} countries yet
            </p>
          )}
          {/* List divided by continent */}
          {continentsData.map(({ continent, visited, total }) => {
            const codes = grouped[continent];
            if (!codes) return null;

            const progress = total ? (visited / total) * 100 : 0;

            return (
              <div key={continent} className="flex flex-col gap-5">
                {/* Header continent */}
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center">
                    <h2 className="text-sm font-semibold text-zinc-800">
                      {continent}
                    </h2>
                    <span className="text-xs text-zinc-500">
                      {visited}/{total}
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all ${colorBar}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                {/* Countries */}
                <div className="flex flex-wrap gap-2">
                  {codes.map((code) => (
                    <div
                      key={code}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-xs">
                      <ReactCountryFlag countryCode={code} />
                      <CountryName countryCode={code} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

        </section>

      </DrawerContent>
    </Drawer>
  );
}