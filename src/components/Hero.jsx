import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { SplitWord } from "./Reveal";
import { HERO_IMAGES, COMPANY } from "../data/site";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate overflow-hidden pt-24 pb-10 sm:pt-32 md:pt-36 lg:pt-40"
    >
      <div className="absolute inset-0 -z-10 hero-grid opacity-50" />
      <div className="absolute -top-40 right-[-10%] -z-10 h-[320px] w-[320px] rounded-full bg-brand-200/45 blur-[140px] sm:h-[520px] sm:w-[520px]" />
      <div className="absolute top-[40%] -left-32 -z-10 h-[260px] w-[260px] rounded-full bg-accent-200/30 blur-[140px] sm:h-[420px] sm:w-[420px]" />

      <div className="container-x">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <motion.div style={{ y: textY }} className="col-span-12">
            <div className="mb-6 flex flex-wrap items-center gap-3 sm:mb-8 sm:gap-4">
              <span className="eyebrow">Property Preservation & Maintenance</span>
              <span className="hidden h-px flex-1 bg-brand-900/15 sm:block" />
              <span className="hidden text-xs text-brand-900/55 sm:inline">Residential · Commercial · Investor</span>
            </div>

            <h1 className="display-h1 text-brand-950">
              <SplitWord text="Protecting" />
              <br />
              <span className="inline-flex max-w-full flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-x-4">
                <SplitWord text="your property," delay={0.15} />
              </span>
              <br />
              <span className="inline-flex max-w-full flex-wrap items-baseline gap-x-3 gap-y-1 sm:gap-x-4">
                <SplitWord text="right on" delay={0.35} />
                <span className="relative inline-block align-bottom">
                  <motion.span
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                    className="absolute inset-x-0 bottom-2 -z-10 h-[0.55em] bg-accent-300/70"
                  />
                  <SplitWord text="time." delay={0.55} />
                </span>
              </span>
            </h1>

            <div className="mt-8 grid grid-cols-12 items-end gap-y-6 sm:mt-10">
              <div className="col-span-12 md:col-span-5">
                <p className="max-w-md text-[15px] leading-[1.7] text-brand-900/70">
                  {COMPANY.name} delivers reliable, professional, and timely
                  property preservation and maintenance for residential and
                  commercial properties-securing, winterization, yard care,
                  trash-out, and full general maintenance.
                </p>
              </div>
              <div className="col-span-12 md:col-span-7">
                <div className="flex flex-wrap items-center gap-3 md:justify-end">
                  <Link to="/contact" className="btn-primary">
                    Request service
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link to="/services" className="btn-secondary">
                    See all services
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-4 sm:mt-14 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="col-span-12 lg:col-span-8 group relative overflow-hidden rounded-3xl"
          >
            <motion.img
              style={{ y: imgY, scale: imgScale }}
              src={HERO_IMAGES.primary}
              alt="Well-maintained residential property"
              loading="eager"
              className="h-[360px] w-full object-cover sm:h-[460px] md:h-[540px] lg:h-[620px]"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 sm:inset-x-6 sm:bottom-6">
              <div className="rounded-2xl bg-brand-950/65 px-4 py-3 text-white backdrop-blur-md sm:px-5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/70 sm:text-[11px]">Service promise</p>
                <p className="font-display text-base font-semibold sm:text-lg">{COMPANY.tagline}</p>
              </div>
              <Link
                to="/services"
                className="hidden h-12 w-12 place-items-center rounded-full bg-accent-500 text-white transition-transform hover:scale-105 sm:grid md:h-14 md:w-14"
                aria-label="Browse services"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6 lg:h-full"
          >
            <div className="relative flex flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-brand-900 p-5 text-white sm:p-6 lg:flex-1 noise">
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">Trusted by</p>
                <span className="text-[11px] text-accent-300">Owners · Managers · Investors</span>
              </div>
              <p className="font-display text-[36px] leading-[0.95] tracking-tightest sm:text-[42px]">
                48<span className="text-accent-400">h</span>
                <span className="block text-[14px] tracking-normal text-white/70 sm:inline sm:text-[16px]"> standard response window</span>
              </p>
              <ul className="grid grid-cols-2 gap-2 text-[12px] text-white/70">
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent-400" /> Reliable</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent-400" /> Professional</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent-400" /> Timely</li>
                <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent-400" /> Insured</li>
              </ul>
            </div>
            <div className="group relative overflow-hidden rounded-3xl">
              <img
                src={HERO_IMAGES.secondary}
                alt="Property care inspection"
                loading="lazy"
                className="img-zoom h-[200px] w-full object-cover sm:h-[260px] md:h-[300px] lg:h-[320px]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 px-4 py-3 backdrop-blur sm:inset-x-5 sm:bottom-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-brand-900/55">In-house</p>
                <p className="text-sm font-medium text-brand-900">Processing & client support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
