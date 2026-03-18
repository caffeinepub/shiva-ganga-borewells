import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img
          src="/assets/uploads/1773844491454-1.png"
          alt="Shiva Ganga Borewells"
          className="h-14 w-auto"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["home", "services", "about", "contact"].map((item) => (
            <button
              type="button"
              key={item}
              data-ocid={`nav.${item}.link`}
              onClick={() => scrollTo(item)}
              className="text-navy font-medium capitalize hover:text-orange transition-colors text-sm"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:9290908980"
            className="flex items-center gap-2 text-navy font-semibold text-sm"
          >
            <Phone className="w-4 h-4 text-orange" />
            9290908980
          </a>
          <Button
            data-ocid="header.inspection.button"
            onClick={() => scrollTo("contact")}
            className="bg-orange text-white hover:bg-orange-dark font-semibold text-sm px-4 py-2 rounded"
          >
            Free Inspection
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-navy"
          onClick={() => setMenuOpen(!menuOpen)}
          data-ocid="nav.mobile.toggle"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-beige-dark px-4 py-4 flex flex-col gap-4">
          {["home", "services", "about", "contact"].map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => scrollTo(item)}
              className="text-navy font-medium capitalize text-left hover:text-orange transition-colors"
            >
              {item}
            </button>
          ))}
          <a
            href="tel:9290908980"
            className="flex items-center gap-2 text-navy font-semibold"
          >
            <Phone className="w-4 h-4 text-orange" />
            9290908980
          </a>
          <Button
            onClick={() => scrollTo("contact")}
            className="bg-orange text-white hover:bg-orange-dark font-semibold w-full"
          >
            Free Site Inspection
          </Button>
        </div>
      )}
    </header>
  );
}
