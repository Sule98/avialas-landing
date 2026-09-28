"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Contenedor de imagen con tres efectos que no dependen de hover (funcionan
 * igual en mobile): entrada con zoom al hacer scroll hasta la vista,
 * parallax continuo ligado al scroll, y un brillo que la cruza en loop.
 * `amount` = porcentaje de desplazamiento vertical del parallax.
 */
export default function Parallax({ children, className = "", amount = 8, shine = true }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.1, 1.18]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.4, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>

      {shine && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-shine absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </div>
      )}
    </motion.div>
  );
}
