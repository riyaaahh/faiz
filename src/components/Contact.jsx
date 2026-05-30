import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, User } from "lucide-react";
import AnimatedSection, { SectionHeading, GlowCard } from "./ui";
import { profile, reference } from "../data/portfolio";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="relative py-28 md:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Have a Project in Mind?"
          subtitle="Whether it's a full campaign, a quick consultation, or a new role — I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <GlowCard className="glass-accent h-full p-8">
              <h3 className="font-display text-2xl font-bold text-white">Let's Connect</h3>
              <p className="mt-3 text-muted">
                Drop me a message and I'll get back to you as soon as I can. Based in Thrissur,
                available for remote and on-site opportunities.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  {
                    icon: Phone,
                    label: "Call or WhatsApp",
                    value: profile.phone,
                    href: `tel:${profile.phone.replace(/\s/g, "")}`,
                  },
                  {
                    icon: Mail,
                    label: "Email Me",
                    value: profile.email,
                    href: `mailto:${profile.email}`,
                  },
                  { icon: MapPin, label: "Location", value: profile.location },
                ].map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-white/[0.03]"
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 transition-transform group-hover:scale-110">
                          <item.icon size={18} className="text-accent-light" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-muted">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-text">{item.value}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15">
                          <item.icon size={18} className="text-accent-light" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-muted">
                            {item.label}
                          </p>
                          <p className="text-sm font-medium text-text">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <div className="mb-3 flex items-center gap-2">
                  <User size={16} className="text-accent-2" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                    Professional Reference
                  </h4>
                </div>
                <p className="font-semibold text-white">{reference.name}</p>
                <p className="text-xs text-muted">{reference.role}</p>
                <a
                  href={`tel:${reference.phone.replace(/\s/g, "")}`}
                  className="mt-2 block text-sm text-muted transition-colors hover:text-accent-light"
                >
                  {reference.phone}
                </a>
                <a
                  href={`mailto:${reference.email}`}
                  className="block text-sm text-muted transition-colors hover:text-accent-light"
                >
                  {reference.email}
                </a>
              </div>
            </GlowCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <GlowCard className="p-8 md:p-10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target;
                  window.location.href = `mailto:${profile.email}?subject=Portfolio Inquiry from ${form.name.value}&body=${encodeURIComponent(form.message.value)}%0A%0AFrom: ${form.email.value}`;
                }}
              >
                <p className="mb-8 text-sm text-muted">
                  Tell me about your project — I'll reply personally within 24 hours.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    { id: "name", label: "Your Name", type: "text", placeholder: "What should I call you?" },
                    { id: "email", label: "Your Email", type: "email", placeholder: "Where can I reach you?" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="mb-2 block text-sm font-semibold text-muted">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        required
                        className="input-field w-full rounded-xl px-4 py-3.5 text-white placeholder:text-muted/40"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-muted">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="input-field w-full resize-none rounded-xl px-4 py-3.5 text-white placeholder:text-muted/40"
                    placeholder="What's on your mind?"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary relative mt-8 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-sm font-bold text-black sm:w-auto sm:px-12"
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
