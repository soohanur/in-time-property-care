import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { STATS } from "../data/site";
import Reveal, { SplitWord } from "./Reveal";

function Counter({ to, suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(to * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tick">
      {val}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-16 text-white sm:py-20 md:py-28 noise">
      <div className="container-x">
        <Reveal className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 lg:col-span-6">
            <p className="eyebrow mb-6 text-white/65">By the numbers</p>
            <h2 className="display-h2">
              <SplitWord text="Promises we" />
              <br />
              <SplitWord text="actually hold." delay={0.15} />
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="max-w-md text-[15px] leading-[1.75] text-white/65 lg:ml-auto">
              No vanity numbers. The metrics our clients ask about-response
              time, coverage, and the standard our crews measure themselves
              against every single work order.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-12 gap-y-6 border-t border-white/10 pt-10 sm:mt-14 sm:gap-6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="col-span-6 lg:col-span-3 border-l border-white/10 pl-4 sm:pl-6"
            >
              <p className="font-display text-[44px] leading-none tracking-tightest text-white sm:text-[64px] md:text-[88px]">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 max-w-[220px] text-[12px] leading-relaxed text-white/60 sm:text-[13px]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
