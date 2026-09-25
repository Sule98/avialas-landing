"use client";

import { motion } from "framer-motion";

/** Anillos concéntricos que se expanden desde el centro (decoración del CTA). */
export default function PulseRings() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          initial={{ scale: 0.4, opacity: 0.5 }}
          animate={{ scale: 2.6, opacity: 0 }}
          transition={{ duration: 6, repeat: Infinity, delay: i * 2, ease: "easeOut" }}
          className="absolute h-[420px] w-[420px] rounded-full border border-white/40"
        />
      ))}
    </div>
  );
}
