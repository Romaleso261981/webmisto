export default function Contacts() {
  return (
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
          <p className="font-medium text-slate-900">+38 (068) 947 87 23</p>
        </div>
        <div>
          <p className="text-slate-500">Email</p>
          <p className="font-medium text-slate-900">
            webmisto@gmail.com
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
  );
}
