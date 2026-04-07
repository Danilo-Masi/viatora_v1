import { Map, Sparkles, Compass } from "lucide-react"

interface FeatureContainerInterface {
    title: string
    description: string
    icon: React.ReactNode
}

function FeatureContainer({ title, description, icon }: FeatureContainerInterface) {
    return (
        <div className="w-full md:w-[calc(33%-16px)] p-6 flex flex-col gap-4 rounded-2xl border border-zinc-300 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200">

            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-100">
                {icon}
            </div>

            <h2 className="text-xl font-semibold text-zinc-900">
                {title}
            </h2>

            <p className="text-sm text-zinc-500 leading-relaxed">
                {description}
            </p>

        </div>
    )
}

export default function Features() {
    return (
        <section className="w-[95%] md:w-5/6 flex flex-col items-center gap-12">

            {/* Head */}
            <div className="flex flex-col items-center text-center gap-3">
                <h1 className="text-4xl md:text-5xl max-w-md font-bold text-zinc-900">
                    Plan less. Experience more.
                </h1>
                <p className="text-base md:text-lg max-w-md font-normal text-zinc-500">
                    Get ready-to-follow itineraries and explore every place directly on Google Maps.
                </p>
            </div>

            {/* Features */}
            {/* 
            <div className="w-full flex flex-wrap gap-6 justify-center">
                <FeatureContainer
                    title="Ready in seconds"
                    description="Buy your itinerary and instantly get a Google Maps link with every stop, organized day by day."
                    icon={<Map className="w-5 h-5 text-zinc-700" />}
                />
                <FeatureContainer
                    title="Real travel, no ads"
                    description="Only real places tested by travelers. No sponsored spots, just authentic experiences."
                    icon={<Sparkles className="w-5 h-5 text-zinc-700" />}
                />
                <FeatureContainer
                    title="Everything in one map"
                    description="Restaurants, attractions and hidden gems all in one place, ready to follow on your phone."
                    icon={<Compass className="w-5 h-5 text-zinc-700" />}
                />
            </div>
            */}

            <div className="w-full h-svh flex flex-col md:flex-row gap-5">

                <div className="w-full md:w-2/3 h-full flex flex-col items-start justify-start gap-5">
                    <div className="w-full h-1/2 flex items-center justify-center border border-zinc-300 rounded-xl bg-zinc-200/70">
                        1
                    </div>
                    <div className="w-full h-1/2 flex items-center justify-center border border-zinc-300 rounded-xl bg-zinc-200/70">
                        2
                    </div>
                </div>
                
                <div className="w-full md:w-1/3 h-full flex items-center justify-center border border-zinc-300 rounded-xl bg-zinc-200/70">
                    3
                </div>
            </div>

        </section>
    )
}