import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
