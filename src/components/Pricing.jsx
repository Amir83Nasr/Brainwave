import { smallSphere, stars } from "../assets"
import Heading from "./Heading"
import PricingList from "./PricingList";
import Section from "./Section"
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden">
      <div className="container relative z-2">

        <div className="hidden lg:flex relative justify-center mb-[6.5rem]">
          <img src={smallSphere} alt="Sphere" width={255} height={255} className="relative z-1" />
        </div>

        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <img src={stars} alt="Stars" width={950} height={400} className="w-full" />
        </div>

        <Heading tag="Get started with Brainwave" title="Pay once, use forever" />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a href="/pricing" className="text-xs font-code font-bold tracking-wider uppercase border-b">
            See the full details
          </a>
        </div>

      </div>
    </Section>
  )
}

export default Pricing