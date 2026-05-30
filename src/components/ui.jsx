import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay, ease },
  }),
};

export default function AnimatedSection({ children, className = "", delay = 0, id, alt = false }) {
  return (
    <motion.section
      id={id}
      className={`${alt ? "section-alt" : ""} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={fadeUp}
      custom={delay}
    >
      {children}
    </motion.section>
  );
}

export function StaggerContainer({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, rotateX: 8 },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          transition: { duration: 0.7, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({ text, className = "" }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.3 + i * 0.07, ease }}
          className="mr-[0.28em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-16 text-center md:mb-20">
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full badge-pill px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-accent-light"
        >
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="h-1.5 w-1.5 rounded-full bg-white"
          />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
        className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.35, ease }}
        className="mx-auto mt-8 flex items-center justify-center gap-2"
      >
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-white/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-white" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-white/40" />
      </motion.div>
    </div>
  );
}

export function ParallaxImage({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [2, -2]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, rotate }}>{children}</motion.div>
    </div>
  );
}

export function GlowCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`card-glow rounded-2xl glass hover:shadow-[0_24px_70px_-20px_rgba(255,255,255,0.08)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
