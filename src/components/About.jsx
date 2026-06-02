import { motion } from "framer-motion";
import { Award, Globe, Languages } from "lucide-react";
import AnimatedSection, { SectionHeading, GlowCard, StaggerContainer, StaggerItem } from "./ui";
import { profile, certifications, languages } from "../data/portfolio";

export default function About() {
  return (
    <AnimatedSection id="about" alt className="relative py-28 md:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Marketing With Purpose"
          subtitle="Blending creativity, data, and strategy to help brands stand out online"
        />

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <GlowCard className="p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-muted">
                  Quick intro
                </p>
              </div>

              <StaggerContainer className="space-y-6">
                {[profile.about.intro, profile.about.body, profile.about.closing].map((text, i) => (
                  <StaggerItem key={i}>
                    <p
                      className={`leading-relaxed ${
                        i === 0 ? "text-xl font-medium text-text" : "text-base text-muted md:text-lg"
                      }`}
                    >
                      {text}
                    </p>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 grid gap-3 sm:grid-cols-3"
              >
                {[
                  { label: "Based in", value: profile.location },
                  { label: "Primary focus", value: "SEO • Ads • Content" },
                  { label: "Availability", value: "Open to opportunities" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">
                      {s.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">{s.value}</p>
                  </div>
                ))}
              </motion.div>
            </GlowCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="grid gap-6">
              <GlowCard className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                    <Award size={22} className="text-white" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-white">Certified In</p>
                    <p className="text-sm text-muted">Industry-recognised platforms</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  {certifications.map((cert, i) => (
                    <motion.li
                      key={cert.name}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >
                      <p className="text-sm font-semibold text-text">{cert.name}</p>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{cert.detail}</p>
                    </motion.li>
                  ))}
                </ul>
              </GlowCard>

              <GlowCard className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                    <Languages size={22} className="text-white" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-white">Languages</p>
                    <p className="text-sm text-muted">Comfortable communication</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >
                      <span className="flex items-center gap-2 text-sm text-text">
                        <Globe size={14} className="text-white/70" />
                        {lang.name}
                      </span>
                      <span className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-semibold text-white/80">
                        {lang.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
