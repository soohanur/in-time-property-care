import { Link } from "react-router-dom";
import Reveal, { SplitWord } from "../components/Reveal";
import { COMPANY, SERVICES } from "../data/site";

const CONTACT_CARDS = (company) => [
  {
    label: "Call us",
    value: company.phoneDisplay,
    detail: "Mon–Fri · 8:00 AM – 6:00 PM",
    href: company.phoneHref,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l2.02-1.29a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92Z" />
    ),
  },
  {
    label: "Email",
    value: company.email,
    detail: "Same business day response",
    href: company.emailHref,
    icon: (
      <>
        <path d="M4 4h16c1 0 2 1 2 2v12c0 1-1 2-2 2H4c-1 0-2-1-2-2V6c0-1 1-2 2-2Z" />
        <path d="m22 6-10 7L2 6" />
      </>
    ),
  },
  {
    label: "Office",
    value: company.address,
    detail: "Headquarters",
    href: null,
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function ContactPage() {
  const cards = CONTACT_CARDS(COMPANY);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-36 lg:pt-40">
        <div className="absolute inset-0 -z-10 hero-grid opacity-50" />
        <div className="absolute -top-40 right-[-10%] -z-10 h-[280px] w-[280px] rounded-full bg-brand-200/40 blur-[140px] sm:h-[480px] sm:w-[480px]" />

        <div className="container-x">
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-brand-900/55 sm:mb-8 sm:text-[12px]">
            <Link to="/" className="hover:text-brand-900">Home</Link>
            <span className="text-brand-900/30">/</span>
            <span className="text-brand-900">Contact</span>
          </nav>

          <div className="grid grid-cols-12 items-end gap-8">
            <div className="col-span-12 lg:col-span-8">
              <p className="eyebrow mb-5 sm:mb-6">Contact us</p>
              <h1 className="display-h1 text-brand-950">
                <SplitWord text="Let's protect" />{" "}
                <span className="italic font-display text-brand-700">your</span>
                <br />
                <SplitWord text="next property." delay={0.18} />
              </h1>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <p className="max-w-md text-[15px] leading-[1.7] text-brand-900/70 lg:ml-auto">
                Tell us the property, the scope, and the deadline. We respond
                fast, schedule the crew, and close the work order on time.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-12 gap-4 sm:mt-14 md:gap-6">
            {cards.map((c) => {
              const inner = (
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-brand-900/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-700/30 hover:shadow-[0_30px_70px_-40px_rgba(14,35,48,0.35)] sm:p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-700 text-white">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      {c.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-brand-700">{c.label}</p>
                    <p className="mt-3 font-display text-lg font-semibold leading-tight text-brand-950 sm:text-xl">
                      {c.value}
                    </p>
                    <p className="mt-2 text-[13px] text-brand-900/60">{c.detail}</p>
                  </div>
                </div>
              );
              return (
                <Reveal key={c.label} y={40} className="col-span-12 md:col-span-4">
                  {c.href ? (
                    <a href={c.href} className="block h-full">{inner}</a>
                  ) : (
                    inner
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact-form" className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-24 md:py-28 noise">
        <div className="absolute -right-24 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-accent-500/20 blur-[160px] sm:h-[480px] sm:w-[480px]" />
        <div className="container-x relative">
          <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
            <div className="col-span-12 lg:col-span-5">
              <p className="eyebrow mb-6 text-white/65">Send us a message</p>
              <h2 className="display-h2 text-white">
                <SplitWord text="Request" />{" "}
                <span className="italic font-display text-accent-300">service</span>
                <br />
                <SplitWord text="in two minutes." delay={0.15} />
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-white/65 sm:mt-8">
                Drop your contact info, the property address, and a short note
                on the scope. We reply same business day with next steps.
              </p>

              <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                  <dt className="text-[11px] uppercase tracking-[0.24em] text-white/55">Business hours</dt>
                  <dd className="mt-3 font-display text-base font-semibold text-white">{COMPANY.hours}</dd>
                  <dd className="mt-1 text-[12.5px] text-white/65">{COMPANY.hoursNote}</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                  <dt className="text-[11px] uppercase tracking-[0.24em] text-white/55">Office address</dt>
                  <dd className="mt-3 font-display text-base font-semibold text-white">{COMPANY.address}</dd>
                  <dd className="mt-1 text-[12.5px] text-white/65">Residential · Commercial · Investor</dd>
                </div>
              </dl>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <Reveal className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-8">
                <form className="grid grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                  <label className="col-span-2 grid gap-2 sm:col-span-1">
                    <span className="text-[12px] uppercase tracking-[0.22em] text-white/60">Full name</span>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:border-accent-400 focus:outline-none"
                    />
                  </label>
                  <label className="col-span-2 grid gap-2 sm:col-span-1">
                    <span className="text-[12px] uppercase tracking-[0.22em] text-white/60">Phone</span>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 555-5555"
                      className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:border-accent-400 focus:outline-none"
                    />
                  </label>
                  <label className="col-span-2 grid gap-2">
                    <span className="text-[12px] uppercase tracking-[0.22em] text-white/60">Email</span>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:border-accent-400 focus:outline-none"
                    />
                  </label>
                  <label className="col-span-2 grid gap-2">
                    <span className="text-[12px] uppercase tracking-[0.22em] text-white/60">Service interest</span>
                    <select className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white focus:border-accent-400 focus:outline-none">
                      <option value="" className="text-brand-950">Select a service…</option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.slug} className="text-brand-950">
                          {s.title}
                        </option>
                      ))}
                      <option value="other" className="text-brand-950">Other / Custom</option>
                    </select>
                  </label>
                  <label className="col-span-2 grid gap-2">
                    <span className="text-[12px] uppercase tracking-[0.22em] text-white/60">Property address</span>
                    <input
                      type="text"
                      placeholder="Street, City, State"
                      className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:border-accent-400 focus:outline-none"
                    />
                  </label>
                  <label className="col-span-2 grid gap-2">
                    <span className="text-[12px] uppercase tracking-[0.22em] text-white/60">Scope & notes</span>
                    <textarea
                      rows={4}
                      placeholder="Tell us about the property and the work needed…"
                      className="rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3.5 text-[15px] text-white placeholder:text-white/40 focus:border-accent-400 focus:outline-none"
                    />
                  </label>

                  <label className="col-span-2 mt-2 flex items-start gap-3 rounded-2xl border border-white/15 bg-white/[0.03] p-4 text-[13px] leading-[1.7] text-white/75">
                    <input
                      type="checkbox"
                      required
                      defaultChecked={false}
                      className="mt-1 h-4 w-4 shrink-0 accent-accent-500"
                    />
                    <span>
                      By checking this box, I agree to receive SMS/text messages
                      from In Time Property Care regarding my inquiry or account.
                      Reply STOP at any time to opt-out. Message and data rates
                      may apply. I have read and agree to the{" "}
                      <Link to="/privacy" className="text-accent-300 underline-offset-4 hover:underline">
                        Privacy Policy
                      </Link>.
                    </span>
                  </label>

                  <button type="submit" className="col-span-2 btn-accent mt-2 justify-center">
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
    </>
  );
}
