import { Link } from "react-router-dom";
import Reveal, { SplitWord } from "../components/Reveal";
import Process from "../components/Process";
import Stats from "../components/Stats";
import Faq from "../components/Faq";
import Cta from "../components/Cta";
import { SERVICES, HERO_IMAGES, COMPANY } from "../data/site";

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-24 pb-8 sm:pt-32 sm:pb-10 md:pt-36 lg:pt-40">
        <div className="absolute inset-0 -z-10 hero-grid opacity-50" />
        <div className="absolute -top-40 right-[-10%] -z-10 h-[280px] w-[280px] rounded-full bg-brand-200/40 blur-[140px] sm:h-[480px] sm:w-[480px]" />

        <div className="container-x">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brand-900/55 sm:mb-8 sm:text-[12px]">
            <Link to="/" className="hover:text-brand-900">Home</Link>
            <span className="text-brand-900/30">/</span>
            <span className="text-brand-900">Services</span>
          </nav>

          <div className="grid grid-cols-12 items-end gap-8">
            <div className="col-span-12 lg:col-span-8">
              <p className="eyebrow mb-5 sm:mb-6">Full service catalog</p>
              <h1 className="display-h1 text-brand-950">
                <SplitWord text="Property care," />{" "}
                <span className="italic font-display text-brand-700">end</span>
                <br />
                <SplitWord text="to end." delay={0.18} />
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <p className="max-w-md text-[15px] leading-[1.7] text-brand-900/70 lg:ml-auto">
                A complete range of preservation and maintenance services for
                residential, commercial, vacant, foreclosed, and investment
                properties — completed on time, within scope, photo-documented.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl sm:mt-14">
            <img
              src={HERO_IMAGES.primary}
              alt="Property care in action"
              className="h-[260px] w-full object-cover sm:h-[380px] md:h-[460px] lg:h-[520px]"
            />
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 md:py-28">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.slug}
                y={60}
                delay={i * 0.05}
                className="group col-span-12 md:col-span-6 lg:col-span-4"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-900/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-brand-700/30 hover:shadow-[0_40px_80px_-50px_rgba(14,35,48,0.4)]">
                  <div className="relative overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="img-zoom h-[220px] w-full object-cover sm:h-[260px]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium tracking-wider text-brand-950 sm:left-5 sm:top-5">
                      {s.no}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
                    <h3 className="font-display text-xl font-semibold tracking-tight text-brand-950 sm:text-2xl">
                      {s.title}
                    </h3>
                    <p className="text-[14px] leading-[1.7] text-brand-900/70">{s.summary}</p>
                    <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[12.5px] text-brand-900/70">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/#contact"
                      className="mt-auto inline-flex items-center gap-2 text-[13px] font-medium text-brand-900 link-underline"
                    >
                      Request this service
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 rounded-3xl bg-brand-900 px-6 py-8 text-white sm:mt-16 sm:px-10 sm:py-10">
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">Need a custom solution?</p>
                <p className="mt-2 max-w-2xl font-display text-xl leading-[1.3] tracking-tight sm:text-2xl md:text-[28px]">
                  We are flexible and ready to adapt to your specific property
                  management needs. <span className="text-accent-300">Reach out today.</span>
                </p>
              </div>
              <a href={COMPANY.phoneHref} className="btn-accent shrink-0">
                Call {COMPANY.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Process />
      <Stats />
      <Faq />
      <Cta />
    </>
  );
}
