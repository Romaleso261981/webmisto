export default function Home() {
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
              Таргетована реклама у Львові
            </p>
            <h1 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              Таргетована реклама в{" "}
              <span className="bg-gradient-to-r from-sky-600 to-cyan-500 bg-clip-text text-transparent">
                Instagram, Facebook, TikTok
              </span>
            </h1>
            <p className="mb-6 max-w-xl text-sm text-slate-600 md:text-base">
              Запускаємо ефективні рекламні кампанії, що приводять реальних
              клієнтів вже в перші дні. Аналіз конкурентів, чіткі сегменти
              аудиторії та креативи, які виділяють ваш бізнес серед інших.
            </p>

            <div className="mb-6 flex flex-col gap-3 text-xs text-slate-600 md:flex-row md:items-center md:text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-700">
                  5+
                </span>
                <span>років досвіду в таргеті</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-xs text-sky-700">
                  UA
                </span>
                <span>працюємо з бізнесами по всій Україні</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600"
              >
                Замовити таргет
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-sky-500/60 hover:text-sky-700"
              >
                Дивитись тарифи
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Перші результати ви побачите вже через кілька днів після запуску
              кампанії.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 -z-10 bg-gradient-to-tr from-sky-200 via-cyan-100 to-transparent blur-3xl" />
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-sky-100 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Рекламний кабінет
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Результати за 30 днів
                  </p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                  +247% лідів
                </span>
              </div>

              <div className="mb-4 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-slate-500">Бюджет</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    $1 200
                  </p>
                  <p className="mt-1 text-[11px] text-emerald-600">
                    Оптимізовано витрати
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-slate-500">Ліди</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    486
                  </p>
                  <p className="mt-1 text-[11px] text-emerald-600">
                    ~2.5$ за ліда
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <p className="text-slate-500">CTR</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    4.3%
                  </p>
                  <p className="mt-1 text-[11px] text-sky-700">
                    Завдяки сильним креативам
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white p-3">
                <p className="text-xs text-slate-600">
                  «Після налаштування таргету стабільно отримуємо нові заявки
                  щодня. Команда чітко пояснює, що ми робимо та навіщо».
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
                Чому варто довірити таргет нам
              </h2>
              <p className="mb-6 text-sm text-slate-600 md:text-base">
                Ми поєднуємо глибоку аналітику з креативним підходом. Запускаємо
                кампанії, які не просто «крутяться», а приносять продажі.
              </p>
              <ul className="space-y-4 text-sm text-slate-800">
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-center text-sm leading-6 text-sky-700">
                    01
                  </span>
                  <div>
                    <p className="font-medium">Кваліфікований підхід</p>
                    <p className="text-xs text-slate-500 md:text-sm">
                      Аналізуємо нішу, конкурентів та аудиторію, формуємо
                      гіпотези й тестуємо зв&apos;язки «аудиторія + офер +
                      креатив».
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-center text-sm leading-6 text-sky-700">
                    02
                  </span>
                  <div>
                    <p className="font-medium">Фокус на результаті</p>
                    <p className="text-xs text-slate-500 md:text-sm">
                      Не женемося за «лайками» — рахуємо заявки, вартість
                      ліда, повернення інвестицій та оптимізуємо кампанії.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-center text-sm leading-6 text-sky-700">
                    03
                  </span>
                  <div>
                    <p className="font-medium">5 років у таргетингу</p>
                    <p className="text-xs text-slate-500 md:text-sm">
                      Працюємо з 2019 року, постійно оновлюємо стратегії під
                      зміни алгоритмів Facebook та Instagram.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-sky-100 text-center text-sm leading-6 text-sky-700">
                    04
                  </span>
                  <div>
                    <p className="font-medium">Адекватна вартість</p>
                    <p className="text-xs text-slate-500 md:text-sm">
                      Формуємо прозорий прайс, допомагаємо оптимально
                      розподілити рекламний бюджет і не «зливати» гроші дарма.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Формати
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Facebook, Instagram, TikTok
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Запускаємо кампанії під різні цілі: охоплення, трафік, ліди,
                  продажі, повідомлення, залучення.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Аналітика
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Facebook Pixel та Google Analytics
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Налаштовуємо відстеження подій на сайті, щоб бачити повну
                  воронку: від показу оголошення до заявки.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Комунікація
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Звітність та підтримка
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Регулярні звіти по результатах, рекомендації щодо покращень,
                  швидкий зворотний зв&apos;язок.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Додатково
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-900">
                  Розробка лендінгу під запуск
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  За потреби створюємо сайт або лендінг, який максимально
                  розкриває вашу пропозицію та конвертує трафік у лідів.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-slate-50 py-14 md:py-20">
          <div className="mb-8 text-center md:mb-10">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Тарифи на налаштування таргетованої реклами
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Оберіть формат співпраці під ваші цілі та бюджет. У кожен тариф
              входить повна підготовка та супровід кампаній.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Економ
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">
                $320
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Оптимальний для старту з нуля
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-700">
                <li>• Аналіз цільової аудиторії</li>
                <li>• Налаштування рекламних кампаній</li>
                <li>• Створення рекламних оголошень</li>
                <li>• Оптимізація під мобільні пристрої</li>
                <li>• Базові звіти по ефективності</li>
                <li>• Налаштування Facebook Pixel</li>
                <li>• Інтеграція з Google Analytics</li>
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
                Базовий
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">
                $450
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Фокус на продажах та нових лідах
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-800">
                <li>• Усе з тарифу «Економ»</li>
                <li>• Поглиблений аналіз аудиторії та конкурентів</li>
                <li>• Підтримка відеооголошень</li>
                <li>• Автоматизовані нагадування та сповіщення</li>
                <li>• Динамічний ремаркетинг</li>
                <li>• Кастомізація реклами під різні платформи</li>
                <li>• Модерація коментарів та повідомлень</li>
              </ul>
              <a
                href="#lead-form"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-300 transition hover:bg-sky-600"
              >
                Замовити таргет
              </a>
            </div>

            <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                Бізнес-план
              </p>
              <p className="mt-3 text-2xl font-semibold text-slate-900">
                $720
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Розвиток бізнесу в соцмережах та Google
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-700">
                <li>• Усі пункти з тарифу «Базовий»</li>
                <li>• Налаштування реклами Google Ads</li>
                <li>• Побудова воронки продажів</li>
                <li>• Індивідуальні консультації по розвитку бізнесу</li>
                <li>• Оптимізація витрат на рекламу</li>
                <li>• Періодичні стратегічні сесії</li>
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
              Наші клієнти отримують максимум результату з кожної вкладеної
              гривні. Вартість наших послуг окупається за рахунок правильно
              налаштованих кампаній та постійної оптимізації.
            </p>
            <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-xs text-slate-700">
              <p className="font-medium text-slate-900">
                Орієнтовні ціни на послуги
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] text-slate-600 md:text-xs">
                <span>Таргетована реклама Facebook</span>
                <span className="text-right text-slate-700">від $320 / міс</span>
                <span>Реклама в Instagram</span>
                <span className="text-right text-slate-700">$250 / міс</span>
                <span>Ведення сторінки в Instagram</span>
                <span className="text-right text-slate-700">$230 / міс</span>
                <span>Розробка сайту під запуск</span>
                <span className="text-right text-slate-700">від $400</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-500">
                Бюджет на рекламу обговорюємо окремо, виходячи з ніші та цілей.
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
              Питання про таргетовану рекламу
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Дізнайтеся, як ми використовуємо рекламу Facebook та Instagram для
              просування вашого бізнесу в Україні.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4 text-sm text-slate-800 md:text-base">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
              <p className="text-sm font-semibold text-slate-900 md:text-base">
                Скільки коштує реклама у Facebook?
              </p>
              <p className="mt-2 text-xs text-slate-600 md:text-sm">
                При бюджеті до $5 на день вартість за 1000 показів реклами
                зазвичай становить від $0.5 до $2 на попередньо зібрану цільову
                аудиторію. Остаточна ціна залежить від ніші, конкуренції та
                креативів.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
              <p className="text-sm font-semibold text-slate-900 md:text-base">
                Скільки часу займає налаштування таргету?
              </p>
              <p className="mt-2 text-xs text-slate-600 md:text-sm">
                Повна підготовка кампанії (бріф, аналіз, підбір аудиторій,
                креативи, технічні налаштування та тестові запуски) займає до
                двох діб. Після цього ми виходимо в етап оптимізації.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
              <p className="text-sm font-semibold text-slate-900 md:text-base">
                Які основні цілі таргетованої реклами?
              </p>
              <p className="mt-2 text-xs text-slate-600 md:text-sm">
                Головна ціль — отримати для вас заявки та продажі через показ
                релевантних комерційних оголошень. Система сама обирає
                користувачів за поведінкою, інтересами та активністю, щоб
                показувати рекламу тим, хто найбільш схильний до цільової дії.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 md:p-5">
              <p className="text-sm font-semibold text-slate-900 md:text-base">
                Скільки потрібно платити за рекламу в Instagram?
              </p>
              <p className="mt-2 text-xs text-slate-600 md:text-sm">
                Орієнтовно це близько $1 за 1000 показів. На фактичну вартість
                впливають якість креативів, стратегія, аудиторія та сезонність.
                Ми допомагаємо обрати оптимальний бюджет, щоб отримати максимум
                результату.
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
              Отримайте безкоштовну консультацію таргетолога
            </h2>
            <p className="mt-3 text-sm text-slate-600 md:text-base">
              Залиште контакти — ми проаналізуємо ваш бізнес, підкажемо, який
              бюджет буде оптимальним, та запропонуємо стратегію запуску
              реклами.
            </p>

            <form className="mt-6 space-y-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Ім&apos;я
                </label>
                <input
                  type="text"
                  placeholder="Як до вас звертатись?"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-500/0 transition focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Телефон або Telegram
                </label>
                <input
                  type="text"
                  placeholder="+38 (0__) ___ __ __"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-500/0 transition focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Ніша / послуга
                </label>
                <input
                  type="text"
                  placeholder="Наприклад: салон краси, онлайн-курс, клініка тощо"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-500/0 transition focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-700">
                  Орієнтовний рекламний бюджет / міс
                </label>
                <input
                  type="text"
                  placeholder="Наприклад: $300–$1000"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-500/0 transition focus:border-sky-500/70 focus:ring-2 focus:ring-sky-500/40"
                />
              </div>

              <button
                type="button"
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition hover:bg-sky-600 md:w-auto"
              >
                Відправити заявку
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
                WebMisto — веб студія у Львові
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Львів, Україна (онлайн по всій країні)
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
              <p>• Розробка сайтів</p>
              <p>• Таргетована реклама</p>
              <p>• SEO-просування</p>
              <p>• Дизайн лендінгів</p>
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
    </div>
  );
}
