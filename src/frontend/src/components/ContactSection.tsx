import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Loader2, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

export default function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Unable to connect. Please try again.");
      return;
    }
    setLoading(true);
    try {
      const timestamp = BigInt(Date.now());
      await actor.submitEnquiry(
        form.name,
        form.phone,
        form.location,
        form.message,
        timestamp,
      );
      setSubmitted(true);
      setForm({ name: "", phone: "", location: "", message: "" });
      toast.success("Enquiry submitted! We'll contact you soon.");
    } catch (_err) {
      toast.error("Failed to submit. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-beige-light py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-orange font-semibold uppercase tracking-widest text-sm mb-2">
            Reach Out
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-orange mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-card"
            data-ocid="contact.form.panel"
          >
            <h3 className="text-2xl font-bold text-navy mb-6">
              Get A Free Quote
            </h3>

            {submitted ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <CheckCircle className="w-16 h-16 text-orange mb-4" />
                <h4 className="text-xl font-bold text-navy mb-2">Thank You!</h4>
                <p className="text-muted-foreground">
                  We've received your enquiry and will contact you shortly.
                </p>
                <Button
                  className="mt-6 bg-orange hover:bg-orange-dark text-white font-semibold"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-navy font-medium mb-1 block"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    data-ocid="contact.name.input"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="border-border focus:border-orange"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-navy font-medium mb-1 block"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    data-ocid="contact.phone.input"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your mobile number"
                    type="tel"
                    className="border-border focus:border-orange"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="location"
                    className="text-navy font-medium mb-1 block"
                  >
                    Location / Village
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    data-ocid="contact.location.input"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Your location"
                    className="border-border focus:border-orange"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-navy font-medium mb-1 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    data-ocid="contact.message.textarea"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your borewell requirement..."
                    rows={4}
                    className="border-border focus:border-orange resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  data-ocid="contact.submit.button"
                  disabled={loading}
                  className="w-full bg-orange hover:bg-orange-dark text-white font-bold py-3 h-auto text-base rounded uppercase tracking-wide"
                >
                  {loading ? (
                    <>
                      <Loader2
                        className="w-4 h-4 mr-2 animate-spin"
                        data-ocid="contact.loading_state"
                      />
                      Submitting...
                    </>
                  ) : (
                    "Submit Enquiry"
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-navy rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Now</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-white/80 text-sm mb-1">
                      Call Us Anytime
                    </div>
                    <a
                      href="tel:9290908980"
                      className="text-xl font-bold hover:text-orange transition-colors"
                    >
                      9290908980
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-white/80 text-sm mb-1">
                      Our Address
                    </div>
                    <div className="font-medium leading-relaxed">
                      Club Road, Rajiv Nagar,
                      <br />
                      Jadcherla, Telangana
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-white/80 text-sm mb-1">
                      Working Hours
                    </div>
                    <div className="font-medium">24 / 7 — Always Available</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange rounded-2xl p-6 text-white text-center">
              <div className="text-4xl font-extrabold mb-1">FREE</div>
              <div className="text-lg font-semibold mb-2">Site Inspection</div>
              <p className="text-white/85 text-sm">
                No charges for visiting and assessing your site before drilling.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
