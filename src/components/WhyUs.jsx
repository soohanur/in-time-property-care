import { motion } from "framer-motion";
import Reveal, { SplitWord } from "./Reveal";
import { WHY_US } from "../data/site";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-brand-50 py-20 sm:py-24 md:py-32">
      <div className="container-x">
        <div className="grid grid-cols-12 items-end gap-y-8 sm:gap-y-10 lg:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow mb-6">Why choose us</p>
            <h2 className="display-h2 text-brand-950">
              <SplitWord text="Built on" />{" "}
              <span className="italic font-display text-brand-700">professionalism,</span>
              <br />
              <SplitWord text="integrity," delay={0.1} />{" "}
              <span className="italic font-display text-accent-600">and detail.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="max-w-md text-[15px] leading-[1.75] text-brand-900/70 lg:ml-auto">
              We work closely with property management companies, real estate
              professionals, investors, field service companies, and
              homeowners-completed on time and within scope.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-4 sm:mt-14 md:gap-6">
          {WHY_US.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="col-span-12 sm:col-span-6 lg:col-span-3 group relative h-full rounded-3xl border border-brand-900/10 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand-700/30 hover:shadow-[0_30px_70px_-40px_rgba(14,35,48,0.35)] sm:p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-brand-950">
                {w.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-brand-900/65">
                {w.body}
              </p>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-12 rounded-3xl bg-brand-900 px-6 py-8 text-white sm:mt-14 sm:px-10 sm:py-10">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">Our commitment</p>
              <p className="mt-2 max-w-3xl font-display text-xl leading-[1.3] tracking-tight sm:text-2xl md:text-[28px]">
                Dependable services delivered with professionalism, transparency,
                and care-helping you protect your investments with confidence.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
