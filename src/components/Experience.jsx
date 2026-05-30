import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import AnimatedSection, { SectionHeading, StaggerContainer, StaggerItem, GlowCard } from "./ui";
import { companies, experience } from "../data/portfolio";

export default function WorkExperience() {
  return (
    <AnimatedSection id="experience" alt className="relative py-28 md:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="My Journey"
          title="Real Work, Real Results"
          subtitle="Brands I've helped grow — and the work behind the results"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-muted">
            Companies I've Worked With
          </p>
          <StaggerContainer className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3">
            {companies.map((company) => (
              <StaggerItem key={company.name}>
                <GlowCard className="flex h-full flex-col items-center p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className={`mb-4 flex h-20 w-full items-center justify-center overflow-hidden rounded-xl px-4 ${
                      company.logoBg === "light"
                        ? "bg-white"
                        : company.logoBg === "dark"
                          ? "bg-black"
                          : "bg-gradient-to-br from-accent/20 to-accent-2/10"
                    }`}
                  >
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-h-14 w-full object-contain"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-1">
                        <Briefcase size={28} className="text-accent-light" />
                        <span className="text-xs font-bold uppercase tracking-wider text-accent-2">
                          Zoople
                        </span>
                      </div>
                    )}
                  </motion.div>
                  <h4 className="text-sm font-bold text-white">{company.name}</h4>
                  <p className="mt-1 text-xs text-muted">{company.tagline}</p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-accent/30 via-transparent to-accent-2/20 blur-lg" />
            <div className="relative glass-accent rounded-[2rem] p-8 md:p-10">
              <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent-2/20"
                  >
                    <Briefcase size={24} className="text-accent-light" />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-accent-2">{experience.company}</p>
                  </div>
                </div>
                <span className="inline-flex w-fit rounded-xl border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-bold text-accent-light">
                  {experience.period}
                </span>
              </div>

              <p className="mb-10 text-base leading-relaxed text-text md:text-lg">
                {experience.summary}
              </p>

              <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                {experience.highlights.map((item, i) => (
                  <StaggerItem key={item.title}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="group h-full rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-accent/25 hover:bg-accent/5"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-white/20 to-white/5 text-xs font-black text-white">
                          {i + 1}
                        </span>
                        <h4 className="font-display font-bold text-white">{item.title}</h4>
                      </div>
                      <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
