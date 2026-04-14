import { type Dispatch, type SetStateAction } from "react";
import { useAppContext } from "@/context/AppContext";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "../ui/button"
import { Search, MapPin, CalendarDays, Sun, Loader } from "lucide-react"
// Data
import { categories, destinations, durations, periods } from "@/data/searchfilters";

function DestinationSelect({ value, onChange }: any) {
    return (
        <Select value={value} onValueChange={onChange}>
            {/* TRIGGER */}
            <SelectTrigger className="w-full border border-zinc-300 shadow-lg text-sm font-medium flex items-center justify-between gap-2 px-5 py-8 cursor-pointer">
                <MapPin className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="Where to?" />
            </SelectTrigger>
            {/* CONTENT */}
            <SelectContent className="py-5 px-3 w-[calc(100%-24px)] rounded-xl" position="popper">
                {/* Category */}
                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mb-1">
                        Explore
                    </SelectLabel>
                    {categories.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.emoji}</span>
                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
                {/* Popular */}
                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mb-1">
                        Popular
                    </SelectLabel>
                    {destinations.popular.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.flag}</span>
                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
                {/* Europe */}
                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mt-3 mb-1">
                        Europe
                    </SelectLabel>
                    {destinations.europe.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.flag}</span>
                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
                {/* America */}
                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mt-3 mb-1">
                        America
                    </SelectLabel>
                    {destinations.america.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.flag}</span>
                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

function DurationSelect({ value, onChange }: any) {
    return (
        <Select value={value} onValueChange={onChange}>
            {/* TRIGGER */}
            <SelectTrigger className="w-full border border-zinc-300 shadow-lg text-sm font-medium flex items-center gap-2 px-5 py-8 cursor-pointer">
                <CalendarDays className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="Duration" />
            </SelectTrigger>
            {/* CONTENT */}
            <SelectContent className="py-5 px-3 w-[calc(100%-24px)] rounded-xl" position="popper">
                {durations.map((d) => (
                    <SelectItem key={d.value} value={d.value} className="rounded-lg px-3 py-2 hover:bg-blue-50">
                        {d.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

function PeriodSelect({ value, onChange }: any) {
    return (
        <Select value={value} onValueChange={onChange}>
            {/* TRIGGER */}
            <SelectTrigger className="w-full border border-zinc-300 shadow-lg text-sm font-medium flex items-center gap-2 px-5 py-8 cursor-pointer">
                <Sun className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="When?" />
            </SelectTrigger>
            {/* CONTENT */}
            <SelectContent className="py-5 px-3 w-[calc(100%-24px)] rounded-xl" position="popper">
                {periods.map((p) => (
                    <SelectItem key={p.value} value={p.value} className="rounded-lg px-3 py-2 hover:bg-blue-50">
                        <div className="flex items-center gap-2">
                            <span>{p.emoji}</span>
                            <span>{p.label}</span>
                        </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

interface SearchBarProps {
    isExploreLoading: boolean;
    setExploreLoading: Dispatch<SetStateAction<boolean>>;
}

export default function SearchBarMobile({ isExploreLoading, setExploreLoading }: SearchBarProps) {
    const { setFilters, destination, setDestination, duration, setDuration, period, setPeriod, badge, setBadge } = useAppContext();

    const handleDestinationChange = (value: string) => {
        const isCategory = ["trending", "new", "best_value", "hidden_gems"].includes(value)
        if (isCategory) {
            setBadge(value)
            setDestination("")
        } else {
            setDestination(value)
            setBadge("")
        }
    }

    // Function to set filters
    const handleSearch = () => {
        setExploreLoading(true)
        setFilters({
            destination,
            duration,
            period,
            badge,
        })
        setExploreLoading(false);
    }

    return (
        <div className="w-full h-auto min-h-[50svh] flex flex-col items-start justify-start gap-6">
            <DestinationSelect value={destination || badge} onChange={handleDestinationChange} />
            <DurationSelect value={duration} onChange={setDuration} />
            <PeriodSelect value={period} onChange={setPeriod} />
            <Button
                onClick={handleSearch}
                disabled={isExploreLoading}
                className="md:ml-2 w-full md:w-auto px-6 py-5 rounded-xl bg-blue-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition flex items-center justify-center gap-2">
                {isExploreLoading ? (
                    <>
                        Loading
                        <Loader className="w-4 h-4 animate-spin" />
                    </>
                ) : (
                    <>
                        Explore
                        <Search className="w-4 h-4" />
                    </>
                )}
            </Button>
        </div>
    )
}
