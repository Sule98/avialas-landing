"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Contenedor que desplaza y amplía suavemente su contenido (una imagen) según el scroll.
 * `amount` = porcentaje de desplazamiento vertical.
 */
export default function Parallax({ children, className = "", amount = 8 }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${amount}%`, `${amount}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.18, 1.1, 1.18]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={reduce ? undefined : { y, scale }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    </div>
  );
}
