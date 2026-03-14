import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react"

const questions = [
    {
        id: 1,
        title: "Curabitur augue elit, varius euismod sapien vel, consectetur varius nisl.",
        description: "Nulla dictum massa non quam dictum, volutpat placerat ante hendrerit. Maecenas aliquet tempus augue et convallis. Donec dignissim accumsan molestie. Nunc maximus hendrerit euismod. Integer tempor urna vitae felis ultricies, ut venenatis ipsum condimentum. Suspendisse nisi nunc, facilisis eu nisl."
    },
    {
        id: 2,
        title: "Curabitur augue elit, varius euismod sapien vel, consectetur varius nisl.",
        description: "Nulla dictum massa non quam dictum, volutpat placerat ante hendrerit. Maecenas aliquet tempus augue et convallis. Donec dignissim accumsan molestie. Nunc maximus hendrerit euismod. Integer tempor urna vitae felis ultricies, ut venenatis ipsum condimentum. Suspendisse nisi nunc, facilisis eu nisl."
    },
    {
        id: 3,
        title: "Curabitur augue elit, varius euismod sapien vel, consectetur varius nisl.",
        description: "Nulla dictum massa non quam dictum, volutpat placerat ante hendrerit. Maecenas aliquet tempus augue et convallis. Donec dignissim accumsan molestie. Nunc maximus hendrerit euismod. Integer tempor urna vitae felis ultricies, ut venenatis ipsum condimentum. Suspendisse nisi nunc, facilisis eu nisl."
    },
];

interface FaqSectionInterface {
    id: number;
    title: string;
    description: string;
    openSection: number | null;
    setOpenSection: Dispatch<SetStateAction<number | null>>;
}

function FaqSection({ id, title, description, openSection, setOpenSection }: FaqSectionInterface) {

    const isOpen = openSection === id;

    return (
        <div key={id} className="w-full md:w-2/3 p-3 flex rounded-lg border border-zinc-400 bg-zinc-200 relative">
            <div className="w-full flex flex-col gap-2">
                <h1 className="text-lg font-semibold text-balance">
                    {title}
                </h1>
                {isOpen && <p className="text-sm font-light text-balance text-zinc-400">{description}</p>}
            </div>
            <div className="w-[5svh] h-auto flex items-start justify-start">
                {isOpen
                    ? <ChevronUp
                        onClick={() => setOpenSection(null)}
                        className="w-7 h-7 absolute top-4 right-4 cursor-pointer" />
                    : <ChevronDown
                        onClick={() => setOpenSection(id)}
                        className="w-7 h-7 absolute top-4 right-4 cursor-pointer" />
                }
            </div>
        </div>
    )
}

export default function Faqs() {

    const [openSection, setOpenSection] = useState<number | null>(1);

    return (
        <div className="w-full h-auto min-h-[50svh] flex flex-col items-center justify-start gap-10">
            <h1 className="text-4xl font-bold text-center text-balance md:max-w-lg">
                You have some doubt? We are here
            </h1>
            <div className="w-full h-auto min-h-[30svh] flex flex-col items-center justify-start gap-5">
                {questions.map((item) => (
                    <FaqSection
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        openSection={openSection}
                        setOpenSection={setOpenSection}
                    />
                ))}
            </div>
        </div>
    )
}
