/*
  Wrapper component responsible for "float in" animations on components as they enter the viewport
*/
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface FloatInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  amount?: number;
}

export default function FloatIn({
  children,
  delay = 0.1,
  amount = 0.15,
  className = "",
}: FloatInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "15px" }}
      whileInView={{ opacity: 1, y: "0px" }}
      viewport={{ once: true, amount: amount }}
      transition={{ duration: 0.3, delay: delay }}
      className={className}
    >
      <div>{children}</div>
    </motion.div>
  );
}
