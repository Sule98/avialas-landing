import Reveal from "./Reveal";

const FACTS = [
  {
    title: "Entidad mixta cubana",
    text: "Adscrita al Ministerio de la Agricultura (MINAG)",
  },
  {
    title: "Grupo Empresarial GEALAV",
    text: "Integrada a la OSDE del sector avícola",
  },
  {
    title: "Razón social",
    text: "Avícola y Alimento Animal S.A. (AVIALAS S.A.)",
  },
];

export default function QuickFacts() {
  return (
    <div className="relative z-20 mx-auto -mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal y={20}>
        <div className="grid grid-cols-1 gap-6 rounded-2xl bg-avialas-dark px-8 py-8 shadow-2xl shadow-black/20 sm:grid-cols-3 sm:gap-8">
          {FACTS.map((fact) => (
            <div key={fact.title} className="flex flex-col gap-1.5">
              <strong className="font-heading text-base text-avialas-yellow">
                {fact.title}
              </strong>
              <span className="text-sm text-white/75">{fact.text}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
