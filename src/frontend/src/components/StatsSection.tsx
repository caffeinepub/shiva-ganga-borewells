import { Award, Clock, Droplets, Truck } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Droplets, value: "50,000+", label: "Bores Drilled" },
  { icon: Truck, value: "10+", label: "Vehicles" },
  { icon: Clock, value: "24/7", label: "Available" },
];

export default function StatsSection() {
  return (
    <section id="about" className="bg-navy py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              data-ocid={`stats.item.${i + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-orange/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-orange" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/70 font-medium text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
