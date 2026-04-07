import { Button } from "../ui/button";

export default function () {
    return (
        <div className="w-[95%] md:w-5/6 h-min flex items-center justify-start z-10">
            {/* LEFT */}
            <div className="w-1/2 h-full flex items-center justify-start">
                <h1 className="text-2xl md:text-3xl font-extrabold text-white">
                    <span className="text-blue-500">Map</span>swapp
                </h1>
            </div>
            {/* RIGHT */}
            <div className="w-1/2 h-full flex items-center justify-end gap-3">
                <Button className="p-6 text-base font-semibold rounded-xl bg-blue-500 text-white shadow-lg hover:scale-95 active:scale-95 transition">
                    🔍 Explore
                </Button>
            </div>
        </div>
    )
}
