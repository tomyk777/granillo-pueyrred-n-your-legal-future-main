import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NosotrosSection from "@/components/NosotrosSection";
import CtaBanner from "@/components/CtaBanner";
import ServiciosSection from "@/components/ServiciosSection";
import FaqSection from "@/components/FaqSection";
import TestimoniosSection from "@/components/TestimoniosSection";
import ContactoSection from "@/components/ContactoSection";
import Footer from "@/components/Footer";
import WhatsAppStickyButton from "@/components/WhatsAppStickyButton";

export default function Page() {
  return (
    <div className="min-h-screen">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded focus:bg-warm-white focus:px-4 focus:py-2 focus:font-body focus:text-sm focus:font-semibold focus:text-accent focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="contenido-principal">
        <HeroSection />
        <NosotrosSection />
        <CtaBanner />
        <ServiciosSection />
        <FaqSection />
        <TestimoniosSection />
        <ContactoSection />
      </main>
      <Footer />
      <WhatsAppStickyButton />
    </div>
  );
}
