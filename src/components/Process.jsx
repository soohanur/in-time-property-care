import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PROCESS } from "../data/site";
import Reveal, { SplitWord } from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-accent-50 py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-y-8 sm:gap-y-10 lg:gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <p className="eyebrow mb-6">How we work</p>
              <h2 className="display-h2 text-brand-950">
                <SplitWord text="Five steps." />
                <br />
                <SplitWord text="Zero" delay={0.1} />{" "}
                <span className="italic font-display text-accent-600">surprises.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-brand-900/70 sm:mt-8">
                The same workflow on a single trash-out as on a recurring
                preservation portfolio. Predictable scheduling, predictable
                reporting, predictable handover.
              </p>
              <div className="mt-8 sm:mt-10">
                <Link to="/#contact" className="btn-primary">
                  Submit a work order
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ul className="relative space-y-3">
              <span className="absolute left-[34px] top-3 bottom-3 hidden w-px bg-brand-900/15 md:block" />
              {PROCESS.map((p, i) => (
                <motion.li
                  key={p.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                  className="group relative rounded-3xl border border-brand-900/10 bg-white p-5 transition-all duration-500 hover:border-brand-700/30 hover:shadow-[0_30px_80px_-40px_rgba(14,35,48,0.4)] sm:p-6 md:p-8"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-700 font-display text-lg font-semibold text-white sm:h-16 sm:w-16 sm:text-xl">
                      {p.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-brand-950 sm:text-xl md:text-2xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-[14px] leading-[1.75] text-brand-900/70">
                        {p.body}
                      </p>
                    </div>
                    <svg viewBox="0 0 24 24" className="hidden h-5 w-5 shrink-0 text-brand-900/40 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-accent-600 md:block" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
