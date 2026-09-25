const ITEMS = [
  "Idea",
  "Alianzas",
  "Inversiones",
  "Resultados",
  "Oportunidades que generan valor",
  "Inversión responsable",
  "Alianzas para el crecimiento",
  "Un futuro más productivo",
];

function Row({ hidden = false }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {ITEMS.map((t) => (
        <li
          key={t}
          className="flex items-center gap-10 font-heading text-sm font-bold uppercase tracking-[0.2em] text-avialas-dark"
        >
          {t}
          <span className="h-1.5 w-1.5 rotate-45 bg-avialas-red" />
        </li>
      ))}
    </ul>
  );
}

/** Franja amarilla con texto en desplazamiento continuo (pilares del banner). */
export default function Marquee() {
  return (
    <div className="overflow-hidden bg-avialas-yellow py-4" role="presentation">
      <div className="animate-marquee flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
