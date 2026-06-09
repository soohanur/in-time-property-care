import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5 font-display">
      <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-brand-900/10">
        <img
          src="/LOGO_-removebg-preview.png"
          alt="In Time Property Care"
          className="h-9 w-9 object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[15px] font-semibold tracking-tight ${light ? "text-white" : "text-brand-900"}`}>
          In Time
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.28em] ${light ? "text-white/65" : "text-brand-700/70"}`}>
          Property Care
        </span>
      </span>
    </Link>
  );
}
