"use client";

import { useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * Tarjeta con inclinación 3D y un brillo que sigue al cursor (o al dedo, en
 * pantallas táctiles: arrastrar sobre la tarjeta mueve el brillo igual que
 * el mouse). En tap simple, un pequeño "press" da retroalimentación táctil.
 * `className` define el aspecto (bordes, fondo, radio); `glow` el color del brillo.
 */
export default function TiltCard({
  children,
  className = "",
  max = 7,
  glow = "rgba(248,183,0,0.25)",
}) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const sx = useSpring(x, { stiffness: 220, damping: 22 });
  const sy = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const gx = useTransform(sx, (v) => `${v * 100}%`);
  const gy = useTransform(sy, (v) => `${v * 100}%`);
  const background = useMotionTemplate`radial-gradient(320px circle at ${gx} ${gy}, ${glow}, transparent 65%)`;

  function setFromPoint(clientX, clientY, target) {
    const r = target.getBoundingClientRect();
    x.set((clientX - r.left) / r.width);
    y.set((clientY - r.top) / r.height);
  }

  function onMove(e) {
    if (reduce) return;
    setFromPoint(e.clientX, e.clientY, e.currentTarget);
  }

  function onLeave() {
    x.set(0.5);
    y.set(0.5);
    setActive(false);
  }

  function onTouchStart(e) {
    if (reduce) return;
    setActive(true);
    const t = e.touches[0];
    setFromPoint(t.clientX, t.clientY, e.currentTarget);
  }

  function onTouchMove(e) {
    if (reduce) return;
    const t = e.touches[0];
    setFromPoint(t.clientX, t.clientY, e.currentTarget);
  }

  function onTouchEnd() {
    x.set(0.5);
    y.set(0.5);
    setActive(false);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={onLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      className={`group relative h-full overflow-hidden ${className}`}
    >
      <motion.div
        aria-hidden="true"
        style={{ background, opacity: active ? 1 : 0 }}
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
