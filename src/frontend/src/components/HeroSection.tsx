import { Button } from "@/components/ui/button";
import { CheckCircle, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center"
      style={{
        backgroundImage: "url('/assets/uploads/IMG-20260318-WA0019-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-dark/75" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-block bg-orange/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded mb-6">
            Jadcherla, Telangana
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-sky-400 uppercase leading-tight mb-6 drop-shadow-lg">
            Expert Borewell
            <br />
            Drilling Services
          </h1>
          <p className="text-amber-300 text-lg mb-4 font-light leading-relaxed">
            Trusted borewell drilling company serving Jadcherla & Telangana
            region with 15+ years of expertise.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "Free Site Inspection",
              "24/7 Available",
              "50,000+ Bores Drilled",
            ].map((feat) => (
              <div
                key={feat}
                className="flex items-center gap-1.5 text-amber-200 text-sm"
              >
                <CheckCircle className="w-4 h-4 text-orange" />
                {feat}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              data-ocid="hero.inspection.button"
              onClick={scrollToContact}
              className="bg-orange hover:bg-orange-dark text-white font-bold text-base px-8 py-3 h-auto rounded uppercase tracking-wide shadow-lg"
            >
              Get Free Site Inspection
            </Button>
            <a href="tel:9290908980">
              <Button
                data-ocid="hero.call.button"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-navy font-bold text-base px-8 py-3 h-auto rounded uppercase tracking-wide"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
