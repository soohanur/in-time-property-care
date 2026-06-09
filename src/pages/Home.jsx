import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Process from "../components/Process";
import Stats from "../components/Stats";
import Faq from "../components/Faq";
import Cta from "../components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Stats />
      <Faq />
      <Cta />
    </>
  );
}
