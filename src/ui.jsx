import { useEffect, useRef } from "react";

export function Reveal({ children, className = "", delay = 0 }) {
  const r = useRef(null);
  useEffect(() => {
    const el = r.current;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={r} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

export function Star({ on = true, className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill={on ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" />
    </svg>
  );
}

const TONES = ["bg-brand text-white", "bg-accent text-ink", "bg-soft text-ink", "bg-ink text-white"];

export function Art({ e, label, i = 0, className = "", src, pos = "center", fit = "cover", eager = false }) {
  if (src) {
    return (
      <div className={`relative h-full w-full overflow-hidden bg-ink ${className}`}>
        <img src={src} alt={label} loading={eager ? "eager" : "lazy"} style={{ objectPosition: pos }} className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover transition duration-500 group-hover:scale-105"}`} />
      </div>
    );
  }
  return (
    <div role="img" aria-label={label} className={`relative flex h-full w-full items-center justify-center overflow-hidden ${TONES[i % 4]} ${className}`}>
      <span className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/15" />
      <span className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-black/10" />
      <span className="relative text-6xl transition duration-500 group-hover:scale-125 md:text-8xl">{e}</span>
    </div>
  );
}
