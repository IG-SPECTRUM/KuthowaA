import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBanner from "@/components/TrustBanner";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import WhyBuyLocal from "@/components/WhyBuyLocal";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import WhoWeServe from "@/components/WhoWeServe";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import TrustGuarantees from "@/components/TrustGuarantees";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import CareGuide from "@/components/CareGuide";
import Founder from "@/components/Founder";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Trust Banner */}
        <TrustBanner />
        {/* 3. About & Story */}
        <About />
        {/* 4. Products */}
        <Products />
        {/* 5. Trust Guarantees */}
        <TrustGuarantees />
        {/* 6. Visual Gallery */}
        <Gallery />
        {/* 7. Why Local */}
        <WhyBuyLocal />
        {/* 7.5 Founder */}
        <Founder />
        {/* 8. Benefits */}
        <Benefits />
        {/* 8.5 Care Guide */}
        <CareGuide />
        {/* 9. Target Audiences */}
        <WhoWeServe />
        {/* 10. How it works */}
        <HowItWorks />
        {/* 11. Testimonials */}
        <Testimonials />
        {/* 12. FAQ */}
        <FAQ />
        {/* 13. Contact & Maps */}
        <Contact />
        {/* 14. Final Conversion */}
        <WhatsAppCTA />
      </main>

      <Footer />
      <WhatsAppBubble />
      <ScrollToTop />
    </>
  );
}
