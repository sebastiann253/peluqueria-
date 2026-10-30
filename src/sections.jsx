import { useEffect, useState } from "react";
import S, { wa } from "./site";
import { Reveal, Star, Art } from "./ui";

const LINKS = [["Servicios", "#servicios"], ["Galería", "#galeria"], ["Opiniones", "#opiniones"], ["Preguntas", "#faq"], ["Contacto", "#contacto"]];
const H2 = { fontSize: "clamp(2.2rem, 5.5vw, 4rem)" };

function Head({ t, s, light }) {
  return (
    <Reveal className="max-w-2xl">
      <h2 className="font-display leading-[1.05]" style={H2}>{t}</h2>
      {s && <p className={`mt-4 text-lg ${light ? "text-white/75" : "text-mute"}`}>{s}</p>}
    </Reveal>
  );
}

export function Navbar() {
  const [sc, setSc] = useState(false);
  const [op, setOp] = useState(false);
  useEffect(() => {
    const on = () => setSc(scrollY > 40);
    on();
    addEventListener("scroll", on, { passive: true });
    const k = (e) => e.key === "Escape" && setOp(false);
    addEventListener("keydown", k);
    return () => { removeEventListener("scroll", on); removeEventListener("keydown", k); };
  }, []);
  const solid = sc || op;
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${solid ? "bg-paper/90 py-3 text-ink shadow-md backdrop-blur" : `py-5 ${S.darkHero ? "text-white" : "text-ink"}`}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5" aria-label="Principal">
        <a href="#inicio" className="font-display text-2xl">{S.name}</a>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map(([t, h]) => <li key={h}><a href={h} className="border-b-2 border-transparent pb-0.5 text-sm font-medium transition-colors duration-200 hover:border-accent">{t}</a></li>)}
          <li><a href={wa(S.cta1msg)} className="rounded-r bg-brand px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-brand2">{S.cta1}</a></li>
        </ul>
        <button className="p-2 md:hidden" onClick={() => setOp(!op)} aria-expanded={op} aria-label={op ? "Cerrar menú" : "Abrir menú"}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">{op ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}</svg>
        </button>
      </nav>
      {op && (
        <ul className="fade mx-auto mt-3 max-w-6xl px-5 pb-3 md:hidden">
          {LINKS.map(([t, h]) => <li key={h}><a href={h} onClick={() => setOp(false)} className="block border-b border-ink/10 py-3 font-display text-xl">{t}</a></li>)}
        </ul>
      )}
    </header>
  );
}

export function Hero() {
  const c = S.hero === "center", sp = S.hero === "split", d = S.darkHero;
  return (
    <section id="inicio" className={`relative overflow-hidden ${d ? "bg-brand text-white" : sp ? "bg-soft" : "bg-paper"}`}>
      <div className={`relative mx-auto max-w-6xl px-5 pb-20 pt-32 md:pb-28 md:pt-40 ${sp ? "grid items-center gap-12 md:grid-cols-2" : ""} ${c ? "text-center" : ""}`}>
        <Reveal>
          <h1 className="font-display leading-[1.02] tracking-tight" style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}>{S.title}</h1>
          <p className={`mt-6 max-w-xl text-lg ${c ? "mx-auto" : ""} ${d ? "text-white/80" : "text-mute"}`}>{S.sub}</p>
          <div className={`mt-9 flex flex-wrap gap-3 ${c ? "justify-center" : ""}`}>
            <a href={wa(S.cta1msg)} className={`rounded-r px-7 py-3.5 font-semibold transition duration-300 hover:-translate-y-0.5 ${d ? "bg-accent text-ink hover:bg-white" : "bg-brand text-white hover:bg-brand2"}`}>{S.cta1}</a>
            <a href="#servicios" className={`rounded-r border px-7 py-3.5 font-semibold transition duration-300 ${d ? "border-white/50 hover:bg-white hover:text-brand" : "border-ink/30 hover:bg-ink hover:text-white"}`}>{S.cta2}</a>
          </div>
        </Reveal>
        {sp && <Reveal delay={150} className="mx-auto aspect-square w-full max-w-md md:max-w-none"><Art e={S.heroEmoji} label={S.heroAlt} i={0} className="rounded-[2.5rem]" /></Reveal>}
        {c && <Reveal delay={150} className="mx-auto mt-14 h-80 w-64 md:h-[26rem] md:w-80"><Art e={S.heroEmoji} label={S.heroAlt} i={0} src={S.heroImg} pos={S.heroPos} eager className="rounded-t-full" /></Reveal>}
      </div>
      {S.hero === "full" && <div aria-hidden="true" className="pointer-events-none absolute -right-16 bottom-0 hidden text-[22rem] leading-none opacity-20 md:block">{S.heroEmoji}</div>}
    </section>
  );
}

