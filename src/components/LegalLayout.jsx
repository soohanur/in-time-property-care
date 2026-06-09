import { Link } from "react-router-dom";

export default function LegalLayout({ title, italic, effectiveDate, children }) {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-32 md:pt-36 lg:pt-40">
      <div className="absolute inset-0 -z-10 hero-grid opacity-50" />
      <div className="absolute -top-40 right-[-10%] -z-10 h-[280px] w-[280px] rounded-full bg-brand-200/40 blur-[140px] sm:h-[480px] sm:w-[480px]" />

      <div className="container-x">
        <div className="grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="display-h2 text-brand-950">
              {title}
              {italic && (
                <>
                  {" "}
                  <span className="italic font-display text-brand-700">{italic}</span>
                </>
              )}
            </h1>
            {effectiveDate && (
              <p className="mt-6 text-[13px] uppercase tracking-[0.22em] text-brand-900/55">
                Effective Date: <span className="text-brand-900">{effectiveDate}</span>
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-12 gap-8 sm:mt-16 lg:gap-12">
          <article className="col-span-12 lg:col-span-8 space-y-10 text-[15px] leading-[1.8] text-brand-900/80">
            {children}
          </article>
          <aside className="col-span-12 lg:col-span-4">
            <div className="sticky top-28 rounded-3xl border border-brand-900/10 bg-white p-6 sm:p-7">
              <p className="text-[11px] uppercase tracking-[0.24em] text-brand-700">Need help?</p>
              <p className="mt-3 font-display text-xl tracking-tight text-brand-950">
                Questions about this document?
              </p>
              <p className="mt-3 text-[13.5px] leading-[1.7] text-brand-900/65">
                Reach out and we will get back the same business day.
              </p>
              <Link to="/contact" className="btn-primary mt-6 w-full justify-center">
                Contact us
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function LegalSection({ heading, children }) {
  return (
    <section>
      <h2 className="font-display text-[22px] font-semibold tracking-tight text-brand-950 sm:text-[26px]">
        {heading}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function LegalList({ items }) {
  return (
    <ul className="ml-5 list-disc space-y-2 text-brand-900/75">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
