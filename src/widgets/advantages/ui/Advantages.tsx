export default function Advantages() {
  return (
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
  );
}
