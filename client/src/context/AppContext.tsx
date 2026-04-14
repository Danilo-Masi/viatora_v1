import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type AppContextType = {
    // Maps - preview
    isPreviewOpen: boolean;
    setPreviewOpen: Dispatch<SetStateAction<boolean>>;
    selectedItinerary: string;
    setSelectedItinerary: Dispatch<SetStateAction<string>>;
    // Maps - filters
    destination: string;
    setDestination: Dispatch<SetStateAction<string>>;
    duration: string;
    setDuration: Dispatch<SetStateAction<string>>;
    period: string;
    setPeriod: Dispatch<SetStateAction<string>>;
    badge: string;
    setBadge: Dispatch<SetStateAction<string>>;
    filters: { destination: string, duration: string, period: string, badge: string };
    setFilters: Dispatch<SetStateAction<{ destination: string, duration: string, period: string, badge: string }>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    // Maps - preview
    const [isPreviewOpen, setPreviewOpen] = useState(false);
    const [selectedItinerary, setSelectedItinerary] = useState("");
    // Maps - filters
    const [destination, setDestination] = useState("trending")
    const [duration, setDuration] = useState("")
    const [period, setPeriod] = useState("")
    const [badge, setBadge] = useState("trending")
    const [filters, setFilters] = useState({
        destination: "",
        duration: "",
        period: "",
        badge: "trending"
    });

    return (
        <AppContext.Provider
            value={{
                // Maps - preview
                selectedItinerary,
                setSelectedItinerary,
                isPreviewOpen,
                setPreviewOpen,
                // Maps - filters
                destination,
                setDestination,
                duration,
                setDuration,
                period,
                setPeriod,
                badge,
                setBadge,
                filters,
                setFilters
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};