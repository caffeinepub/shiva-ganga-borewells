import { Drill, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                <Drill className="w-5 h-5 text-orange" />
              </div>
              <div>
                <div className="font-bold text-white leading-none">
                  SHIVA GANGA
                </div>
                <div className="text-orange text-xs font-semibold tracking-widest">
                  BOREWELLS
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your trusted borewell drilling partner in Jadcherla, Telangana
              with 15+ years of expertise.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wide text-sm">
              Quick Links
            </h4>
            <div className="space-y-2">
              {["Home", "Services", "About", "Contact"].map((link) => (
                <button
                  type="button"
                  key={link}
                  data-ocid={`footer.${link.toLowerCase()}.link`}
                  onClick={() =>
                    document
                      .getElementById(link.toLowerCase())
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-white/60 hover:text-orange transition-colors text-sm"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wide text-sm">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Phone className="w-4 h-4 text-orange flex-shrink-0" />
                <a
                  href="tel:9290908980"
                  className="hover:text-orange transition-colors"
                >
                  9290908980
                </a>
              </div>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-orange flex-shrink-0 mt-0.5" />
                <span>Club Road, Rajiv Nagar, Jadcherla, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-white/50 text-xs">
          <span>© {year} Shiva Ganga Borewells. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
