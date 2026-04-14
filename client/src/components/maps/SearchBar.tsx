import { type Dispatch, type ReactNode, type SetStateAction } from "react"
import { useAppContext } from "@/context/AppContext";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "../ui/button"
import { Search, MapPin, CalendarDays, Sun, Loader } from "lucide-react"
// Data
import { categories, destinations, durations, periods } from "@/data/searchfilters";

function DestinationSelect({ value, onChange }: any) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-full border-none shadow-none text-sm font-medium flex items-center gap-2 p-0 cursor-pointer">
                <MapPin className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="Where or what vibe?" />
            </SelectTrigger>

            <SelectContent className="p-3 w-max rounded-xl" position="popper">

                {/* CATEGORY */}
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

                {/* DESTINATIONS */}
                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mt-3 mb-1">
                        Popular
                    </SelectLabel>
                    {destinations.popular.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.flag}</span>
                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>

                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mt-3 mb-1">
                        Europe
                    </SelectLabel>
                    {destinations.europe.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50">
                            <div className="flex items-center gap-3">
                                <span className="text-lg">{item.flag}</span>
                                <span>{item.label}</span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectGroup>

                <SelectGroup>
                    <SelectLabel className="text-xs text-zinc-400 mt-3 mb-1">
                        America
                    </SelectLabel>
                    {destinations.america.map((item) => (
                        <SelectItem key={item.value} value={item.value} className="rounded-lg px-3 py-2 hover:bg-blue-50">
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
            <SelectTrigger className="w-full border-none shadow-none text-sm font-medium flex items-center gap-2 p-0 cursor-pointer">
                <CalendarDays className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="Duration" />
            </SelectTrigger>

            <SelectContent className="p-3 w-max rounded-xl">
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
            <SelectTrigger className="w-full border-none shadow-none text-sm font-medium flex items-center gap-2 p-0 cursor-pointer">
                <Sun className="w-4 h-4 text-blue-500" />
                <SelectValue placeholder="When?" />
            </SelectTrigger>

            <SelectContent className="p-3 w-max rounded-xl">
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

function Separator() {
    return <div className="hidden md:block w-px h-10 bg-zinc-200" />
}

function SelectSection({ children }: { children: ReactNode }) {
    return (
        <div className="flex-1 w-full hover:bg-zinc-50 rounded-xl px-3 py-2 transition">
            {children}
        </div>
    )
}

interface SearchBarProps {
    isExploreLoading: boolean;
    setExploreLoading: Dispatch<SetStateAction<boolean>>;
}

export default function SearchBar({ isExploreLoading, setExploreLoading }: SearchBarProps) {
    const { destination, setDestination, duration, setDuration, period, setPeriod, badge, setBadge, setFilters } = useAppContext();

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
        <div className="w-full max-w-4xl bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-zinc-200 px-4 py-4 md:py-3 flex flex-col md:flex-row items-center gap-4 relative">

            <SelectSection>
                <DestinationSelect value={destination || badge} onChange={handleDestinationChange} />
            </SelectSection>

            <Separator />

            <SelectSection>
                <DurationSelect value={duration} onChange={setDuration} />
            </SelectSection>

            <Separator />

            <SelectSection>
                <PeriodSelect value={period} onChange={setPeriod} />
            </SelectSection>

            <Separator />

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