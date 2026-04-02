import AnalyticsDialog from "@/components/globe/AnalyticsDialog";
import AnalyticsDialogMobile from "@/components/globe/AnalyticsDialogMobile";
import GlobeMap from "@/components/globe/GlobeMap";
import { StatusDialog } from "@/components/globe/StatusDialog";
import StatusDialogMobile from "@/components/globe/StatusDialogMobile";
import { Button } from "@/components/ui/button";
import { Globe2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function Globe() {
    const isMobile = window.innerWidth < 768;
    // State for country status dialog
    const [dialogOpen, setDialogOpen] = useState(false);
    // State for selected country in the dialog
    const [selectedCountry, setSelectedCountry] = useState<{ name: string; code: string }>({ name: "", code: "" });
    // Save countries state in localStorage to persist it across page reloads
    const [countriesState, setCountriesState] = useState<{ [key: string]: string }>(() => {
        const saved = localStorage.getItem("countriesState");
        return saved ? JSON.parse(saved) : {};
    });
    // Analytics dialog state
    const [isAnalyticsOpen, setAnalyticsOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("countriesState", JSON.stringify(countriesState));
    }, [countriesState]);

    return (
        <div className="w-full h-svh relative">
            <GlobeMap
                countriesState={countriesState}
                setDialogOpen={setDialogOpen}
                setSelectedCountry={setSelectedCountry}
            />
            {!isMobile
                ? <StatusDialog
                    dialogOpen={dialogOpen}
                    setDialogOpen={setDialogOpen}
                    selectedCountry={selectedCountry}
                    setCountriesState={setCountriesState}
                    countriesState={countriesState}
                />
                : <StatusDialogMobile
                    dialogOpen={dialogOpen}
                    setDialogOpen={setDialogOpen}
                    selectedCountry={selectedCountry}
                    setCountriesState={setCountriesState}
                    countriesState={countriesState}
                />
            }

            <div
                onClick={() => setAnalyticsOpen(true)}
                className="absolute bottom-5 right-5 p-2.5 flex items-center justify-center cursor-pointer bg-blue-400 rounded-full">
                <Globe2 className="w-7 h-7" color="white" />
            </div>


            {!isMobile
                ? <AnalyticsDialog
                    isAnalyticsOpen={isAnalyticsOpen}
                    setAnalyticsOpen={setAnalyticsOpen}
                />
                : <AnalyticsDialogMobile
                    isAnalyticsOpen={isAnalyticsOpen}
                    setAnalyticsOpen={setAnalyticsOpen}
                />
            }

        </div>
    )
}