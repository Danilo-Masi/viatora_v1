import Cta from "../components/cta/Cta";
import Faqs from "../components/faqs/Faqs";
import Features from "../components/features/Features";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Maps from "../components/maps/Maps";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
    return (
        <div className="w-full h-auto min-h-svh flex items-start justify-center bg-zinc-50">
            <div className="w-full md:w-3/4 h-full min-h-svh p-3 flex flex-col gap-20">
                <Navbar />
                <Hero />
                <Features />
                <Maps />
                <Faqs />
                <Cta />
                <Footer />
            </div>
        </div>
    )
}
