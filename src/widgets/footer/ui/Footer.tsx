export default function Footer() {
  return (
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
  );
}
