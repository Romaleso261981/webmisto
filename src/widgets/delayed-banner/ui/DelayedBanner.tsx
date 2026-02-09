"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/shared/lib/i18n/I18nProvider";

interface DelayedBannerProps {
  delay?: number; // Затримка в мілісекундах (за замовчуванням 5 секунд)
  onClose?: () => void;
  resetOnMount?: boolean; // Скинути localStorage при монтуванні (для тестування)
}

export default function DelayedBanner({
  delay = 5000,
  onClose,
  resetOnMount = false,
}: DelayedBannerProps) {
  const { language } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Якщо потрібно скинути, видаляємо з localStorage
    if (resetOnMount) {
      localStorage.removeItem("delayedBannerClosed");
    }

    // Перевіряємо, чи банер вже був закритий
    const wasClosed = localStorage.getItem("delayedBannerClosed");
    
    if (wasClosed === "true") {
      return;
    }

    // Встановлюємо таймер для показу банера
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, resetOnMount]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("delayedBannerClosed", "true");
    onClose?.();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    setIsSubmitting(true);

    try {
      // Відправляємо дані на сервер
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Banner Request",
          phone: phone,
          niche: "Презентація робіт",
          budget: "Запит з банера",
        }),
      });

      if (response.ok) {
        handleClose();
        alert(
          language === "uk"
            ? "Дякуємо! Ми відправимо вам презентацію найближчим часом."
            : language === "ru"
            ? "Спасибо! Мы отправим вам презентацию в ближайшее время."
            : "Thank you! We'll send you the presentation soon."
        );
        setPhone("");
      }
    } catch (error) {
      console.error("Error submitting banner form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  const translations = {
    uk: {
      title: "Переконайтесь, який",
      titleHighlight: "чудовий сайт",
      titleEnd: "ви отримаєте від компанії WebMisto!",
      description: "Просто вкажіть свій номер телефону, і ми відправимо вам",
      descriptionHighlight: "презентацію наших робіт",
      placeholder: "Введіть номер телефону",
      button: "Отримати презентацію",
    },
    ru: {
      title: "Убедитесь, какой",
      titleHighlight: "замечательный сайт",
      titleEnd: "вы получите от компании WebMisto!",
      description: "Просто укажите свой номер телефона, и мы отправим вам",
      descriptionHighlight: "презентацию наших работ",
      placeholder: "Введите номер телефона",
      button: "Получить презентацию",
    },
    en: {
      title: "See what a",
      titleHighlight: "wonderful website",
      titleEnd: "you'll get from WebMisto!",
      description: "Just enter your phone number, and we'll send you a",
      descriptionHighlight: "presentation of our works",
      placeholder: "Enter phone number",
      button: "Get presentation",
    },
  };

  const text = translations[language];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      style={{
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div 
        className="relative w-full max-w-4xl rounded-3xl bg-white p-8 shadow-2xl md:p-12"
        style={{
          animation: "slideIn 0.3s ease-out",
        }}
      >
        {/* Кнопка закриття */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          aria-label="Закрити"
        >
          <svg
            className="h-6 w-6"
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

        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          {/* Ліва частина - текст та форма */}
          <div>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
              {text.title}{" "}
              <span className="text-emerald-600">{text.titleHighlight}</span>{" "}
              {text.titleEnd}
            </h2>
            <p className="mb-6 text-base text-slate-600 md:text-lg">
              {text.description}{" "}
              <span className="font-semibold text-emerald-600">
                {text.descriptionHighlight}
              </span>
              .
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg
                    className="h-5 w-5 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={text.placeholder}
                  className="w-full rounded-xl border-2 border-slate-200 bg-white py-4 pl-12 pr-4 text-base text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>
                      {language === "uk"
                        ? "Відправляється..."
                        : language === "ru"
                        ? "Отправляется..."
                        : "Sending..."}
                    </span>
                  </>
                ) : (
                  <>
                    <span>{text.button}</span>
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Права частина - ілюстрація/приклади */}
          <div className="relative hidden md:block">
            <div className="relative h-96">
              {/* Декоративні елементи */}
              <div className="absolute left-0 top-0 h-32 w-32 rounded-2xl bg-linear-to-br from-sky-400 to-cyan-500 opacity-20 blur-2xl" />
              <div className="absolute right-0 bottom-0 h-40 w-40 rounded-2xl bg-linear-to-br from-emerald-400 to-teal-500 opacity-20 blur-2xl" />

              {/* Мок-апи сайтів */}
              <div className="absolute left-0 top-0 rotate-[-8deg] transform">
                <div className="h-48 w-32 rounded-lg border-2 border-slate-200 bg-white p-2 shadow-xl">
                  <div className="h-full rounded bg-linear-to-br from-sky-50 to-cyan-50" />
                </div>
              </div>
              <div className="absolute right-0 top-8 rotate-6 transform">
                <div className="h-48 w-32 rounded-lg border-2 border-slate-200 bg-white p-2 shadow-xl">
                  <div className="h-full rounded bg-linear-to-br from-emerald-50 to-teal-50" />
                </div>
              </div>
              <div className="absolute left-1/2 top-16 -translate-x-1/2 rotate-2 transform">
                <div className="h-52 w-36 rounded-lg border-2 border-slate-200 bg-white p-2 shadow-2xl">
                  <div className="h-full rounded bg-linear-to-br from-purple-50 to-pink-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
