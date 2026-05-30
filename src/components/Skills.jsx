import { motion } from "framer-motion";
import { BarChart3, Megaphone, PenTool, Search } from "lucide-react";
import AnimatedSection, { SectionHeading, StaggerContainer, StaggerItem, GlowCard } from "./ui";
import { expertise, strengths, focusAreas } from "../data/portfolio";

const areaIcons = [Megaphone, Search, PenTool, BarChart3];
const iconStyles = [
  "bg-accent/15 text-accent-light",
  "bg-accent-2/15 text-accent-2",
  "bg-accent-3/15 text-accent-3",
  "bg-accent/15 text-accent-light",
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="relative py-28 md:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I Do"
          title="How I Help Brands Grow"
          subtitle="End-to-end digital marketing — from first impression to final conversion"
        />

        <StaggerContainer className="grid gap-5 md:grid-cols-2">
          {expertise.map((area, i) => {
            const Icon = areaIcons[i];
            return (
              <StaggerItem key={area.title}>
                <GlowCard className="group h-full p-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${iconStyles[i]}`}
                  >
                    <Icon size={24} />
                  </motion.div>
                  <h3 className="font-display text-xl font-bold text-white">{area.title}</h3>
                  <p className="mt-2 text-sm font-medium text-accent-light">{area.description}</p>
                  <ul className="mt-6 space-y-3">
                    {area.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-3 text-sm text-muted">
                        <span className="mt-2 h-1 w-4 shrink-0 rounded-full bg-gradient-to-r from-accent to-accent-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-8 font-display text-2xl font-bold text-white">
              What Sets Me Apart
            </h3>
            <StaggerContainer className="flex flex-wrap gap-3">
              {strengths.map((strength) => (
                <StaggerItem key={strength}>
                  <motion.span
                    whileHover={{ scale: 1.06, y: -3 }}
                    className="inline-block cursor-default rounded-2xl border border-accent/20 bg-accent/5 px-5 py-3 text-sm font-medium text-accent-light transition-colors hover:bg-accent/10"
                  >
                    {strength}
                  </motion.span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlowCard className="glass-accent p-8">
              <h4 className="font-display text-xl font-bold text-white">Where I Shine Most</h4>
              <p className="mb-8 mt-2 text-sm text-muted">
                Strength areas based on real campaign experience.
              </p>
              <div className="space-y-6">
                {focusAreas.map((item, i) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium text-text">{item.label}</span>
                      <span className="font-bold text-accent-2">{item.value}%</span>
                    </div>
                    <div className="relative h-2.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-white via-accent-light to-accent-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
