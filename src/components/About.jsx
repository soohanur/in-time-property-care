import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Reveal, { SplitWord } from "./Reveal";
import { ABOUT_IMAGES, COMPANY } from "../data/site";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden py-20 sm:py-24 md:py-32 lg:py-40">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
          <div className="col-span-12 lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <p className="eyebrow mb-6">About the company</p>
              <h2 className="display-h2 text-brand-950">
                <SplitWord text="Your trusted" />
                <br />
                <span className="text-brand-700 italic font-display">partner</span>{" "}
                <SplitWord text="in property" delay={0.15} />
                <br />
                <SplitWord text="preservation." delay={0.25} />
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-brand-900/70 sm:mt-8">
                {COMPANY.name} specializes in protecting, preserving, and
                maintaining residential and commercial properties — occupied,
                vacant, foreclosed, or investment. Quality workmanship, fast
                response, and dependable service from a team that treats every
                work order like it matters.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
                <Link to="/services" className="btn-primary">
                  Our services
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/#contact" className="btn-secondary">Talk to us</Link>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <Reveal y={60} className="col-span-12 sm:col-span-7 relative overflow-hidden rounded-3xl">
                <motion.img
                  style={{ y: imgY }}
                  src={ABOUT_IMAGES.hero}
                  alt="Property care crew on site"
                  loading="lazy"
                  className="h-[280px] w-full object-cover sm:h-[460px]"
                />
              </Reveal>
              <Reveal y={60} delay={0.1} className="col-span-12 sm:col-span-5 flex flex-col gap-4 md:gap-6">
                <div className="relative overflow-hidden rounded-3xl bg-brand-700 p-5 text-white sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/60">Our mission</p>
                  <p className="mt-3 font-display text-[20px] leading-[1.25] text-white sm:text-[22px]">
                    Dependable, high-quality property preservation that protects
                    value and delivers peace of mind.
                  </p>
                  <div className="mt-6 grid h-12 w-12 place-items-center rounded-full bg-accent-500 text-white">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={ABOUT_IMAGES.detail}
                    alt="Maintenance detail"
                    loading="lazy"
                    className="h-[180px] w-full object-cover sm:h-[200px]"
                  />
                </div>
              </Reveal>

              <Reveal y={60} delay={0.15} className="col-span-12 mt-2 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                {[
                  { k: "01", t: "Reliable crews", d: "Experienced field teams." },
                  { k: "02", t: "Fast response", d: "Timely scheduled completion." },
                  { k: "03", t: "In-house support", d: "Processing & reporting." },
                ].map((b, i) => (
                  <motion.div
                    key={b.k}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: i * 0.08 }}
                    className="card-soft p-4 sm:p-5"
                  >
                    <p className="font-display text-xs tracking-[0.2em] text-accent-600">{b.k}</p>
                    <p className="mt-2 font-display text-base font-semibold text-brand-950 sm:text-lg">{b.t}</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-brand-900/65">{b.d}</p>
                  </motion.div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
