export default function FAQ() {
  return (
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
  );
}
