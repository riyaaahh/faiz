import { motion } from "framer-motion";
import {
  BarChart3,
  Calendar,
  Globe,
  Image,
  Inbox,
  LineChart,
  Link2,
  Mail,
  MapPin,
  Megaphone,
  MousePointerClick,
  Palette,
  PenTool,
  Search,
  Target,
  UserPlus,
} from "lucide-react";
import AnimatedSection, { SectionHeading, StaggerContainer, StaggerItem, GlowCard } from "./ui";
import { expertise, strengths, focusAreas, tools, technicalSkills } from "../data/portfolio";

const areaIcons = [Megaphone, Search, PenTool, BarChart3];

const technicalSkillIcons = [
  Megaphone,
  Calendar,
  PenTool,
  Palette,
  MousePointerClick,
  BarChart3,
  UserPlus,
  MapPin,
  Search,
  LineChart,
  Target,
  Link2,
  MousePointerClick,
];

const toolIcons = {
  "Meta Ads": Megaphone,
  "Google Ads": MousePointerClick,
  "Google Analytics": BarChart3,
  "Google Search Console": LineChart,
  "Google Business Profile": MapPin,
  Semrush: Search,
  HubSpot: Inbox,
  WordPress: Globe,
  Canva: Palette,
  Photoshop: Image,
  "Email Marketing": Mail,
  "Keyword Research": Target,
};

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="relative py-28 md:py-36">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I Do"
          title="Core Expertise"
          subtitle="A practical toolkit for visibility, leads, and growth"
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
                    className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10"
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-20"
        >
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted">
                Tools I Use
              </p>
              <p className="mt-3 text-sm text-muted">
                The platforms I work with for planning, execution, and performance tracking.
              </p>
            </div>

            <GlowCard className="p-8">
              <StaggerContainer className="flex flex-wrap justify-center gap-3">
                {tools.map((t) => {
                  const ToolIcon = toolIcons[t] ?? Search;
                  return (
                    <StaggerItem key={t}>
                      <motion.span
                        whileHover={{ y: -3, scale: 1.03 }}
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white/90 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white">
                          <ToolIcon size={14} strokeWidth={1.75} />
                        </span>
                        {t}
                      </motion.span>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </GlowCard>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted">
                What I Do Best
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
                Technical Skills
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                A practical toolkit built through real campaigns, on-the-job learning, and
                consistent improvement.
              </p>
            </div>

            <StaggerContainer className="grid gap-4 md:grid-cols-2">
              {technicalSkills.map((s, i) => {
                const Icon = technicalSkillIcons[i] ?? Search;
                return (
                  <StaggerItem key={s.title}>
                    <GlowCard className="group h-full p-7">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                        className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10 transition-colors group-hover:bg-white/15"
                      >
                        <Icon size={22} strokeWidth={1.75} />
                      </motion.div>
                      <h4 className="font-display text-lg font-bold text-white">
                        {s.title}
                      </h4>
                      <p className="mt-3 text-sm leading-relaxed text-muted">
                        {s.description}
                      </p>
                    </GlowCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
