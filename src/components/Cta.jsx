import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal, { SplitWord } from "./Reveal";
import { COMPANY } from "../data/site";

export default function Cta() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const rot = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-24 md:py-32 lg:py-44 noise">
      <motion.div
        style={{ y, rotate: rot }}
        className="absolute -right-24 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-accent-500/20 blur-[160px] sm:h-[480px] sm:w-[480px]"
      />
      <div className="container-x relative">
        <div className="grid grid-cols-12 items-end gap-y-10 lg:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow mb-6 text-white/65">Get in touch</p>
            <h2 className="display-h1 leading-[0.95] text-white">
              <SplitWord text="Ready when" />
              <br />
              <SplitWord text="you" delay={0.1} />{" "}
              <span className="italic font-display text-accent-300">are.</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-white/65 sm:mt-8">
              Tell us the property, the scope, and the deadline. We respond fast,
              schedule the crew, and close the work order on time.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
              <a href={COMPANY.phoneHref} className="btn-accent">
                Call {COMPANY.phoneDisplay}
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l2.02-1.29a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92Z" />
                </svg>
              </a>
              <a
                href={COMPANY.emailHref}
                className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/20 px-5 py-3.5 text-[13px] font-medium text-white transition-all duration-300 hover:bg-white hover:text-brand-950 sm:px-6 sm:text-sm"
              >
                <span className="truncate">{COMPANY.email}</span>
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <dt className="text-[11px] uppercase tracking-[0.24em] text-white/55">Business hours</dt>
                <dd className="mt-3 font-display text-base font-semibold text-white">{COMPANY.hours}</dd>
                <dd className="mt-1 text-[12.5px] text-white/65">{COMPANY.hoursNote}</dd>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                <dt className="text-[11px] uppercase tracking-[0.24em] text-white/55">Office</dt>
                <dd className="mt-3 font-display text-base font-semibold text-white">{COMPANY.address}</dd>
                <dd className="mt-1 text-[12.5px] text-white/65">Serving residential, commercial & investor portfolios</dd>
              </div>
            </dl>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <Reveal className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:p-6">
              <p className="font-display text-xl text-white">Request service</p>
              <p className="mt-1 text-[12.5px] text-white/55">Tell us about the property. We reply same business day.</p>
              <form className="mt-6 grid grid-cols-2 gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Full name"
                  className="col-span-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:border-accent-400 focus:outline-none sm:col-span-1"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="col-span-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:border-accent-400 focus:outline-none sm:col-span-1"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="col-span-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:border-accent-400 focus:outline-none"
                />
                <select className="col-span-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white focus:border-accent-400 focus:outline-none">
                  <option className="text-brand-950">Service interest…</option>
                  <option className="text-brand-950">Initial securing</option>
                  <option className="text-brand-950">Winterization</option>
                  <option className="text-brand-950">Yard care & landscaping</option>
                  <option className="text-brand-950">Roofing</option>
                  <option className="text-brand-950">Plumbing</option>
                  <option className="text-brand-950">Trash out & debris removal</option>
                  <option className="text-brand-950">Eviction support</option>
                  <option className="text-brand-950">General maintenance</option>
                </select>
                <textarea
                  rows={3}
                  placeholder="Property address & scope…"
                  className="col-span-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:border-accent-400 focus:outline-none"
                />
                <button type="submit" className="col-span-2 btn-accent justify-center">
                  Send request
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
