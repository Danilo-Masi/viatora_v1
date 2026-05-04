import { useNavigate } from "react-router-dom";
import { CheckCircle, Info, Mail, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Success() {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-zinc-100 px-4 py-10">
            <div className="w-full max-w-md flex flex-col items-center gap-6">

                {/* LOGO */}
                <h1 className="text-2xl font-bold text-zinc-900">Mapswapp</h1>

                {/* SUCCESS STATE */}
                <div className="w-full flex flex-col items-center text-center gap-3 bg-white rounded-xl p-6 shadow">
                    <CheckCircle className="text-green-500 w-10 h-10" />
                    <h2 className="text-xl font-semibold text-zinc-900">
                        Payment successful
                    </h2>
                    <p className="text-sm text-zinc-500">
                        Your itinerary has been sent to your email
                    </p>
                </div>

                {/* EMAIL INFO */}
                <div className="w-full flex gap-3 bg-white rounded-xl p-5 shadow">
                    <Mail className="w-4 h-4 mt-1 text-blue-500" />
                    <p className="w-[calc(100%-28px)] text-sm text-zinc-600 leading-relaxed">
                        Check your inbox and open the email from Mapswapp.
                        Inside you’ll find your itinerary ready to use.
                    </p>
                </div>

                {/* STEP BY STEP */}
                <div className="w-full flex flex-col gap-4">

                    <h3 className="text-sm font-semibold text-zinc-800">
                        How to use your itinerary
                    </h3>

                    {/* STEP 1 */}
                    <div className="flex gap-3 bg-white rounded-xl p-5 shadow">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold">
                            1
                        </div>
                        <div className="w-[calc(100%-44px)] flex flex-col gap-1 text-sm text-clip text-zinc-600">
                            <p className="font-medium text-zinc-900">
                                Open the link in your email
                            </p>
                            <p>
                                Tap the link to open the itinerary.
                            </p>
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div className="flex gap-3 bg-white rounded-xl p-5 shadow">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold">
                            2
                        </div>
                        <div className="w-[calc(100%-44px)] flex flex-col gap-1 text-sm text-clip text-zinc-600">
                            <p className="font-medium text-zinc-900">
                                Open it in Google Maps
                            </p>
                            <p>
                                The itinerary will open via Google My Maps. From there, open it in Google Maps to navigate easily.
                            </p>
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div className="flex gap-3 bg-white rounded-xl p-5 shadow">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white text-sm font-semibold">
                            3
                        </div>
                        <div className="w-[calc(100%-44px)] flex flex-col gap-1 text-sm text-clip text-zinc-600">
                            <p className="font-medium text-zinc-900">
                                Save it for your trip
                            </p>
                            <p>
                                Save the map so you can access it anytime during your trip.
                            </p>
                        </div>
                    </div>

                </div>

                {/* TROUBLESHOOT */}
                <div className="w-full flex gap-3 bg-zinc-200 rounded-xl p-5">
                    <Info className="w-4 h-4 mt-1 text-black" />
                    <p className="w-[calc(100%-28px)] text-sm text-zinc-700 leading-relaxed">
                        Didn’t receive the email? Check your spam folder.
                        If you’re on iPhone, make sure you open the link using Google Maps for the best experience.
                        Still having issues? Contact us at <span><a href="mailto:support@mapswapp.com" className="hover:underline">support@mapswapp.com</a></span>
                    </p>
                </div>

                {/* CTA */}
                <Button
                    onClick={() => navigate("/", { replace: true })}
                    className="w-full py-6 text-base font-medium rounded-xl hover:scale-95 transition-all duration-400">
                    <ChevronLeft /> Explore more itineraries
                </Button>

            </div>
        </div>
    );
}