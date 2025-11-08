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
      container: "bg-green-50 border-green-200 text-green-800",
      icon: CheckCircle,
      iconColor: "text-green-600",
    },
    error: {
      container: "bg-red-50 border-red-200 text-red-800",
      icon: AlertCircle,
      iconColor: "text-red-600",
    },
    warning: {
      container: "bg-yellow-50 border-yellow-200 text-yellow-800",
      icon: AlertTriangle,
      iconColor: "text-yellow-600",
    },
    info: {
      container: "bg-blue-50 border-blue-200 text-blue-800",
      icon: Info,
      iconColor: "text-blue-600",
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
