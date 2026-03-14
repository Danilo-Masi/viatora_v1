import pointed_map from "../../assets/pointed-map.png";

export default function ItineraryCard() {
    return (
        <div className="w-full md:w-[calc(33%-10px)] h-[60svh] border border-zinc-600 rounded-xl relative">
            <img src={pointed_map} className="w-full h-full object-cover rounded-xl" />
            <div className="w-full h-full absolute bottom-0 left-0 rounded-b-xl bg-linear-to-t from-black via-black/50 to-transparent" />
        </div>
    )
}
