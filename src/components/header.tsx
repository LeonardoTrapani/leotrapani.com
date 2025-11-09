import { ScrambleText } from "@/components/scramble-text"
import { MapPin, Building2 } from "lucide-react"
import { LinksSection } from "./links-section"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="leonardo trapani" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          milan, italy
        </div>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4" />
          swe @ datapizza - startup founder
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        i&apos;m a 19 y/o software developer, entrepreneur and undergrad
        student. i turn mine and <b>your</b> ideas into reality. when i'm not
        programming, you can find me developing my custom operating system,
        fixing my vim config, playing rugby or mma, or enjoying my uni life
      </p>
      <LinksSection />
    </header>
  )
}
