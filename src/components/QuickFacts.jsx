import Reveal from "./Reveal";
import RevealGroup, { RevealItem } from "./RevealGroup";
import TiltCard from "./TiltCard";

const FACTS = [
  {
    title: "Entidad mixta cubana",
    text: "Adscrita al Ministerio de la Agricultura (MINAG)",
  },
  {
    title: "Grupo Empresarial GEALAV",
    text: "Grupo Empresarial de Alimentos y Aves",
  },
  {
    title: "Razón social",
    text: "Avícola y Alimento Animal S.A. (AVIALAS S.A.)",
  },
];

export default function QuickFacts() {
  return (
    <div className="mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal y={20}>
        <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FACTS.map((fact) => (
            <RevealItem key={fact.title}>
              <TiltCard
                max={5}
                className="rounded-2xl bg-avialas-dark px-7 py-7 shadow-xl shadow-black/10"
              >
                <div className="flex flex-col gap-1.5">
                  <strong className="font-heading text-base text-avialas-yellow">
                    {fact.title}
                  </strong>
                  <span className="text-sm text-white/75">{fact.text}</span>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Reveal>
    </div>
  );
}
