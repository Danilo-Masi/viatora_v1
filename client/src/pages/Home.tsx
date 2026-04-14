import useIsMobile from "@/lib/screenWidth";
import Cta from "../components/cta/Cta";
import Faqs from "../components/faqs/Faqs";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import Maps from "../components/maps/Maps";
import HeroGlobe from "@/components/hero/HeroGlobe";
import PreviewCard from "@/components/maps/PreviewCard";
import { useAppContext } from "@/context/AppContext";
import PreviewCardMobile from "@/components/maps/PreviewCardMobile";
import InfiniteCards from "@/components/moving_cards/infiniteCards";

export default function Home() {
    // Preview card status
    const { isPreviewOpen } = useAppContext();
    const isMobile = useIsMobile();

    return (
        <div className="w-full h-auto flex flex-col items-center justify-start gap-40 pb-5 bg-linear-to-t from-blue-500/10 via-blue-400/10 to-zinc-50">
            <HeroGlobe />
            <InfiniteCards />
            <Features />
            <Maps />
            <Faqs />
            <Cta />
            <Footer />
            {isPreviewOpen && isMobile ? <PreviewCardMobile /> : isPreviewOpen && <PreviewCard />}
        </div>
    )
}
