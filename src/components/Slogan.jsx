import Reveal from "./Reveal";

export default function Slogan() {
  return (
    <section className="relative overflow-hidden bg-avialas-dark py-24 text-center sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-avialas-yellow/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-avialas-red/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span aria-hidden="true" className="font-heading text-6xl leading-none text-avialas-yellow">
            &ldquo;
          </span>
          <p className="mt-2 font-heading text-2xl font-semibold leading-snug text-white sm:text-3xl">
            Nuestros resultados hablan de un equipo que rema en la misma
            dirección. Seguimos porque lo que hacemos tiene sentido para
            nosotros&hellip;
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-avialas-yellow">
            No somos islas: somos parte de una corriente que, al fluir unida,
            transforma realidades y trasciende generaciones.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
