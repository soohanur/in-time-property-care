import { Link } from "react-router-dom";
import { SplitWord } from "../components/Reveal";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-40 md:pt-44 md:pb-32">
      <div className="absolute inset-0 -z-10 hero-grid opacity-50" />
      <div className="container-x">
        <div className="grid grid-cols-12 items-end gap-10">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow mb-6">404 · Off-route</p>
            <h1 className="display-h1 text-brand-950">
              <SplitWord text="That page is" />
              <br />
              <SplitWord text="not" delay={0.1} />{" "}
              <span className="italic font-display text-accent-600">on the schedule.</span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-brand-900/70 sm:mt-8">
              The URL you opened is not on the site map. Head back to the
              home page or browse the full service catalog.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <Link to="/" className="btn-primary">
                Back to home
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link to="/services" className="btn-secondary">See all services</Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="font-display text-[24vw] leading-[0.85] tracking-tightest text-brand-950/10 sm:text-[18vw] lg:text-[14vw]">
              404
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
