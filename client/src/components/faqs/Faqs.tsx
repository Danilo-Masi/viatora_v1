import { AccordionFaq } from "./AccordionFaq";

export default function Faqs() {
    return (
        <div className="w-[95%] md:w-5/6 h-auto min-h-[50svh] flex flex-col items-center justify-start gap-15 bg-red-500">

            {/* Head */}
            <div className="flex flex-col items-center text-center gap-3">
                <h1 className="text-4xl md:text-5xl max-w-xs font-bold text-zinc-900">
                    Still thinking about it?
                </h1>
                <p className="text-base md:text-lg max-w-xs font-normal text-zinc-500">
                    Here’s everything you need to know.
                </p>
            </div>

            {/* Accordion */}
            <AccordionFaq />

        </div>
    )
}
