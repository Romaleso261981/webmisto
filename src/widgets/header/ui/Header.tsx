export default function Header() {
  return (
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
  );
}
