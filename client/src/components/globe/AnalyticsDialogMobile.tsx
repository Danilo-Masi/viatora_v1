import { Flag, Heart } from "lucide-react";
import { Drawer, DrawerContent } from "../ui/drawer";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Separator } from "../ui/separator";

interface AnalyticsDialogMobileProps {
  isAnalyticsOpen: boolean;
  setAnalyticsOpen: (open: boolean) => void;
}

function DataVisualization({ data, info }: { data: string; info: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <h1 className="text-sm text-zinc-800 font-semibold">{data}</h1>
      <h3 className="text-xs text-zinc-400 text-balance">{info}</h3>
    </div>
  )
}

function ToggleButton() {
  return (
    <ToggleGroup variant="outline" type="single" defaultValue="visited" size="lg" >
      <ToggleGroupItem value="visited" aria-label="Toggle visited" className="flex gap-2 cursor-pointer">
        <Flag fill="currentColor" />Visited
      </ToggleGroupItem>
      <ToggleGroupItem value="wishlist" aria-label="Toggle wishlist" className="flex gap-2 cursor-pointer">
        <Heart fill="currentColor" /> Wishlist
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default function AnalyticsDialogMobile({ isAnalyticsOpen, setAnalyticsOpen }: AnalyticsDialogMobileProps) {
  return (
    <Drawer open={isAnalyticsOpen} onOpenChange={setAnalyticsOpen}>
      <DrawerContent className="p-4 pt-0 z-50 flex flex-col gap-6">

        <section className="w-full min-h-[5svh] flex items-start justify-between">
          <DataVisualization data="8/195" info="countries" />
          <Separator orientation="vertical" className="h-[5svh]" />
          <DataVisualization data="4%" info="of the world" />
          <Separator orientation="vertical" className="h-[5svh]" />
          <DataVisualization data="1/8" info="world region" />
        </section>

        <section className="w-full h-auto min-h-[5svh] flex items-center justify-center">
          <ToggleButton />
        </section>

        <section className="w-full h-auto min-h-[40svh] max-h-[40svh] overflow-scroll bg-red-500">

        </section>

      </DrawerContent >
    </Drawer>
  )
}
