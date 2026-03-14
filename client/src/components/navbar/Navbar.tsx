import { Button } from "../ui/button";
import { Map } from 'lucide-react';

export default function () {
    return (
        <div className="w-full h-[6svh] flex items-center justify-between">
            <h1
                className="text-3xl font-extrabold">
                Viat<span className="text-amber-300">ora</span>
            </h1>
            <Button
                className="h-full px-5">
                View itinerary
                <Map />
            </Button>
        </div>
    )
}
