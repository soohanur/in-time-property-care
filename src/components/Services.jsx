import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/site";
import Reveal, { SplitWord } from "./Reveal";

export default function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section id="services" className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-24 md:py-32 lg:py-40 noise">
      <div className="container-x">
        <div className="grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow mb-6 text-white/70">What we do</p>
            <h2 className="display-h2">
              <SplitWord text="Eight core" />
              <br />
              <SplitWord text="property" delay={0.1} />{" "}
              <span className="italic font-display text-accent-300">care</span>{" "}
              <SplitWord text="services." delay={0.2} />
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="max-w-md text-[15px] leading-[1.75] text-white/65 lg:ml-auto">
              From emergency securing and winterization to landscaping,
              trash-out, and ongoing general maintenance — efficient solutions
              tailored to each property. Pick one to see the scope.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-y-10 sm:mt-14 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {SERVICES.map((s, i) => {
                const open = i === active;
                return (
                  <li key={s.no}>
                    <button
                      onClick={() => setActive(i)}
                      className="group grid w-full grid-cols-12 items-center gap-3 py-5 text-left transition-colors hover:bg-white/[0.03] sm:gap-4 sm:py-6"
                    >
                      <span className="col-span-2 sm:col-span-1 font-display text-sm text-white/40">
                        {s.no}
                      </span>
                      <span className="col-span-7 sm:col-span-7 font-display text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
                        <span className={`transition-colors ${open ? "text-accent-300" : "text-white"}`}>
                          {s.title}
                        </span>
                      </span>
                      <span className="col-span-3 sm:col-span-3 hidden text-[12px] uppercase tracking-[0.22em] text-white/45 sm:block">
                        {s.bullets.length} deliverables
                      </span>
                      <span
                        className={`col-span-3 sm:col-span-1 ml-auto grid h-10 w-10 place-items-center rounded-full border transition-all sm:h-11 sm:w-11 ${
                          open
                            ? "border-accent-300 bg-accent-500 text-white rotate-45"
                            : "border-white/20 text-white group-hover:border-white"
                        }`}
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-12 gap-6 pb-6 pl-2 pr-2 sm:pb-8 sm:pl-10">
                        <div className="col-span-12 md:hidden">
                          <div className="overflow-hidden rounded-2xl">
                            <img
                              src={s.image}
                              alt={s.title}
                              loading="lazy"
                              className="h-44 w-full object-cover"
                            />
                          </div>
                        </div>
                        <p className="col-span-12 md:col-span-7 text-[14px] leading-[1.75] text-white/70">
                          {s.summary}
                        </p>
                        <ul className="col-span-12 md:col-span-5 grid grid-cols-2 gap-x-4 gap-y-2 text-[12.5px] text-white/75">
                          {s.bullets.map((b) => (
                            <li key={b} className="flex items-center gap-2">
                              <span className="h-1 w-1 rounded-full bg-accent-400" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/services" className="btn-accent">
                Browse all services
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-brand-950"
              >
                Request a quote
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2 hidden lg:block">
            <Reveal className="sticky top-28">
              <div className="relative overflow-hidden rounded-3xl">
                <motion.img
                  key={current.image}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                  src={current.image}
                  alt={current.title}
                  className="h-[440px] w-full object-cover sm:h-[560px]"
                />
                <div className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium tracking-wider text-brand-950">
                  {current.no} · {current.title}
                </div>
                <Link to="/#contact" className="absolute right-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-accent-500 px-4 py-2 text-[12px] font-medium text-white">
                  Quote this service
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
