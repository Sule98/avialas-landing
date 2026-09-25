"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { asset } from "@/lib/asset";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#valores", label: "Valores" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Resalta el enlace de la sección visible
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Franja superior — se pliega al hacer scroll */}
      <motion.div
        animate={{ height: scrolled ? 0 : 40 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden bg-avialas-dark"
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center px-4 text-xs text-white sm:px-6 lg:px-8">
          <span className="truncate">
            Grupo Empresarial de Alimentos y Aves{" "}
            <strong className="ml-1 font-bold text-avialas-yellow">GEALAV</strong>
          </span>
        </div>
      </motion.div>

      <div
        className={`relative border-b-2 border-avialas-red bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#inicio" aria-label="AVIALAS S.A. — Inicio" className="flex items-center">
            <Image
              src={asset("/logo-avialas-color.png")}
              alt="AVIALAS S.A. — Avícola y Alimento Animal S.A."
              width={220}
              height={74}
              priority
              className={`w-auto transition-all duration-300 ${scrolled ? "h-10" : "h-12"}`}
            />
          </a>

          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    className={`font-heading text-sm font-semibold transition-colors hover:text-avialas-red ${
                      active === link.href ? "text-avialas-red" : "text-avialas-dark"
                    }`}
                  >
                    {link.label}
                  </a>
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-avialas-yellow"
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 rounded bg-avialas-dark"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 rounded bg-avialas-dark"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 rounded bg-avialas-dark"
            />
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-menu"
              aria-label="Navegación móvil"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-x-0 top-full border-t border-avialas-gray bg-white shadow-lg md:hidden"
            >
              <ul className="flex flex-col px-6 py-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="border-b border-avialas-gray/70 last:border-none"
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 font-heading text-base font-semibold text-avialas-dark"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
