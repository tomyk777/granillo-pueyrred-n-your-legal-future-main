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
      <Navbar />
      <HeroSection />
      <NosotrosSection />
      <CtaBanner />
      <ServiciosSection />
      <FaqSection />
      <TestimoniosSection />
      <ContactoSection />
      <Footer />
      <WhatsAppStickyButton />
    </div>
  );
}
