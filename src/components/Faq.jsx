import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FAQS } from "../data/site";
import Reveal, { SplitWord } from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative overflow-hidden py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-y-8 sm:gap-y-10 lg:gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <p className="eyebrow mb-6">Questions</p>
              <h2 className="display-h2 text-brand-950">
                <SplitWord text="The questions" />
                <br />
                <SplitWord text="we get most." delay={0.15} />
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-brand-900/70 sm:mt-8">
                Plain answers. If something is missing, we pick up the
                phone — no gatekeeping.
              </p>
              <Link to="/#contact" className="btn-primary mt-6 sm:mt-8">
                Ask a different question
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ul className="divide-y divide-brand-900/10 border-y border-brand-900/10">
              {FAQS.map((f, i) => {
                const isOpen = i === open;
                return (
                  <li key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="grid w-full grid-cols-12 items-center gap-3 py-5 text-left sm:gap-4 sm:py-6"
                    >
                      <span className="col-span-2 sm:col-span-1 font-display text-sm text-brand-900/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`col-span-8 sm:col-span-9 font-display text-lg font-semibold tracking-tight transition-colors sm:text-xl md:text-2xl ${
                          isOpen ? "text-accent-600" : "text-brand-950"
                        }`}
                      >
                        {f.q}
                      </span>
                      <span
                        className={`col-span-2 ml-auto grid h-10 w-10 place-items-center rounded-full border transition-all sm:h-11 sm:w-11 ${
                          isOpen
                            ? "border-accent-500 bg-accent-500 rotate-45 text-white"
                            : "border-brand-900/15 text-brand-900"
                        }`}
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 pl-2 pr-2 text-[14px] leading-[1.75] text-brand-900/70 sm:pl-10">
                        {f.a}
                      </p>
                    </motion.div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
