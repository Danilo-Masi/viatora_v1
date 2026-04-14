import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useAppContext } from "@/context/AppContext";
import PreviewMap from "./PreviewMap";
import PreviewInfo from "./PreviewInfo";
import { itineraries } from "@/data/itineraries";

export default function PreviewCard() {
    const { isPreviewOpen, setPreviewOpen, selectedItinerary } = useAppContext();

    const itinerary = itineraries.find(it => it.id === selectedItinerary);

    return (
        <Dialog open={isPreviewOpen} onOpenChange={setPreviewOpen}>
            <DialogContent showCloseButton={false} >
                <PreviewMap itinerary={itinerary} />
                <PreviewInfo itinerary={itinerary} />
            </DialogContent>
        </Dialog>
    )
}
