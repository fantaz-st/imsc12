import AnimationRoot from "@/components/AnimationRoot";
import HomeSectionNav from "@/components/HomeSectionNav/HomeSectionNav";
import Nav from "@/sections/Nav/Nav";
import Hero from "@/sections/Hero/Hero";
import Ticker from "@/sections/Ticker/Ticker";
import About from "@/sections/About/About";
import Topics from "@/sections/Topics/Topics";
import WhyAttend from "@/sections/WhyAttend/WhyAttend";
// import { CommercialTechnicalPresentations, KeynoteSpeakers } from "@/sections/Speakers/Speakers";
// import Programme from "@/sections/Programme/Programme";
// import Testimonials from "@/sections/Testimonials/Testimonials";
import Registration from "@/sections/Registration/Registration";
// import Partners from "@/sections/Partners/Partners";
import Host from "@/sections/Host/Host";
// import Committee from "@/sections/Committee/Committee";
import Faq from "@/sections/Faq/Faq";
import Cta from "@/sections/Cta/Cta";
import Gallery from "@/sections/Gallery/Gallery";
import Footer from "@/sections/Footer/Footer";

export default function Home() {
  const eventStructuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "12th International Maritime Science Conference (IMSC 2027)",
    description: "The 12th International Maritime Science Conference brings together researchers, engineers, educators, and maritime industry professionals.",
    startDate: "2027-05-06",
    endDate: "2027-05-07",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "Hotel Cornaro",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Split",
        addressCountry: "HR",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Faculty of Maritime Studies, University of Split",
      url: "https://www.pfst.unist.hr/",
    },
    url: "https://imsc.pfst.hr/",
  };

  return (
    <AnimationRoot>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <HomeSectionNav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Topics />
        {/* <WhyAttend /> */}
        {/* <Programme /> */}
        {/* <KeynoteSpeakers /> */}
        {/* <CommercialTechnicalPresentations /> */}
        {/* <Committee /> */}
        <Host />
        <Registration />
        {/* <Testimonials /> */}
        {/* <Partners /> */}
        <Faq />
        <Cta />
        <Gallery />
      </main>
      <Footer />
    </AnimationRoot>
  );
}
