import { Check, Compass, Flag, Heart, X } from "lucide-react"
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import type { Dispatch, SetStateAction } from "react";
import ReactCountryFlag from "react-country-flag"
import { Button } from "../ui/button";

interface StatusDialogProps {
    dialogOpen: boolean;
    setDialogOpen: Dispatch<SetStateAction<boolean>>;
    selectedCountry: { name: string; code: string };
    setCountriesState: Dispatch<SetStateAction<any>>;
    countriesState: { [key: string]: string };
}

export function StatusDialog({ dialogOpen, setDialogOpen, selectedCountry, setCountriesState, countriesState }: StatusDialogProps) {

    const isVisited = countriesState[selectedCountry.code] === "visited";
    const isWishlist = countriesState[selectedCountry.code] === "wishlist";

    function handleSetStatus(status: "visited" | "wishlist") {
        setCountriesState((prev: any) => ({
            ...prev,
            [selectedCountry.code]: status,
        }));
        setDialogOpen(false);
    }

    return (
        <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <AlertDialogContent className="z-50 max-w-md p-6">

                {/* HEADER */}
                <AlertDialogHeader >
                    <AlertDialogTitle className="text-2xl font-bold text-balance flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            <ReactCountryFlag countryCode={selectedCountry.code} /> {selectedCountry.name}
                        </div>
                        <span
                            onClick={() => setDialogOpen(false)}
                            className="p-2 bg-zinc-200 rounded-lg cursor-pointer">
                            <X className="w-4 h-4 text-zinc-400" />
                        </span>
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-sm text-zinc-500">
                        Have you been here or planning to go?
                    </AlertDialogDescription>
                </AlertDialogHeader>

                {/* OPTIONS */}
                <div className="flex flex-wrap gap-4 mt-4">

                    {/* VISITED */}
                    <div
                        onClick={() => handleSetStatus("visited")}
                        className={`w-full flex items-center justify-between p-5 rounded-2xl border border-amber-200 active:scale-[0.98] transition-all cursor-pointer bg-linear-to-r from-amber-50 to-transparent`}>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center rounded-full p-2 bg-amber-100">
                                <Flag className="text-amber-500 w-5 h-5" fill={isVisited ? "currentColor" : "none"} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-lg text-black font-semibold">Visited</h1>
                                <h3 className="text-sm text-zinc-500 font-light italic">I’ve already been here</h3>
                            </div>
                        </div>
                    </div>

                    {/* WISHLIST */}
                    <div
                        onClick={() => handleSetStatus("wishlist")}
                        className={`w-full flex items-center justify-between p-5 rounded-2xl border border-blue-200 active:scale-[0.98] transition-all cursor-pointer bg-linear-to-r from-blue-50 to-transparent `}>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center rounded-full p-2 bg-blue-100">
                                <Heart className="text-blue-500 w-5 h-5" fill={isWishlist ? "currentColor" : "none"} />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-lg text-black font-semibold">Want to go</h1>
                                <h3 className="text-sm text-zinc-500 font-light italic">Add to your wishlist</h3>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full gap-2 py-6 rounded-xl bg-zinc-900 text-white font-semibold transition-all">
                        <Compass className="w-5 h-5" />
                        Explore itineraries
                    </Button>

                </div>

            </AlertDialogContent>
        </AlertDialog>
    )
}