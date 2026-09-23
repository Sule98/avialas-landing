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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
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
            className={`h-11 w-auto transition-all duration-300 ${
              scrolled ? "" : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
            }`}
          />
        </a>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-heading text-sm font-semibold transition-colors hover:text-avialas-red ${
                    scrolled ? "text-avialas-dark" : "text-white"
                  }`}
                >
                  {link.label}
                </a>
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
            className={`block h-0.5 w-6 rounded ${
              scrolled || menuOpen ? "bg-avialas-dark" : "bg-white"
            }`}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block h-0.5 w-6 rounded ${
              scrolled || menuOpen ? "bg-avialas-dark" : "bg-white"
            }`}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className={`block h-0.5 w-6 rounded ${
              scrolled || menuOpen ? "bg-avialas-dark" : "bg-white"
            }`}
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
            className="fixed inset-x-0 top-20 z-40 border-t border-avialas-gray bg-white shadow-lg md:hidden"
          >
            <ul className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-avialas-gray/70 last:border-none">
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 font-heading text-base font-semibold text-avialas-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
