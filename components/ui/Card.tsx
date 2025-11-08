"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  variant?: "default" | "outlined" | "elevated";
}

export default function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
  variant = "default",
}: CardProps) {
  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const variantStyles = {
    default: "bg-white border border-gray-200",
    outlined: "bg-transparent border-2 border-gray-300",
    elevated: "bg-white shadow-lg border border-gray-100",
  };

  const baseStyles = `rounded-xl transition-all ${paddingStyles[padding]} ${variantStyles[variant]} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={baseStyles}
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseStyles}>{children}</div>;
}
