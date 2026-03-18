import { Building2, Cpu, Home, Tractor } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Tractor,
    title: "Agriculture Borewells",
    description:
      "High-yield borewells for farmland irrigation with precise water table analysis and optimal depth drilling for sustained agricultural output.",
  },
  {
    icon: Home,
    title: "Residential Borewells",
    description:
      "Safe, clean drinking water solutions for homes and housing societies with proper casing, filtering, and pump installation.",
  },
  {
    icon: Building2,
    title: "Commercial Borewells",
    description:
      "Industrial-grade borewells for factories, offices, and commercial complexes ensuring uninterrupted water supply at scale.",
  },
  {
    icon: Cpu,
    title: "Robo Drilling Services",
    description:
      "Advanced robotic drilling technology for hard rock formations and challenging terrains with maximum precision and efficiency.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-beige py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-orange font-semibold uppercase tracking-widest text-sm mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-orange mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              data-ocid={`services.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow group text-center"
            >
              <div className="w-16 h-16 rounded-full bg-beige flex items-center justify-center mx-auto mb-4 group-hover:bg-orange/10 transition-colors">
                <service.icon className="w-8 h-8 text-orange" />
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
