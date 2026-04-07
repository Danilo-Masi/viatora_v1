import type { ReactNode } from "react"
import { useNavigate } from "react-router-dom"

function LinkContainer({ children, title }: { children: ReactNode, title: string }) {
    return (
        <div className="flex flex-col gap-3 text-center md:text-left">
            <h1 className="text-lg font-bold">{title}</h1>
            <ul className="text-base md:text-sm text-zinc-500 flex flex-col gap-2">
                {children}
            </ul>
        </div>
    )
}

export default function Footer() {
    const navigate = useNavigate();
    const year = new Date().getFullYear();

    return (
        <footer className="w-[95%] md:w-5/6 border-t border-zinc-200">

            <div className="w-full py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="flex flex-col gap-3 text-center md:text-left">
                    <h1 className="text-2xl font-extrabold">
                        <span className="text-blue-500">Map</span>swapp
                    </h1>
                    <p className="text-base md:text-sm text-zinc-500 text-center md:text-left text-balance">
                        Ready to follow itineraries, instantly on Google Maps.
                    </p>
                    <p className="text-xs text-zinc-400">
                        No apps to download • Instant access
                    </p>
                </div>

                {/* Navigation */}
                <LinkContainer title="Navigation">
                    <li className="hover:text-amber-400 cursor-pointer transition">How it works</li>
                    <li className="hover:text-amber-400 cursor-pointer transition">Browse itineraries</li>
                    <li className="hover:text-amber-400 cursor-pointer transition">FAQ</li>
                </LinkContainer>

                {/* Legal */}
                <LinkContainer title="Legal">
                    <li className="hover:text-amber-400 cursor-pointer transition" onClick={() => navigate("/terms")}>Terms of Service</li>
                    <li className="hover:text-amber-400 cursor-pointer transition" onClick={() => navigate("/privacy")}>Privacy Policy</li>
                </LinkContainer>

                {/* Community */}
                <LinkContainer title="Community">
                    <li className="hover:text-amber-400 cursor-pointer transition">Instagram</li>
                    <li className="hover:text-amber-400 cursor-pointer transition">TikTok</li>
                    <li className="hover:text-amber-400 cursor-pointer transition font-semibold">Become a creator</li>
                </LinkContainer>
            </div>

            {/* Bottom */}
            <div className="w-full border-t border-zinc-200 py-6 flex flex-col md:flex-row items-center justify-between gap-y-3">
                <p className="text-xs text-zinc-400">
                    © {year} Mapswapp All rights reserved.
                </p>
                <p className="text-xs text-zinc-400 hover:text-amber-400 cursor-pointer transition">
                    Sitemap
                </p>
            </div>
        </footer>
    )
}