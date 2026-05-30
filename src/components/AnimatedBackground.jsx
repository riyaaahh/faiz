import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-base">
      <div className="absolute inset-0 grid-bg" />

      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-white/[0.04] blur-[160px]"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 top-1/3 h-[450px] w-[450px] rounded-full bg-white/[0.03] blur-[140px]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-base via-transparent to-base" />
    </div>
  );
}
