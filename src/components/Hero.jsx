"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Fotografía de fondo (placeholder de stock — ver README para sustituir por fotos oficiales) */}
      <Image
        src="/images/hero-poultry.jpg"
        alt="Granja avícola moderna"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-avialas-dark/95 via-avialas-dark/80 to-avialas-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-avialas-dark via-transparent to-transparent" />

      {/* Blobs decorativos flotantes */}
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 top-16 h-[420px] w-[420px] rounded-full bg-avialas-yellow/20 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute -left-16 bottom-10 h-[320px] w-[320px] rounded-full bg-avialas-red/25 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-heading text-xs font-semibold uppercase tracking-widest text-avialas-yellow ring-1 ring-white/20 backdrop-blur-sm"
          >
            AVIALAS S.A. &middot; Grupo Empresarial GEALAV &middot; MINAG
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            Desarrollo sostenible para la industria avícola y de alimentos balanceados de Cuba
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-2xl text-lg text-white/85"
          >
            Gestionamos, controlamos y participamos como socio o accionista en
            inversión extranjera junto a entidades cubanas, garantizando
            calidad, eficiencia y respeto al medio ambiente.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#quienes-somos"
              className="inline-flex items-center justify-center rounded-full bg-avialas-yellow px-8 py-3.5 font-heading text-sm font-bold text-avialas-dark shadow-lg shadow-avialas-yellow/20 transition-transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              Conoce más
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-8 py-3.5 font-heading text-sm font-bold text-white transition-colors hover:bg-white hover:text-avialas-dark"
            >
              Contáctanos
            </a>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
        aria-hidden="true"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v16m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
