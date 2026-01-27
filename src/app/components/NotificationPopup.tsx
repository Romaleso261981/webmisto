"use client";

import { useEffect } from "react";

interface NotificationPopupProps {
  type: "success" | "error" | "info";
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function NotificationPopup({
  type,
  message,
  isVisible,
  onClose,
  duration = 5000,
}: NotificationPopupProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const icons = {
    success: (
      <svg
        className="h-6 w-6 text-emerald-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    error: (
      <svg
        className="h-6 w-6 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    info: (
      <svg
        className="h-6 w-6 text-sky-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  const styles = {
    success: "bg-emerald-50 border-emerald-200 text-emerald-900",
    error: "bg-red-50 border-red-200 text-red-900",
    info: "bg-sky-50 border-sky-200 text-sky-900",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pointer-events-none">
      <div
        className={`
          pointer-events-auto
          max-w-md w-full
          rounded-2xl border-2 shadow-2xl
          ${styles[type]}
        `}
        role="alert"
        style={{
          animation: "slideIn 0.3s ease-out",
        }}
      >
        <div className="flex items-start gap-4 p-5">
          <div className="shrink-0 mt-0.5">{icons[type]}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-6 whitespace-pre-line">
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className={`
              shrink-0
              rounded-lg p-1.5
              transition-colors
              hover:bg-black/5
              focus:outline-none focus:ring-2 focus:ring-offset-2
              ${
                type === "success"
                  ? "focus:ring-emerald-500"
                  : type === "error"
                  ? "focus:ring-red-500"
                  : "focus:ring-sky-500"
              }
            `}
            aria-label="Закрити"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
