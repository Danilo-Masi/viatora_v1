import type { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Compass, Flag, Heart } from "lucide-react"
import ReactCountryFlag from "react-country-flag"
import { useNavigate } from "react-router-dom";
import { useAppContext } from "@/context/AppContext";

interface StatusDialogProps {
    selectedCountry: { name: string; code: string };
    countriesState: { [key: string]: string };
    setCountriesState: Dispatch<SetStateAction<any>>;
}

export default function StatusDialog({ selectedCountry, setCountriesState, countriesState }: StatusDialogProps) {
    const navigate = useNavigate();
    const { isStateDialogOpen, setStateDialogOpen } = useAppContext();
    const isVisited = countriesState[selectedCountry.code] === "visited";
    const isWishlist = countriesState[selectedCountry.code] === "wishlist";

    function handleSetStatus(status: "visited" | "wishlist") {
        setCountriesState((prev: any) => {
            const currentStatus = prev?.[selectedCountry.code];
            return {
                ...prev,
                [selectedCountry.code]:
                    currentStatus === status ? null : status,
            };
        });
        setStateDialogOpen(false);
    }

    const handleExpolore = () => {
        navigate("/");
    }

    return (
        <Dialog open={isStateDialogOpen} onOpenChange={setStateDialogOpen}>
            <DialogContent className="z-50 max-w-md p-6" showCloseButton={false}>

                {/* HEADER */}
                <DialogHeader >
                    <DialogTitle className="text-2xl font-bold text-balance flex items-center justify-start gap-2 w-full">
                        <ReactCountryFlag countryCode={selectedCountry.code} /> {selectedCountry.name}
                    </DialogTitle>
                    <DialogDescription className="text-sm text-zinc-500">
                        Have you been here or planning to go?
                    </DialogDescription>
                </DialogHeader>

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
                    <Button
                        onClick={handleExpolore}
                        className="w-full gap-2 py-6 rounded-xl bg-zinc-900 text-white font-semibold transition-all">
                        <Compass className="w-5 h-5" />
                        Explore {selectedCountry.name} <ReactCountryFlag countryCode={selectedCountry.code} />
                    </Button>

                </div>

            </DialogContent>
        </Dialog>
    )
}