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
          <p className="mt-5 max-w-xs border-l-2 border-avialas-yellow py-0.5 pl-4 text-sm font-medium leading-relaxed text-white">
            No somos islas: somos parte de una corriente que, al fluir
            unida, transforma realidades y trasciende generaciones.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-sm font-bold text-avialas-yellow">
            Contacto
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-avialas-yellow">
                <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" />
                <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <a href="mailto:avialassa24@gmail.com" className="hover:text-avialas-yellow">
                avialassa24@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-avialas-yellow">
                <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <a href="tel:+5363438497" className="hover:text-avialas-yellow">
                +53 6343 8497
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-avialas-yellow">
                <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              <span>Edificio Focsa, e/ M y N, Calle 17, La Habana, Cuba</span>
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
          <ul className="flex items-center gap-3">
            <li>
              <a
                href="https://www.facebook.com/share/1RwJvtF4vF/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AVIALAS S.A. en Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-avialas-yellow hover:text-avialas-dark"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.5-1.46H16.5V4.36C16.2 4.32 15.2 4.24 14 4.24c-2.4 0-4.06 1.47-4.06 4.17V10.5H7.5v3H10V21h3.5Z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/avialass.a?utm_source=qr&stkn=NGVoOGk1YzIwdjh6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AVIALAS S.A. en Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-avialas-yellow hover:text-avialas-dark"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="3.7" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="16.8" cy="7.2" r="1.1" fill="currentColor" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/qr/MWC3VGTPMM4XF1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AVIALAS S.A. en WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-avialas-yellow hover:text-avialas-dark"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.25.7-1.22 1.28-2 1.44-.55.11-1.26.2-3.68-.79-3.08-1.27-5.06-4.4-5.21-4.6-.15-.2-1.24-1.65-1.24-3.15s.77-2.23 1.05-2.53c.25-.28.55-.35.74-.35.19 0 .37.002.53.01.17.008.4-.065.62.47.25.6.83 2.07.9 2.22.07.15.12.33.02.53-.09.2-.14.32-.28.5-.14.17-.29.38-.42.51-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.63-.14.26.09 1.64.77 1.92.91.28.14.47.21.53.33.07.12.07.68-.18 1.38Z" />
                </svg>
              </a>
            </li>
          </ul>

          <a
            href="https://wa.me/qr/MWC3VGTPMM4XF1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-fit items-center gap-3 rounded-xl bg-white/5 p-2.5 transition-colors hover:bg-white/10"
          >
            <Image
              src={asset("/images/whatsapp-qr.svg")}
              alt="Código QR para escribirnos por WhatsApp"
              width={64}
              height={64}
              className="h-16 w-16 rounded-md bg-white p-1"
            />
            <span className="text-xs leading-snug text-white/60">
              Escanea para
              <br />
              escribirnos por
              <br />
              <span className="font-semibold text-avialas-yellow">WhatsApp</span>
            </span>
          </a>
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
