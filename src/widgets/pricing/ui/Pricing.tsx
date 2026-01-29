export default function Pricing() {
  return (
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
  );
}
