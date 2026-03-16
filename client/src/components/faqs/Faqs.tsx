import { ChevronDown } from "lucide-react";
import { useState, type Dispatch, type SetStateAction } from "react"

const questions = [
    {
        id: 1,
        title: "Come posso acquistare un itinerario su Viatora?",
        description: "Semplice! Basta scegliere l’itinerario che ti interessa, completare il pagamento e riceverai subito via email un link a Google Maps con tutti i punti del percorso giorno per giorno."
    },
    {
        id: 2,
        title: "Cosa ricevo dopo l’acquisto?",
        description: "Dopo il pagamento riceverai un link personalizzato a Google Maps che mostra tutte le tappe dell’itinerario: cose da fare, ristoranti, attrazioni e punti di interesse, organizzati giorno per giorno."
    },
    {
        id: 3,
        title: "Posso usare gli itinerari anche offline?",
        description: "Sì! Una volta aperto il link su Google Maps, puoi salvare l’itinerario offline direttamente dall’app di Google Maps sul tuo smartphone, così sarà disponibile anche senza connessione internet."
    },
    {
        id: 4,
        title: "È possibile modificare o personalizzare l’itinerario acquistato?",
        description: "Al momento non è possibile modificare gli itinerari acquistati direttamente su Viatora. Tuttavia puoi visualizzare tutte le tappe su Google Maps e creare percorsi personalizzati usando le funzionalità standard di Maps."
    },
    {
        id: 5,
        title: "Quanto tempo ci vuole per ricevere l’itinerario dopo il pagamento?",
        description: "Il link a Google Maps viene inviato immediatamente via email dopo il pagamento. Controlla anche la cartella Spam/Promozioni nel caso la mail non arrivi subito."
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
        <div className={`w-full md:w-2/3 p-4 rounded-lg border transition-all duration-200 ${isOpen ? 'bg-white shadow-md border-zinc-500' : 'bg-zinc-200/80 border-zinc-400'} hover:bg-zinc-300 cursor-pointer`}>
            <div
                className="flex justify-between items-center w-full"
                onClick={() => setOpenSection(isOpen ? null : id)}>
                <h1 className="text-lg font-semibold text-balance">{title}</h1>
                <ChevronDown className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm font-light text-zinc-500 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

export default function Faqs() {
    const [openSection, setOpenSection] = useState<number | null>(1);

    return (
        <div className="w-full h-auto min-h-[50svh] flex flex-col items-center justify-start gap-15">

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
