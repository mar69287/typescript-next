"use client";

import { ReactNode } from "react";
import { AlertCircle, CheckCircle, Info, X, AlertTriangle } from "lucide-react";

interface AlertProps {
  children: ReactNode;
  variant?: "success" | "error" | "warning" | "info";
  title?: string;
  onClose?: () => void;
  className?: string;
}

export default function Alert({
  children,
  variant = "info",
  title,
  onClose,
  className = "",
}: AlertProps) {
  const variantStyles = {
    success: {
      container:
        "bg-[--neon-green]/10 border-[--neon-green] text-[--neon-green]",
      icon: CheckCircle,
      iconColor: "text-[--neon-green]",
    },
    error: {
      container: "bg-[--error-500]/10 border-[--error-500] text-[--error-500]",
      icon: AlertCircle,
      iconColor: "text-[--error-500]",
    },
    warning: {
      container:
        "bg-[--neon-yellow]/10 border-[--neon-yellow] text-[--neon-yellow]",
      icon: AlertTriangle,
      iconColor: "text-[--neon-yellow]",
    },
    info: {
      container: "bg-[--info-500]/10 border-[--info-500] text-[--info-500]",
      icon: Info,
      iconColor: "text-[--info-500]",
    },
  };

  const { container, icon: Icon, iconColor } = variantStyles[variant];

  return (
    <div
      className={`relative flex gap-3 p-4 rounded-lg border ${container} ${className}`}
      role="alert"
    >
      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${iconColor}`} />
      <div className="flex-1">
        {title && <h4 className="font-semibold mb-1">{title}</h4>}
        <div className="text-sm">{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="shrink-0 text-current opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Close alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
