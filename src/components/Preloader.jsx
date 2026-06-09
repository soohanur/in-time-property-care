import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v += Math.random() * 18 + 6;
      if (v >= 100) {
        v = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 350);
      }
      setPct(Math.floor(v));
    }, 120);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.7, 0, 0.3, 1] } }}
          className="fixed inset-0 z-[200] grid grid-cols-12 items-end bg-brand-950 px-6 pb-10 text-white sm:px-10"
        >
          <div className="col-span-6 font-display text-lg tracking-tight">
            In Time <span className="text-accent-300">Property Care</span>
          </div>
          <div className="col-span-6 flex items-end justify-end gap-4">
            <span className="font-display text-[14vw] leading-[0.9] tracking-tightest text-white sm:text-[10vw]">
              {String(pct).padStart(3, "0")}
            </span>
            <span className="pb-3 text-sm text-white/55">/ 100</span>
          </div>
          <div className="col-span-12 mt-6 h-px w-full bg-white/10">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ ease: "linear", duration: 0.15 }}
              className="block h-px bg-accent-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
