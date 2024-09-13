import ButtonGradient from "./assets/svg/ButtonGradient";
import { Benefits, Collabration, Footer, Header, Hero, Pricing, Roadmap, Services } from "./components";

const App = () => {
  return (
    <>
      <div className="overflow-hidden pt-[76px] lg:pt-[84px]">
        <Header />
        <Hero />
        <Benefits />
        <Collabration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
