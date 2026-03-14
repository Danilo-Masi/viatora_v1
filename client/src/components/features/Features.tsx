interface FeatureContainerInterface {
    title: string;
    description: string;
}

function FeatureContainer({ title, description }: FeatureContainerInterface) {
    return (
        <div className="w-full md:w-[calc(50%-10px)] h-[60svh] flex flex-col items-start justify-center gap-3 p-5 border border-zinc-300 rounded-xl bg-zinc-100">
            <h1 className="text-2xl font-bold text-gray-900 text-balance">{title}</h1>
            <h3 className="text-md font-light text-gray-400 text-balance">{description}</h3>
        </div>
    )
}


export default function Features() {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-start gap-10">

            <h1 className="text-4xl font-bold text-center md:max-w-lg">
                Select the itinerary, go to checkout, see all location on your map app
            </h1>

            <div className="w-full h-auto flex flex-wrap gap-5">
                <FeatureContainer
                    title="Autheinc content, always"
                    description="We take the #ad out of adventure. No sponsored content here. Just genuine, tried and tested advice from local or other traverl" />
                <FeatureContainer
                    title="One place for everything"
                    description="No need for separate notes, research apps, just your google maps app or apple maps app." />
                <FeatureContainer
                    title="Autheinc content, always"
                    description="We take the #ad out of adventure. No sponsored content here. Just genuine, tried and tested advice from local or other traverl" />
                <FeatureContainer
                    title="One place for everything"
                    description="No need for separate notes, research apps, just your google maps app or apple maps app." />
            </div>
        </div>
    )
}
