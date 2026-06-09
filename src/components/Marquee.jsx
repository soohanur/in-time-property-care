import { MARQUEE_PHRASES } from "../data/site";

export default function Marquee() {
  const items = [...MARQUEE_PHRASES, ...MARQUEE_PHRASES];
  return (
    <section className="relative border-y border-brand-900/10 bg-white py-6">
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap pr-8 sm:gap-14 sm:pr-14">
          {items.map((c, i) => (
            <div key={i} className="flex items-center gap-8 text-brand-900/75 sm:gap-14">
              <span className="font-display text-lg tracking-tight sm:text-2xl md:text-3xl">
                {c}
              </span>
              <span className="grid h-2.5 w-2.5 place-items-center rounded-full bg-accent-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
