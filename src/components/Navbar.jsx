import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
      >
        <nav
          className={`mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-6 ${
            scrolled ? "nav-pill" : "bg-transparent"
          }`}
        >
          <motion.a href="#" whileHover={{ scale: 1.02 }} className="flex items-center">
            <span className="font-display text-base font-bold text-white sm:text-lg">
              {profile.name}
            </span>
          </motion.a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06 }}
              >
                <a
                  href={link.href}
                  className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-white"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-xl nav-active"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="btn-primary relative hidden rounded-xl px-5 py-2.5 text-sm font-bold text-black md:inline-block"
          >
            Hire Me
          </motion.a>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-xl p-2.5 text-muted ring-1 ring-white/10 hover:bg-white/5 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-base/90 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="absolute inset-x-0 bottom-0 rounded-t-3xl border-t border-white/10 bg-surface p-6 pb-10"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-xl font-bold text-white">Navigate</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl p-2 text-muted hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl px-4 py-3.5 text-lg font-medium text-text hover:bg-accent/10"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-6 block rounded-xl py-3.5 text-center font-bold text-black"
              >
                Hire Me
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
