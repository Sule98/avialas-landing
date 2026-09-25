"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { asset } from "@/lib/asset";

const EASE = [0.21, 0.47, 0.32, 0.98];

// Cada palabra sube desde una máscara, con retraso escalonado
function Words({ text, start = 0, className = "" }) {
  return text.split(" ").map((w, i) => (
    <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom">
      <motion.span
        className={`inline-block ${className}`}
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, delay: start + i * 0.09, ease: EASE }}
      >
        {w}&nbsp;
      </motion.span>
    </span>
  ));
}

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative overflow-hidden bg-white pb-16 pt-40 sm:pt-44"
    >
      {/* Manchas de color de fondo con movimiento propio y parallax */}
      <motion.div
        aria-hidden="true"
        style={reduce ? undefined : { y: blobY }}
        className="pointer-events-none absolute -right-32 top-24 h-[460px] w-[460px] rounded-full bg-avialas-yellow/25 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-28 top-64 h-[340px] w-[340px] rounded-full bg-avialas-red/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-avialas-dark/70"
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: 28 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="h-0.5 bg-avialas-yellow"
              />
              Inversión · Alianzas · Desarrollo
            </motion.p>

            <h1 className="font-heading text-4xl font-extrabold leading-[1.08] text-avialas-dark sm:text-5xl xl:text-6xl">
              <Words text="Conectamos oportunidades." start={0.15} />
              <br />
              <Words text="Impulsamos el futuro." start={0.55} className="text-avialas-reddeep" />
            </h1>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="max-w-md text-lg text-avialas-dark/70"
            >
              Acompañamos a empresas y emprendedores en cada etapa: desde la
              idea hasta la materialización.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-7 flex flex-wrap gap-4"
            >
              <a
                href="#servicios"
                className="group inline-flex items-center gap-4 bg-avialas-yellow px-7 py-4 font-heading text-sm font-bold text-avialas-dark shadow-lg shadow-avialas-yellow/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Explore nuestras áreas de actuación
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
                  ↗
                </span>
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center border-2 border-avialas-dark px-7 py-4 font-heading text-sm font-bold text-avialas-dark transition-colors hover:bg-avialas-dark hover:text-white"
              >
                Contáctanos
              </a>
            </motion.div>
          </div>
        </div>

        {/* Banner principal: revelado con clip-path, zoom de entrada y brillo periódico */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0 round 16px)", opacity: 0.4 }}
          animate={{ clipPath: "inset(0 0% 0 0 round 16px)", opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5, ease: EASE }}
          className="relative mt-14 overflow-hidden rounded-2xl shadow-2xl shadow-avialas-dark/20 ring-1 ring-avialas-gray"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, delay: 0.5, ease: EASE }}
            >
              <Image
                src={asset("/images/hero-banner.jpeg")}
                alt="AVIALAS S.A. — Acompañamos a empresas y emprendedores en cada etapa: desde la idea hasta la materialización. Idea, alianzas, inversiones y resultados."
                width={1600}
                height={595}
                priority
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="h-auto w-full"
              />
            </motion.div>
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-shine absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="mt-10 flex justify-center text-avialas-dark/50"
          aria-hidden="true"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M12 4v16m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
