import AnimationRoot from "@/components/AnimationRoot";
import Nav from "@/sections/Nav/Nav";
import Hero from "@/sections/Hero/Hero";
import Ticker from "@/sections/Ticker/Ticker";
import About from "@/sections/About/About";
import WhyAttend from "@/sections/WhyAttend/WhyAttend";
import { CommercialTechnicalPresentations, KeynoteSpeakers } from "@/sections/Speakers/Speakers";
import Programme from "@/sections/Programme/Programme";
import Testimonials from "@/sections/Testimonials/Testimonials";
import Registration from "@/sections/Registration/Registration";
import Partners from "@/sections/Partners/Partners";
import Host from "@/sections/Host/Host";
import Committee from "@/sections/Committee/Committee";
import Faq from "@/sections/Faq/Faq";
import Cta from "@/sections/Cta/Cta";
import Gallery from "@/sections/Gallery/Gallery";
import Footer from "@/sections/Footer/Footer";

export default function Home() {
  return (
    <AnimationRoot>
      <Nav />
      <main id="top">
        <Hero />
        <Ticker />
        <About />
        <WhyAttend />
        <Programme />
        <KeynoteSpeakers />
        <CommercialTechnicalPresentations />
        <Committee />
        <Host />
        <Registration />
        <Testimonials />
        <Partners />
        <Faq />
        <Cta />
        <Gallery />
      </main>
      <Footer />
    </AnimationRoot>
  );
}
