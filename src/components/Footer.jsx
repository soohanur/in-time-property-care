import { Link } from "react-router-dom";
import Logo from "./Logo";
import { NAV, ROUTES, SERVICES, COMPANY } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white">
      <div className="container-x pt-20 pb-10">
        <div className="grid grid-cols-12 gap-8 border-b border-white/10 pb-14 sm:gap-10">
          <div className="col-span-12 md:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm text-[14px] leading-[1.75] text-white/60">
              {COMPANY.name} delivers reliable, professional, and timely
              property preservation and maintenance services for residential
              and commercial properties — {COMPANY.tagline.toLowerCase()}
            </p>
            <div className="mt-8 grid gap-2.5 text-[13px] text-white/70">
              <a href={COMPANY.phoneHref} className="link-underline hover:text-accent-300">
                {COMPANY.phoneDisplay}
              </a>
              <a href={COMPANY.emailHref} className="link-underline break-all hover:text-accent-300">
                {COMPANY.email}
              </a>
              <span className="text-white/55">{COMPANY.address}</span>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Navigate</p>
            <ul className="mt-6 space-y-3">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-[14px] text-white/75 link-underline hover:text-accent-300">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 sm:col-span-6 md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Services</p>
            <ul className="mt-6 space-y-3 text-[14px] text-white/75">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={ROUTES.services} className="link-underline hover:text-accent-300">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">Business hours</p>
            <p className="mt-6 text-[14px] leading-[1.75] text-white/75">
              {COMPANY.hours}
              <br />
              <span className="text-white/55">{COMPANY.hoursNote}</span>
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3 text-[13px] font-medium text-white transition-colors hover:bg-accent-600"
            >
              Request service
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 text-[12px] text-white/55 md:flex-row md:items-center">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-white/65">
            <li>
              <Link to="/privacy" className="link-underline hover:text-accent-300">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="link-underline hover:text-accent-300">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="/contact" className="link-underline hover:text-accent-300">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-white/10">
        <div className="container-x py-6">
          <p className="font-display text-[clamp(32px,7.5vw,140px)] leading-[0.85] tracking-tightest text-white/[0.06] whitespace-nowrap text-center">
            In Time Property Care
          </p>
        </div>
      </div>
    </footer>
  );
}
