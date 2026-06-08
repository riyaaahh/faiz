import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand, Layers, Play } from "lucide-react";
import AnimatedSection, { SectionHeading, StaggerContainer, StaggerItem } from "./ui";
import { creativeWorks, workCategories } from "../data/portfolio";

const ease = [0.22, 1, 0.36, 1];

function WorkMedia({ work, className = "", preview = false }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (preview && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (preview && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  if (work.type === "video") {
    return (
      <video
        ref={videoRef}
        src={work.video}
        muted
        loop
        playsInline
        preload="metadata"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={className}
      />
    );
  }

  return (
    <img
      src={work.image}
      alt={work.title}
      loading="lazy"
      className={className}
    />
  );
}

function WorkCard({ work, onOpen }) {
  const isVideo = work.type === "video";

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(work)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
      className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] text-left shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
    >
      <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5]">
        <WorkMedia
          work={work}
          preview={isVideo}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

        <div
          className="pointer-events-none absolute left-0 top-0 h-1 w-full opacity-80"
          style={{ background: `linear-gradient(90deg, ${work.accent}, transparent)` }}
        />

        {isVideo && (
          <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md">
            <Play size={10} fill="currentColor" />
            Reel
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 p-5">
          <span
            className="mb-2 inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90"
            style={{ backgroundColor: `${work.accent}33`, border: `1px solid ${work.accent}55` }}
          >
            {work.client}
          </span>
          <h3 className="font-display text-base font-bold leading-snug text-white md:text-lg">
            {work.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
          {isVideo ? <Play size={16} fill="currentColor" /> : <Expand size={16} />}
        </div>
      </div>
    </motion.button>
  );
}

function Lightbox({ work, onClose }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  const isVideo = work.type === "video";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl md:p-8"
      onClick={onClose}
    >
      <motion.button
        type="button"
        onClick={onClose}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15 }}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 md:right-8 md:top-8"
        aria-label="Close preview"
      >
        <X size={20} />
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.45, ease }}
        className="flex max-h-[92vh] w-full max-w-5xl flex-col gap-6 overflow-y-auto md:flex-row md:items-center md:gap-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative mx-auto w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_32px_80px_-20px_rgba(0,0,0,0.8)] md:max-w-md">
          {isVideo ? (
            <video
              src={work.video}
              controls
              autoPlay
              playsInline
              className="block h-auto w-full object-contain"
            />
          ) : (
            <img src={work.image} alt={work.title} className="block h-auto w-full object-contain" />
          )}
        </div>

        <div className="flex flex-1 flex-col justify-center text-center md:text-left">
          <span
            className="mb-3 inline-block self-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] md:self-start"
            style={{
              color: work.accent,
              backgroundColor: `${work.accent}22`,
              border: `1px solid ${work.accent}44`,
            }}
          >
            {work.client}
          </span>
          <h3 className="font-display text-2xl font-bold text-white md:text-3xl">{work.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">{work.description}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CreativeWork() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedWork, setSelectedWork] = useState(null);

  const filtered =
    activeCategory === "all"
      ? creativeWorks
      : creativeWorks.filter((w) => w.category === activeCategory);

  return (
    <AnimatedSection id="work" alt className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Creative Portfolio"
          title="Designs That Drive Action"
          subtitle="Posters, reels, promos, and brand creatives crafted for real clients — built to stop the scroll and deliver clear messages."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12 flex flex-wrap items-center justify-center gap-2 md:mb-16"
        >
          {workCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count =
              cat.id === "all"
                ? creativeWorks.length
                : creativeWorks.filter((w) => w.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 md:px-5 md:py-2.5 md:text-sm ${
                  isActive
                    ? "bg-white text-black shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
                    : "border border-white/10 bg-white/[0.03] text-muted hover:border-white/20 hover:text-white"
                }`}
              >
                {cat.label}
                <span
                  className={`ml-1.5 tabular-nums ${isActive ? "text-black/50" : "text-white/30"}`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease }}
          >
            <StaggerContainer className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
              {filtered.map((work) => (
                <StaggerItem key={work.id}>
                  <WorkCard work={work} onOpen={setSelectedWork} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="py-16 text-center text-muted">No projects in this category yet.</p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-16 flex items-center justify-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-5 backdrop-blur-xl md:mt-20"
        >
          <Layers size={18} className="shrink-0 text-white/50" />
          <p className="text-center text-sm text-muted md:text-base">
            <span className="font-semibold text-white">{creativeWorks.length} creatives</span>
            {" "}across reels, social media, recruitment, branding, and more.
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedWork && <Lightbox work={selectedWork} onClose={() => setSelectedWork(null)} />}
      </AnimatePresence>
    </AnimatedSection>
  );
}
