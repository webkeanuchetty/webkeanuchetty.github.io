"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  className?: string;
  once?: boolean;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 }
};

export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance,
  className,
  once = true
}: RevealProps) {
  const reduce = useReducedMotion();
  const base = offsets[direction];
  const d = distance ?? 1;
  const initial = reduce
    ? { opacity: 1, x: 0, y: 0 }
    : { opacity: 0, x: base.x * d, y: base.y * d };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
