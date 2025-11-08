"use client";

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    default: "bg-neutral-700 text-neutral-200 border border-neutral-600",
    success:
      "bg-[--neon-green]/20 text-[--neon-green] border border-[--neon-green]",
    warning:
      "bg-[--neon-yellow]/20 text-[--neon-yellow] border border-[--neon-yellow]",
    error: "bg-[--error-500]/20 text-[--error-500] border border-[--error-500]",
    info: "bg-[--info-500]/20 text-[--info-500] border border-[--info-500]",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-2 text-base",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}
