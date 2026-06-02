import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease },
  },
};

function PortraitCard({ src, alt }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group relative min-w-0 flex-1"
    >
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-[28px] border border-white/[0.1] bg-white/[0.03] p-5 shadow-[0_28px_80px_-32px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-2xl transition-[border-color,box-shadow] duration-500 ease-out group-hover:border-white/[0.16] group-hover:shadow-[0_36px_100px_-28px_rgba(0,0,0,0.92),0_0_72px_-36px_rgba(255,255,255,0.07)] sm:p-6 md:rounded-[32px] md:p-8"
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-b from-white/[0.04] via-transparent to-black/20" />
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/[0.06]" />

        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="relative z-10 mx-auto block h-auto w-full max-w-full object-contain"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
        />
      </div>
    </motion.div>
  );
}

export default function Spotlight() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          <motion.div variants={item} className="mb-12 text-center md:mb-16 lg:mb-20">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-muted">
              Beyond the screen
            </p>
            <h2 className="font-display text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              The person behind the campaigns
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              A marketer who enjoys the work—and brings the same energy to every campaign.
            </p>
          </motion.div>

          <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-10 md:flex-row md:gap-12 lg:gap-16 xl:gap-20">
            <PortraitCard
              src={profile.images.lifestyle}
              alt={`${profile.name} — portrait`}
            />
            <PortraitCard
              src={profile.images.about}
              alt={`${profile.name} — portrait`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
