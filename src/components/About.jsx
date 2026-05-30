import { motion } from "framer-motion";
import { Award, Globe, Languages } from "lucide-react";
import AnimatedSection, { SectionHeading, ParallaxImage, GlowCard } from "./ui";
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

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <ParallaxImage className="relative mx-auto w-full max-w-md lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 to-accent-2/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.75rem] image-frame">
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7 }}
                  src={profile.images.about}
                  alt={`${profile.name} portrait`}
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute -bottom-5 -right-4 glass-accent rounded-2xl px-6 py-4 md:-right-8"
              >
                <p className="font-display text-2xl font-black text-white">Thrissur</p>
                <p className="text-sm text-accent-2">Kerala, India</p>
              </motion.div>
            </motion.div>
          </ParallaxImage>

          <div className="space-y-6">
            {[profile.about.intro, profile.about.body, profile.about.closing].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
                className={`leading-relaxed ${i === 0 ? "text-xl font-medium text-text" : "text-base text-muted md:text-lg"}`}
              >
                {text}
              </motion.p>
            ))}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <GlowCard className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15">
                  <Award size={22} className="text-accent-light" />
                </div>
                <h3 className="mb-4 font-display text-lg font-bold text-white">Certified In</h3>
                <ul className="space-y-4">
                  {certifications.map((cert, i) => (
                    <motion.li
                      key={cert.name}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <p className="text-sm font-semibold text-text">{cert.name}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">{cert.detail}</p>
                    </motion.li>
                  ))}
                </ul>
              </GlowCard>

              <GlowCard className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-2/15">
                  <Languages size={22} className="text-accent-2" />
                </div>
                <h3 className="mb-4 font-display text-lg font-bold text-white">Languages</h3>
                <ul className="space-y-3">
                  {languages.map((lang) => (
                    <li key={lang.name} className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-sm text-text">
                        <Globe size={14} className="text-accent-2" />
                        {lang.name}
                      </span>
                      <span className="rounded-lg bg-accent-2/10 px-2.5 py-1 text-xs font-semibold text-accent-2">
                        {lang.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
