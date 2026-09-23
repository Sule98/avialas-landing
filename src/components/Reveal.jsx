"use client";

import { motion } from "framer-motion";

/**
 * Envoltura reutilizable para animar la entrada de secciones al hacer scroll.
 * `delay` en segundos, `y` es el desplazamiento vertical inicial en px.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.6,
  className = "",
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
