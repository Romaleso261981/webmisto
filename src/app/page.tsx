"use client";

import { useState } from "react";
import NotificationPopup from "./components/NotificationPopup";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    niche: "",
    budget: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: "success" | "error" | "info";
    message: string;
    isVisible: boolean;
  }>({
    type: "info",
    message: "",
    isVisible: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Очищаємо помилку для поля, коли користувач починає вводити
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Будь ласка, введіть ваше ім'я";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Будь ласка, введіть телефон або Telegram";
    }

    if (!formData.niche.trim()) {
      newErrors.niche = "Будь ласка, вкажіть нішу або послугу";
    }

    if (!formData.budget.trim()) {
      newErrors.budget = "Будь ласка, вкажіть орієнтовний бюджет";
    }

    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { isValid, errors: validationErrors } = validateForm();
    if (!isValid) {
      // Прокручуємо до першого поля з помилкою
      const firstErrorField = Object.keys(validationErrors)[0];
      if (firstErrorField) {
        setTimeout(() => {
          const element = document.querySelector(`[name="${firstErrorField}"]`);
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
          (element as HTMLInputElement)?.focus();
        }, 100);
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Помилка відправки заявки");
      }

      // Успішна відправка
      setNotification({
        type: "success",
        message: "Дякуємо! Ваша заявка відправлена. Ми зв'яжемося з вами найближчим часом.",
        isVisible: true,
      });
      setFormData({ name: "", phone: "", niche: "", budget: "" });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Сталася помилка при відправці заявки. Будь ласка, спробуйте ще раз або зв'яжіться з нами безпосередньо.";
      
      setNotification({
        type: "error",
        message: errorMessage,
        isVisible: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeNotification = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500 text-lg font-bold text-white">
              WM
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                WebMisto
              </span>
              <span className="text-xs text-slate-500">
                Веб студія у Львові
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            <a href="#services" className="hover:text-sky-600">
              Послуги
            </a>
            <a href="#pricing" className="hover:text-sky-600">
              Тарифи
            </a>
            <a href="#faq" className="hover:text-sky-600">
              Питання
            </a>
            <a href="#contacts" className="hover:text-sky-600">
              Контакти
            </a>
          </nav>

          <a
            href="#lead-form"
            className="hidden rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600 md:inline-flex"
          >
            Замовити таргет
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16">
        {/* Hero */}
        <section className="grid gap-10 pb-16 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-center md:pb-24">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-700">
              Розробка сайтів та онлайн‑платформ
            </p>
            <h1 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Сучасна розробка{" "}
              <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                сайтів, інтернет‑магазинів, навчальних платформ
              </span>
            </h1>
            <p className="mb-6 max-w-xl text-sm text-slate-600 md:text-base">
              Створюємо швидкі, адаптивні та зручні веб‑рішення для бізнесу:
              корпоративні сайти, інтернет‑магазини та навчальні платформи.
              Допомагаємо перетворити ідею в працюючий онлайн‑проєкт.
            </p>

            <div className="mb-6 flex flex-col gap-3 text-xs text-slate-600 md:flex-row md:items-center md:text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                  30+
                </span>
                <span>реалізованих веб‑проєктів</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-xs text-sky-700">
                  UX
                </span>
                <span>фокус на зручності та конверсії</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600"
              >
                Замовити розробку
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-sky-500/60 hover:text-sky-700"
              >
                Дивитись тарифи
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Допоможемо обрати оптимальний формат: сайт‑візитка, інтернет‑магазин
              чи повноцінна освітня платформа.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 bg-gradient-to-tr from-sky-200 via-cyan-100 to-transparent blur-3xl" />
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-sky-100 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Аналітика проєктів
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Результати за 3 місяці
                  </p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                  +247% лідів
                </span>
              </div>

              <div className="mb-4 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-slate-500">Інвестиції</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    $1 200
                  </p>
                  <p className="mt-1 text-[11px] text-emerald-600">
                    Оптимізовано структуру
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-slate-500">Проєкти</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    486
                  </p>
                  <p className="mt-1 text-[11px] text-emerald-600">
                    12 запущених рішень
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-slate-500">Швидкість</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    4.3%
                  </p>
                  <p className="mt-1 text-[11px] text-sky-700">
                    Завдяки сучасному стеку
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-3">
                <p className="text-xs text-slate-600">
                  «Отримали сучасний сайт та зручну адмін‑панель. Команда
                  запропонувала структуру, дизайн і реалізувала усе під ключ».
                </p>
                <p className="mt-2 text-xs font-medium text-slate-500">
                  — Власник локального бізнесу у Львові
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section
          id="services"
          className="border-y border-slate-200 bg-white py-14 md:py-16"
        >
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            <div>
              <h2 className="mb-3 text-2xl font-semibold md:text-3xl">
                Чому варто довірити нам розробку
              </h2>
              <p className="mb-6 text-sm text-slate-600 md:text-base">
                Працюємо як технічний партнер: від прототипу та дизайну до
                розробки, інтеграцій і підтримки проєкту.
              </p>
              <ul className="space-y-4 text-sm text-slate-800">
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-center text-sm leading-6 text-sky-700">
                    01
                  </span>
                  <div>
                    <p className="font-medium">Продумана архітектура</p>
                    <p className="text-xs text-slate-500 md:text-sm">
                      Аналізуємо бізнес‑процеси, будуємо логіку сайту чи платформи
                      так, щоб її було легко масштабувати та допрацьовувати.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-center text-sm leading-6 text-sky-700">
                    02
                  </span>
                  <div>
                    <p className="font-medium">Фокус на конверсії</p>
                    <p className="text-xs text-slate-500 md:text-sm">
                      Проєктуємо зрозумілу структуру, форми, кошики та особисті
                      кабінети, щоб користувачі швидко доходили до цільової дії.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-center text-sm leading-6 text-sky-700">
                    03
                  </span>
                  <div>
                    <p className="font-medium">Сучасний стек</p>
                    <p className="text-xs text-slate-500 md:text-sm">
                      Використовуємо Next.js, React, headless‑CMS, платіжні
                      інтеграції та інші актуальні технології для стабільної
                      роботи.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-center text-sm leading-6 text-sky-700">
                    04
                  </span>
                  <div>
                    <p className="font-medium">Прозора вартість</p>
                    <p className="text-xs text-slate-500 md:text-sm">
                      Фіксуємо обсяг робіт, етапи та дедлайни. Допомагаємо
                      обрати рішення під ваш бюджет — від MVP до повної версії.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Типи рішень
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Корпоративні сайти та лендінги
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Сайти‑візитки, посадкові сторінки, багатосторінкові сайти з
                  блогом, портфоліо та сторінками послуг.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Інтернет‑магазини
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Каталоги, кошики, оплати
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Імпорт товарів, категорії, фільтри, інтеграції з платіжними
                  системами та службами доставки.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Навчальні платформи
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Онлайн‑курси та кабінети студентів
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Особисті кабінети, уроки, модулі, прогрес, домашні завдання,
                  оплати й доступи до курсів.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Додатково
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Підключення сервісів та підтримка
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Інтеграції з CRM, email‑розсилками, чат‑ботами, аналітикою,
                  технічна підтримка та доробки.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-slate-50 py-14 md:py-20">
          <div className="mb-8 text-center md:mb-10">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Тарифи на розробку сайтів та платформ
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Оберіть формат співпраці під ваші задачі: від простого сайту до
              інтернет‑магазину чи навчальної платформи.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Старт
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">
                $320
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Оптимальний для невеликого сайту‑візитки або лендінгу
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-700">
                <li>• Аналіз ніші та структури майбутнього сайту</li>
                <li>• Розробка лендінгу або сайту‑візитки до 5 сторінок</li>
                <li>• Базовий адаптив під мобільні пристрої</li>
                <li>• Підключення форм заявок та контактів</li>
                <li>• Базова SEO‑структура (title, опис, заголовки)</li>
              </ul>
              <a
                href="#lead-form"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Обрати тариф
              </a>
            </div>

            <div className="relative flex flex-col rounded-3xl border border-sky-200 bg-white p-6 shadow-xl shadow-sky-100">
              <div className="absolute -top-3 right-6 rounded-full bg-sky-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                Популярний
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-700">
                Бізнес
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">
                $450
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Для малого та середнього бізнесу
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-800">
                <li>• Усе з тарифу «Старт»</li>
                <li>• Розробка багатосторінкового сайту або невеликого магазину</li>
                <li>• Налаштування каталогу, кошика та замовлень</li>
                <li>• Підключення платіжних систем та доставки</li>
                <li>• Стандартна адмін‑частина для керування контентом</li>
              </ul>
              <a
                href="#lead-form"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-300 transition hover:bg-sky-600"
              >
                Замовити розробку
              </a>
            </div>

            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Платформа
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">
                $720
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Для масштабних магазинів чи навчальних платформ
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-700">
                <li>• Усі пункти з тарифу «Бізнес»</li>
                <li>• Розробка інтернет‑магазину або навчальної платформи</li>
                <li>• Особисті кабінети, ролі користувачів, аналітика</li>
                <li>• Індивідуальні інтеграції з CRM та сервісами</li>
                <li>• Резервне копіювання та базова підтримка</li>
              </ul>
              <a
                href="#lead-form"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Запланувати консультацію
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 text-xs text-slate-600 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:text-sm">
            <p>
              Ми допомагаємо обрати рішення під ваш етап розвитку: спочатку
              можна запустити простий сайт, а з часом розширити його до магазину
              чи навчальної платформи.
            </p>
            <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-700">
              <p className="font-medium text-slate-900">
                Орієнтовні ціни на розробку
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-slate-600 md:text-xs">
                <span>Розробка лендінгу</span>
                <span className="text-right text-slate-700">від $320</span>
                <span>Корпоративний сайт</span>
                <span className="text-right text-slate-700">від $450</span>
                <span>Інтернет‑магазин</span>
                <span className="text-right text-slate-700">від $720</span>
                <span>Навчальна платформа</span>
                <span className="text-right text-slate-700">індивідуально</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-500">
                Точну вартість розраховуємо після короткого брифу та уточнення
                функціоналу.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="border-y border-slate-200 bg-white py-14 md:py-20"
        >
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Популярні питання про розробку
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Дізнайтеся, як відбувається процес створення сайту, магазину чи
              навчальної платформи та з чого почати.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4 text-sm text-slate-800 md:text-base">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
              <p className="text-sm font-semibold text-slate-900 md:text-base">
                Скільки коштує розробка сайту?
              </p>
              <p className="mt-2 text-xs text-slate-600 md:text-sm">
                Вартість залежить від типу проєкту: простий лендінг, корпоративний
                сайт, інтернет‑магазин чи навчальна платформа. Після короткої
                консультації ми зможемо зорієнтувати вас по бюджету та етапах.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
              <p className="text-sm font-semibold text-slate-900 md:text-base">
                Скільки часу займає розробка?
              </p>
              <p className="mt-2 text-xs text-slate-600 md:text-sm">
                Базовий лендінг можна запустити за 2–3 тижні. Більш складні
                проєкти — інтернет‑магазини та освітні платформи — зазвичай
                займають від 4 до 8 тижнів залежно від обсягу.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
              <p className="text-sm font-semibold text-slate-900 md:text-base">
                Чим відрізняється інтернет‑магазин від звичайного сайту?
              </p>
              <p className="mt-2 text-xs text-slate-600 md:text-sm">
                Інтернет‑магазин має каталог товарів, кошик, оформлення замовлення
                та оплати. Звичайний корпоративний сайт більше про представлення
                компанії, послуг і збір заявок.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
              <p className="text-sm font-semibold text-slate-900 md:text-base">
                З чого почати, якщо хочу навчальну платформу?
              </p>
              <p className="mt-2 text-xs text-slate-600 md:text-sm">
                На старті достатньо описати формат курсів, типи контенту
                (відео, тести, домашні завдання), ролі користувачів та спосіб
                монетизації. Ми допоможемо зібрати це в технічне завдання та
                запропонуємо рішення.
              </p>
            </div>
          </div>
        </section>

        {/* Lead form & contacts */}
        <section
          id="lead-form"
          className="grid gap-10 py-14 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:py-20"
        >
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Отримайте безкоштовну консультацію по вашому проєкту
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Залиште контакти — ми проаналізуємо вашу ідею або поточний сайт,
              підкажемо оптимальний формат та орієнтовний бюджет розробки.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Ім&apos;я
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Як до вас звертатись?"
                  className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 outline-none transition ${
                    errors.name
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                      : "border-slate-300 ring-sky-500/0 focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Телефон або Telegram
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+38 (0__) ___ __ __"
                  className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 outline-none transition ${
                    errors.phone
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                      : "border-slate-300 ring-sky-500/0 focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Ніша / послуга
                </label>
                <input
                  type="text"
                  name="niche"
                  value={formData.niche}
                  onChange={handleInputChange}
                  placeholder="Наприклад: салон краси, онлайн-курс, клініка тощо"
                  className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 outline-none transition ${
                    errors.niche
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                      : "border-slate-300 ring-sky-500/0 focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
                  }`}
                />
                {errors.niche && (
                  <p className="mt-1 text-xs text-red-600">{errors.niche}</p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Орієнтовний бюджет на розробку
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  placeholder="Наприклад: $500–$2000"
                  className={`w-full rounded-xl border bg-white px-3 py-2 text-sm text-slate-900 outline-none transition ${
                    errors.budget
                      ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/40"
                      : "border-slate-300 ring-sky-500/0 focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
                  }`}
                />
                {errors.budget && (
                  <p className="mt-1 text-xs text-red-600">{errors.budget}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
              >
                {isSubmitting ? "Відправляється..." : "Відправити заявку"}
              </button>

              <p className="text-[11px] text-slate-500">
                Натискаючи кнопку, ви погоджуєтесь на обробку персональних
                даних. Ми не передаємо ваші контакти третім особам.
              </p>
            </form>
          </div>

          <div
            id="contacts"
            className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-800 md:p-6"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                Контакти
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                WebMisto — веб‑студія у Львові
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Львів, Україна (працюємо онлайн по всій країні та за кордоном)
              </p>
            </div>
            <div className="grid gap-3 text-xs text-slate-600">
              <div>
                <p className="text-slate-500">Телефон</p>
                <p className="font-medium text-slate-900">+38 (0__) ___ __ __</p>
              </div>
              <div>
                <p className="text-slate-500">Email</p>
                <p className="font-medium text-slate-900">
                  info@webmisto.com
                </p>
              </div>
              <div>
                <p className="text-slate-500">Графік роботи</p>
                <p className="font-medium text-slate-900">
                  Пн–Пт: 9:00–19:00
                </p>
              </div>
            </div>
            <div className="grid gap-2 text-xs text-slate-600">
              <p className="text-slate-500">Послуги</p>
              <p>• Розробка сайтів та лендінгів</p>
              <p>• Створення інтернет‑магазинів</p>
              <p>• Розробка навчальних платформ</p>
              <p>• Підтримка та розвиток проєктів</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
          <p>Створено © {new Date().getFullYear()} WebMisto</p>
          <div className="flex flex-wrap gap-4">
            <span>Розробка сайтів</span>
            <span>Просування сайту</span>
            <span>Таргетована реклама</span>
            <span>Контакти</span>
          </div>
        </div>
      </footer>

      <NotificationPopup
        type={notification.type}
        message={notification.message}
        isVisible={notification.isVisible}
        onClose={closeNotification}
        duration={notification.type === "success" ? 5000 : 7000}
      />
    </div>
  );
}
