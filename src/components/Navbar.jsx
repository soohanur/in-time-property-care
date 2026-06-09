import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, Link, useLocation } from "react-router-dom";
import { NAV, COMPANY } from "../data/site";
import Logo from "./Logo";

function isActiveItem(item, pathname, hash) {
  if (item.section) return pathname === "/" && hash === `#${item.section}`;
  return pathname === item.to;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { pathname, hash } = location;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-5"
        }`}
      >
        <div className="container-x">
          <nav
            className={`flex items-center justify-between rounded-full border px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-500 ${
              scrolled
                ? "border-brand-900/10 bg-white/90 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(14,35,48,0.25)]"
                : "border-white/40 bg-white/70 backdrop-blur-md"
            }`}
          >
            <Logo />
            <ul className="hidden items-center gap-1 lg:flex">
              {NAV.map((n) => {
                const active = isActiveItem(n, pathname, hash);
                return (
                  <li key={n.to}>
                    <NavLink
                      to={n.to}
                      className={`relative inline-flex rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                        active ? "text-brand-900" : "text-brand-900/70 hover:text-brand-900"
                      }`}
                    >
                      <span className="relative">
                        {n.label}
                        {active && (
                          <motion.span
                            layoutId="navdot"
                            className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent-500"
                          />
                        )}
                      </span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-2">
              <a
                href={COMPANY.phoneHref}
                className="hidden items-center gap-2 rounded-full border border-brand-900/10 px-4 py-2 text-[12px] font-medium text-brand-900 xl:inline-flex"
              >
                <span className="grid h-4 w-4 place-items-center rounded-full bg-accent-500 text-white">
                  <svg viewBox="0 0 24 24" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l2.02-1.29a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                {COMPANY.phoneDisplay}
              </a>
              <Link to="/contact" className="btn-primary hidden md:inline-flex">
                Request service
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="grid h-11 w-11 place-items-center rounded-full bg-brand-900 text-white lg:hidden"
              >
                <span className="relative block h-3.5 w-5">
                  <span
                    className={`absolute left-0 top-0 h-[2px] w-5 bg-current transition-transform ${
                      open ? "translate-y-[6px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-5 bg-current transition-transform ${
                      open ? "-translate-y-[6px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-950/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-[420px] flex-col bg-white p-6 pt-24"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-1">
                {NAV.map((n, i) => {
                  const active = isActiveItem(n, pathname, hash);
                  return (
                    <motion.li
                      key={n.to}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 * i + 0.1, duration: 0.5 }}
                    >
                      <NavLink
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between border-b border-brand-900/10 py-4 text-2xl font-display font-semibold tracking-tight transition-colors ${
                          active ? "text-accent-500" : "text-brand-900"
                        }`}
                      >
                        {n.label}
                        <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent-500" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </NavLink>
                    </motion.li>
                  );
                })}
              </ul>
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-accent mt-8 w-full justify-center">
                Request service
              </Link>
              <div className="mt-auto border-t border-brand-900/10 pt-6">
                <a href={COMPANY.phoneHref} className="text-sm font-medium text-brand-900">
                  {COMPANY.phoneDisplay}
                </a>
                <a href={COMPANY.emailHref} className="mt-1 block break-all text-xs text-brand-900/65">
                  {COMPANY.email}
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