export function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-5 py-24 md:py-32">
      <Head t={S.svcTitle} s={S.svcSub} />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {S.services.map((s, i) => (
          <Reveal key={s.t} delay={i * 90}>
            <article className="group h-full rounded-r border border-ink/10 bg-paper p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-xl">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-soft text-3xl transition duration-300 group-hover:scale-110" aria-hidden="true">{s.e}</span>
              <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
              <p className="mt-3 leading-relaxed text-mute">{s.d}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Gallery() {
  const [sel, setSel] = useState(null);
  const n = S.gallery.length;
  useEffect(() => {
    if (sel === null) return;
    const k = (e) => {
      if (e.key === "Escape") setSel(null);
      if (e.key === "ArrowRight") setSel((x) => (x + 1) % n);
      if (e.key === "ArrowLeft") setSel((x) => (x - 1 + n) % n);
    };
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [sel, n]);
  return (
    <section id="galeria" className="bg-soft py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Head t={S.galTitle} s={S.galSub} />
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {S.gallery.map((g, i) => (
            <Reveal key={g.t} delay={i * 70} className={i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-square"}>
              <button onClick={() => setSel(i)} aria-label={`Ampliar: ${g.t}`} className="group relative h-full w-full overflow-hidden rounded-r">
                <Art e={g.e} label={g.t} i={i} src={g.src} pos={g.pos} />
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/80 px-4 py-3 text-left text-sm font-medium text-white transition duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">{g.t}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {sel !== null && (
        <div role="dialog" aria-modal="true" aria-label="Imagen ampliada" onClick={() => setSel(null)} className="fade fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink/90 p-5">
          <button onClick={() => setSel(null)} aria-label="Cerrar" className="absolute right-5 top-5 rounded-r border border-white px-4 py-2 text-white transition duration-200 hover:bg-white hover:text-ink">Cerrar</button>
          <div key={sel} onClick={(e) => e.stopPropagation()} className="fade group aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-r"><Art e={S.gallery[sel].e} label={S.gallery[sel].t} i={sel} src={S.gallery[sel].src} fit="contain" /></div>
          <p className="mt-4 text-white">{S.gallery[sel].t}</p>
        </div>
      )}
    </section>
  );
}

export function Reviews() {
  const n = S.reviews.length;
  const [i, setI] = useState(0);
  const [pa, setPa] = useState(false);
  useEffect(() => {
    if (pa || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 7000);
    return () => clearInterval(t);
  }, [pa, n]);
  const r = S.reviews[i];
  const b = "rounded-r border border-white/60 px-5 py-2 transition duration-200 hover:bg-white hover:text-brand";
  return (
    <section id="opiniones" className="bg-brand py-24 text-white md:py-32" onMouseEnter={() => setPa(true)} onMouseLeave={() => setPa(false)}>
      <div className="mx-auto max-w-4xl px-5 text-center">
        <Head t="Lo que dicen nuestros clientes" light />
        <figure key={i} className="fade mt-12 min-h-[220px]" aria-live="polite">
          <div className="flex justify-center gap-1 text-accent" role="img" aria-label="5 estrellas">{[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-6 w-6" />)}</div>
          <blockquote className="mt-6 font-display text-2xl leading-snug md:text-4xl">“{r.t}”</blockquote>
          <figcaption className="mt-6 text-white/75">{r.n}</figcaption>
        </figure>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={() => setI((i - 1 + n) % n)} aria-label="Opinión anterior" className={b}>‹</button>
          <div className="flex gap-2">{S.reviews.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Ir a opinión ${k + 1}`} className={`h-2.5 rounded-full transition-all duration-300 ${k === i ? "w-8 bg-accent" : "w-2.5 bg-white/40"}`} />)}</div>
          <button onClick={() => setI((i + 1) % n)} aria-label="Opinión siguiente" className={b}>›</button>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [o, setO] = useState(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24 md:py-32">
      <Head t="Preguntas frecuentes" />
      <div className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
        {S.faq.map((f, i) => {
          const is = o === i;
          return (
            <div key={f.q}>
              <h3>
                <button id={`fb${i}`} aria-expanded={is} aria-controls={`fp${i}`} onClick={() => setO(is ? -1 : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-xl transition-colors duration-200 hover:text-brand">
                  {f.q}
                  <span className={`text-3xl text-brand transition-transform duration-300 ${is ? "rotate-45" : ""}`} aria-hidden="true">+</span>
                </button>
              </h3>
              <div id={`fp${i}`} role="region" aria-labelledby={`fb${i}`} className={`grid transition-all duration-300 ${is ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}><p className="overflow-hidden text-mute">{f.a}</p></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function Contact() {
  const [v, setV] = useState({ nombre: "", telefono: "", mensaje: "" });
  const [er, setEr] = useState({});
  const [ok, setOk] = useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const send = (ev) => {
    ev.preventDefault();
    const e = {};
    if (v.nombre.trim().length < 2) e.nombre = "Escribe tu nombre.";
    if (!/^[+\d\s]{8,15}$/.test(v.telefono.trim())) e.telefono = "Escribe un teléfono válido, ej: 9 1234 5678.";
    if (v.mensaje.trim().length < 5) e.mensaje = "Cuéntanos qué necesitas (mínimo 5 letras).";
    setEr(e);
    if (Object.keys(e).length) return;
    open(wa(`Hola ${S.name}, soy ${v.nombre} (${v.telefono}). ${v.mensaje}`), "_blank", "noopener");
    setOk(true);
  };
  const cls = (k) => `mt-2 w-full rounded-r border bg-paper px-4 py-3 outline-none transition duration-200 focus:border-brand ${er[k] ? "border-2 border-brand" : "border-ink/25"}`;
  const msg = (k) => er[k] && <p id={`${k}-e`} className="mt-1 text-sm font-semibold text-brand underline">{er[k]}</p>;
  return (
    <section id="contacto" className="bg-soft py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display leading-[1.05]" style={H2}>{S.contactTitle}</h2>
          <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {[["Dirección", S.dir], ["Horario", S.hor]].map(([a, b]) => <div key={a} className="py-4"><dt className="font-semibold">{a}</dt><dd className="text-mute">{b}</dd></div>)}
            <div className="py-4"><dt className="font-semibold">Teléfono</dt><dd><a className="text-mute underline hover:text-brand" href={`tel:+${S.wa}`}>{S.tel}</a></dd></div>
          </dl>
          <iframe title={`Mapa de ${S.name}`} loading="lazy" className="mt-8 h-60 w-full rounded-r border-0" src={`https://www.google.com/maps?q=${encodeURIComponent(S.mapq)}&output=embed`} />
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={send} noValidate className="rounded-r bg-paper p-7 shadow-sm md:p-9">
            <h3 className="font-display text-2xl">{S.formTitle}</h3>
            {[["nombre", "Nombre", "text"], ["telefono", "Teléfono", "tel"]].map(([k, l, t]) => (
              <div key={k} className="mt-5"><label htmlFor={k} className="font-medium">{l}</label><input id={k} type={t} value={v[k]} onChange={set(k)} aria-invalid={!!er[k]} aria-describedby={er[k] ? `${k}-e` : undefined} className={cls(k)} />{msg(k)}</div>
            ))}
            <div className="mt-5"><label htmlFor="mensaje" className="font-medium">Mensaje</label><textarea id="mensaje" rows="4" value={v.mensaje} onChange={set("mensaje")} aria-invalid={!!er.mensaje} aria-describedby={er.mensaje ? "mensaje-e" : undefined} className={cls("mensaje")} />{msg("mensaje")}</div>
            <button type="submit" className="mt-7 w-full rounded-r bg-brand px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand2">{S.formBtn}</button>
            {ok && <p role="status" className="mt-4 text-center text-sm text-mute">Abrimos WhatsApp con tu mensaje. Solo falta enviarlo.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm md:flex-row">
        <p className="font-display text-xl text-white">{S.name}</p>
        <p>{S.dir}</p>
        <p>Sitio de demostración · {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export function Fab() {
  return (
    <a href={wa(`Hola ${S.name}, tengo una consulta`)} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp" className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-200 hover:scale-110">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l4.9-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4z" /></svg>
    </a>
  );
}
