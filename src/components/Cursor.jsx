import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
    };
    const raf = () => {
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      }
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    window.addEventListener("mousemove", move);

    const targets = document.querySelectorAll("a, button, [data-cursor='hover']");
    const onEnter = () => setHover(true);
    const onLeave = () => setHover(false);
    targets.forEach((t) => {
      t.addEventListener("mouseenter", onEnter);
      t.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("mousemove", move);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", onEnter);
        t.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 rounded-full bg-ink-950 mix-blend-difference md:block"
        style={{ filter: "invert(1)" }}
      />
      <div
        ref={ring}
        className={`pointer-events-none fixed left-0 top-0 z-[100] hidden h-9 w-9 rounded-full border border-ink-950 transition-[transform,width,height,opacity] duration-200 mix-blend-difference md:block ${
          hover ? "scale-[1.6] opacity-90" : "scale-100 opacity-60"
        }`}
        style={{ filter: "invert(1)" }}
      />
    </>
  );
}
