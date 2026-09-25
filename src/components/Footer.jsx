import Image from "next/image";
import BackToTop from "./BackToTop";
import { asset } from "@/lib/asset";

const QUICK_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#valores", label: "Valores" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-avialas-dark pt-20 text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 pb-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src={asset("/logo-avialas-blanco.png")}
            alt="AVIALAS S.A."
            width={160}
            height={64}
            className="mb-5 h-10 w-auto"
          />
          <p className="font-heading font-semibold text-white">
            Avícola y Alimento Animal S.A. (AVIALAS S.A.)
          </p>
          <p className="mt-2 max-w-xs text-sm text-white/60">
            Empresa perteneciente al Grupo Empresarial de Alimentos y Aves (GEALAV), adscrita al
            Ministerio de la Agricultura (MINAG), República de Cuba.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold text-avialas-yellow">
            Contacto
          </h3>
          {/* TODO: datos de contacto TEMPORALES — reemplazar por los oficiales de AVIALAS S.A. antes de publicar */}
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-avialas-yellow">
                <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <a href="mailto:contacto@avialas.cu" className="hover:text-avialas-yellow">
                contacto@avialas.cu
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-avialas-yellow">
                <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <a href="tel:+537000000" className="hover:text-avialas-yellow">
                +53 7 000 0000
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-avialas-yellow">
                <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <span>
                Playa, La Habana, Cuba{" "}
                <em className="not-italic text-white/45">
                  (dirección provisional, pendiente de confirmar)
                </em>
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold text-avialas-yellow">
            Enlaces rápidos
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-avialas-yellow">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold text-avialas-yellow">
            Redes sociales
          </h3>
          <p className="text-sm text-white/55">Muy pronto en redes sociales.</p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm text-white/50 sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} AVIALAS S.A. Todos los derechos reservados.</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
