export default function Hero() {
  return (
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
  );
}
