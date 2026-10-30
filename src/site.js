const S = {
  name: "Salón Aurora", hero: "center", darkHero: false, heroEmoji: "✂️", heroImg: "/img/hero.jpg", heroPos: "center 22%", heroAlt: "Mujer con cabello largo castaño en ondas suaves",
  title: "Tu mejor versión empieza en el espejo.",
  sub: "Corte, color y cuidado capilar con estilistas que escuchan primero. Reserva tu hora y vive una tarde para ti.",
  cta1: "Reservar hora", cta1msg: "Hola Salón Aurora, quiero reservar una hora", cta2: "Ver servicios",
  svcTitle: "Servicios pensados para ti", svcSub: "Cada visita parte con una conversación sobre lo que quieres lograr.",
  services: [
    { e: "✂️", t: "Corte y estilo", d: "Corte a tu medida según tu rostro y tu rutina, con secado incluido." },
    { e: "🎨", t: "Color y balayage", d: "Rubios, castaños y reflejos luminosos que cuidan la fibra del cabello." },
    { e: "💆‍♀️", t: "Tratamientos", d: "Keratina, botox capilar y nutrición profunda para recuperar el brillo." },
    { e: "👰", t: "Peinados de novia", d: "Prueba previa y atención el día del evento, en el salón o a domicilio." },
  ],
  galTitle: "Nuestro trabajo", galSub: "Toca una imagen para verla más grande.",
  gallery: [
    { e: "✨", src: "/img/balayage.jpg", t: "Balayage miel en ondas largas" },
    { e: "✂️", src: "/img/bob.jpg", pos: "center 35%", t: "Bob con capas y textura" },
    { e: "💇‍♀️", src: "/img/ondas.jpg", pos: "center 25%", t: "Ondas suaves de estilo clásico" },
    { e: "👰", src: "/img/novia.jpg", pos: "center 35%", t: "Trenza de novia con broches de flores" },
    { e: "💅", src: "/img/manicure.jpg", pos: "center 40%", t: "Manicure de gel rosado con flores blancas" },
    { e: "🎨", src: "/img/alisado.jpg", pos: "center 35%", t: "Alisado con brillo y tono miel" },
  ],
  reviews: [
    { n: "Valentina S., Vitacura", t: "Llegué con el pelo dañado y salí con un color precioso y mucho más sano. Me explicaron cada paso." },
    { n: "Constanza H., Lo Barnechea", t: "Me peinaron para mi matrimonio y quedé feliz. Hicieron prueba antes y fueron puntuales el gran día." },
    { n: "Macarena B., La Reina", t: "El mejor corte que me han hecho. Se tomaron el tiempo de entender cómo me peino a diario." },
  ],
  faq: [
    { q: "¿Cómo reservo mi hora?", a: "Por WhatsApp. Cuéntanos el servicio que quieres y te ofrecemos los horarios disponibles." },
    { q: "¿Cuánto dura un balayage?", a: "Entre 3 y 5 horas según el largo y el color de partida. En la consulta te damos un tiempo exacto." },
    { q: "¿Hacen consulta antes de teñir?", a: "Sí, siempre evaluamos el estado de tu cabello y te mostramos opciones antes de empezar." },
    { q: "¿Atienden peinados de novia a domicilio?", a: "Sí, con prueba previa y coordinación según la hora de tu evento." },
    { q: "¿Qué medios de pago aceptan?", a: "Efectivo, débito, crédito y transferencia." },
  ],
  contactTitle: "Reserva tu hora", formTitle: "Escríbenos", formBtn: "Enviar por WhatsApp",
  dir: "Av. Vitacura 3680, Vitacura, Santiago", hor: "Martes a sábado, 10:00 a 19:30", tel: "9 1234 5678", wa: "56912345678", mapq: "Av. Vitacura 3680, Santiago, Chile",
};
export const wa = (t) => `https://wa.me/${S.wa}?text=${encodeURIComponent(t)}`;
export default S;
