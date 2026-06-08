import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { useRef } from "react";
import { RevealText } from "./ui";
import { profile, stats } from "../data/portfolio";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-28">
      <motion.div style={{ opacity }} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-20">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="badge-pill mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-2"
            >
              <Sparkles size={14} className="text-white/60" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                Open to New Opportunities
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-muted"
            >
              Hi, I'm {profile.name}
            </motion.p>

            <h1 className="mt-4 font-display text-[2.5rem] font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              <RevealText text={profile.tagline} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-5 text-xl font-bold text-white md:text-2xl"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.6 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              {profile.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary relative rounded-2xl px-8 py-4 text-sm font-bold text-black"
              >
                Start a Project
              </motion.a>
              <motion.a
                href="#work"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-ghost rounded-2xl px-8 py-4 text-sm font-semibold text-white"
              >
                View My Work
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {[
                { icon: Phone, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
                { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
                { icon: MapPin, text: profile.location },
              ].map(({ icon: Icon, text, href }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + i * 0.1 }}
                >
                  {href ? (
                    <a
                      href={href}
                      className="group flex items-center gap-2.5 rounded-xl bg-white/[0.03] px-3 py-2 text-sm text-muted ring-1 ring-white/5 transition-all hover:text-white hover:ring-white/20"
                    >
                      <Icon size={15} className="text-white/70" />
                      {text}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2.5 rounded-xl bg-white/[0.03] px-3 py-2 text-sm text-muted ring-1 ring-white/5">
                      <Icon size={15} className="text-white/70" />
                      {text}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            style={{ y: imageY, scale: imageScale }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 mx-auto w-full max-w-[420px] lg:max-w-none"
          >
            <div className="relative animate-float">
              <div className="ring-pulse absolute -inset-4 rounded-[2rem] border border-white/15" />
              <div className="absolute -inset-6 rounded-[2.5rem] bg-white/[0.03] blur-3xl" />

              <div className="relative overflow-hidden rounded-[1.75rem] image-frame">
                <motion.img
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  src={profile.images.hero}
                  alt={profile.name}
                  className="aspect-[3/4] w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -bottom-4 -left-4 glass-accent rounded-2xl px-5 py-4 md:-left-8"
              >
                <p className="font-display text-3xl font-black gradient-text-static">3+</p>
                <p className="text-xs font-medium text-muted">Brands Worked With</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ delay: 1.4, type: "spring" }}
                className="absolute -top-4 -right-4 glass rounded-2xl p-3 w-[130px] md:w-auto md:px-5 md:py-3.5 md:-top-8 md:-right-8 cursor-default"
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-2.5 text-[11px] font-bold text-white md:text-sm md:tracking-wide leading-tight">
                  <span>Social Media</span>
                  <span className="hidden md:block w-1 h-1 rounded-full bg-white/20 shrink-0" />
                  <span>Content</span>
                  <span className="hidden md:block w-1 h-1 rounded-full bg-white/20 shrink-0" />
                  <span>Meta Ads</span>
                </div>
                <p className="mt-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-white/40 md:text-[10px] md:mt-2">
                  SMM-first growth
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mx-auto grid max-w-4xl grid-cols-2 gap-4 pb-24 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9 + i * 0.08, type: "spring" }}
              whileHover={{ y: -6 }}
              className="card-glow glass group rounded-2xl p-6 text-center"
            >
              <motion.p
                className="font-display text-3xl font-black gradient-text-static"
                whileHover={{ scale: 1.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/15 p-1.5"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
        </motion.div>
      </motion.a>
    </section>
  );
}
