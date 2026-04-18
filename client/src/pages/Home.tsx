import useIsMobile from "@/lib/screenWidth";
// Components
import HeroGlobe from "@/components/hero/HeroGlobe";
import InfiniteCards from "@/components/moving_cards/infiniteCards";
import Features from "../components/features/Features";
import Maps from "../components/maps/Maps";
import Faqs from "../components/faqs/Faqs";
import Footer from "../components/footer/Footer";
// Dialogs
import PreviewCard from "@/components/maps/PreviewCard";
import PreviewCardMobile from "@/components/maps/PreviewCardMobile";
import CollaborationDialog from "@/components/footer/CollaborationDialog";

export default function Home() {
    const isMobile = useIsMobile();

    return (
        <div className="w-full h-auto flex flex-col items-center justify-start gap-40 bg-linear-to-t from-blue-500/20 via-zinc-50 to-zinc-50">
            <HeroGlobe />
            <InfiniteCards />
            <Features />
            <Maps />
            <Faqs />
            <Footer />
            {/* Dialogs */}
            {isMobile
                ? <PreviewCardMobile />
                : <PreviewCard />
            }
            <CollaborationDialog />
        </div>
    )
}
