import { useAppContext } from "@/context/AppContext";
import { Drawer, DrawerContent } from "../ui/drawer";
import { itineraries } from "@/data/itineraries";
import PreviewMap from "./PreviewMap";
import PreviewInfo from "./PreviewInfo";

export default function PreviewCardMobile() {
    const { isPreviewOpen, setPreviewOpen, selectedItinerary } = useAppContext();

    const itinerary = itineraries.find(it => it.id === selectedItinerary);

    return (
        <Drawer open={isPreviewOpen} onOpenChange={setPreviewOpen}>
            <DrawerContent className="p-3 flex flex-col gap-4">
                <PreviewMap itinerary={itinerary} />
                <PreviewInfo itinerary={itinerary} />
            </DrawerContent >
        </Drawer>
    )
}
