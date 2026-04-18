import { useEffect, useMemo, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { useNavigate } from "react-router-dom";
import useIsMobile from "@/lib/screenWidth";
import { ChevronLeft, Earth } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlobeMap from "@/components/globe/GlobeMap";
import StatusDialog from "@/components/globe/StatusDialog";
import StatusDialogMobile from "@/components/globe/StatusDialogMobile";
import AnalyticsDialog from "@/components/globe/AnalyticsDialog";
import AnalyticsDialogMobile from "@/components/globe/AnalyticsDialogMobile";

export default function Globe() {
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    const { setAnalyticsDialogOpen } = useAppContext();

    // State for selected country in the dialog
    const [selectedCountry, setSelectedCountry] = useState<{ name: string; code: string }>({
        name: "",
        code: ""
    });

    // Save countries state in localStorage to persist it across page reloads
    const [countriesState, setCountriesState] = useState<{ [key: string]: string }>(() => {
        const saved = localStorage.getItem("countriesState");
        return saved ? JSON.parse(saved) : {};
    });

    // Update localStorage whenever countriesState changes
    useEffect(() => {
        localStorage.setItem("countriesState", JSON.stringify(countriesState));
    }, [countriesState]);

    const visitedCount = useMemo(
        () => Object.values(countriesState).filter(v => v === "visited").length,
        [countriesState]
    );

    return (
        <div className="w-full h-svh relative overflow-hidden">

            {/* FLOATING BACK BUTTON */}
            <Button
                onClick={() => navigate("/", { replace: true })}
                className="absolute top-5 left-5 z-50 py-5">
                <ChevronLeft className="w-5 h-5" />Go Back
            </Button>

            {/* MAP */}
            <GlobeMap
                countriesState={countriesState}
                setSelectedCountry={setSelectedCountry}
            />

            {/* FLOATING ACTION BUTTONS */}
            <div className="w-min h-min flex flex-col items-center gap-3 absolute bottom-5 right-5 z-50">
                <div className="flex flex-col gap-1 items-center">
                    <Button
                        size="icon"
                        onClick={() => setAnalyticsDialogOpen(true)}
                        className="p-5 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg hover:scale-105 active:scale-95 transition cursor-pointer">
                        <Earth size={20} />
                    </Button>
                    <div className="w-max px-3 py-1 rounded-full bg-white shadow text-xs text-zinc-600">
                        🌍 {visitedCount} visited
                    </div>
                </div>
            </div>

            {/* COUNTRY STATUS DIALOG */}
            {!isMobile
                ? <StatusDialog
                    selectedCountry={selectedCountry}
                    setCountriesState={setCountriesState}
                    countriesState={countriesState} />
                : <StatusDialogMobile
                    selectedCountry={selectedCountry}
                    setCountriesState={setCountriesState}
                    countriesState={countriesState} />
            }

            {/* ANALTYCS DIALOG */}
            {!isMobile
                ? <AnalyticsDialog
                    countriesState={countriesState} />
                : <AnalyticsDialogMobile
                    countriesState={countriesState} />
            }

        </div>
    )
}