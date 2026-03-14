import { Battery, Signal, Wifi } from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarImage,
} from "@/components/ui/avatar"

interface PhoneMockupInterface {
    height: string;
    hour: string;
    title: string;
    days: string;
    description: string;
    map: string;
    daySelector: { day: string, weekday: string, selected: boolean }[];
    coordinates: { t: string, l: string }[];
}

export default function PhoneMockup({ height, hour, title, days, description, map, daySelector, coordinates }: PhoneMockupInterface) {
    return (
        <div className={`w-full md:w-[calc(33%-15px)] ${height} p-2 rounded-t-4xl bg-black relative`}>
            {/* Phone buttons */}
            <div className="w-0.5 h-8 bg-black absolute top-20 -left-0.5" />
            <div className="w-0.5 h-10 bg-black absolute top-40 -left-0.5" />
            <div className="w-0.5 h-10 bg-black absolute top-52 -left-0.5" />
            <div className="w-full h-full rounded-t-2xl flex flex-col gap-3 bg-white">
                {/* Phone Headbar */}
                <div className="w-full h-min flex items-center justify-between p-2">
                    <div className="w-1/3 flex items-center justify-start">
                        <h1 className="font-bold text-xs">{hour}</h1>
                    </div>
                    <div className="w-1/3 h-[4svh] rounded-4xl flex items-center justify-start bg-black">
                        <div className="w-[2svh] h-[2svh] rounded-full ml-2 bg-zinc-800" />
                    </div>
                    <div className="w-1/3 flex items-center justify-end gap-3">
                        <Signal className="w-4" fill="black" />
                        <Wifi className="w-4" absoluteStrokeWidth />
                        <Battery className="w-5" fill="black" />
                    </div>
                </div>
                {/* Day selector */}
                <div className="w-full flex flex-wrap items-center justify-center gap-3">
                    <div className="w-full flex flex-wrap items-center justify-between p-2">
                        <h1 className="w-2/3 font-bold text-2xl">{title}</h1>
                        <AvatarGroup className="w-1/3 justify-end">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                                <AvatarFallback>LR</AvatarFallback>
                            </Avatar>
                            <Avatar>
                                <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                                <AvatarFallback>ER</AvatarFallback>
                            </Avatar>
                            <AvatarGroupCount>+3</AvatarGroupCount>
                        </AvatarGroup>
                        <p className="w-full text-xs text-gray-400 mt-1 italic">{days}</p>
                        <h3 className="w-full text-sm text-gray-700 mt-1">{description}</h3>
                    </div>
                    {daySelector && daySelector.map((item) => (
                        <div
                            key={item.day}
                            className={`w-[calc(33%-12px)] h-[10svh] rounded-lg flex flex-col items-start justify-center p-2 ${item.selected === true ? 'border-2 border-black' : 'border border-gray-400'}`}>
                            <h1 className="text-lg font-bold">{item.day}</h1>
                            <h3 className="text-xs font-light text-gray-500">{item.weekday}</h3>
                        </div>
                    ))}
                </div>
                {/* Map */}
                <div className="w-full h-full overflow-hidden relative">
                    <img src={map} className="w-full h-full object-cover" />
                    {coordinates.map((item, index) => (
                        <div className={`w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold z-10 absolute ${item.t} ${item.l}`}>
                            {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
