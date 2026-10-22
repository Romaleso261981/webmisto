import { Language } from "@/shared/lib/i18n/translations";

export interface PrivacySection {
  heading: string;
  paragraphs: string[];
}

export interface PrivacyDocument {
  metaTitle: string;
  metaDescription: string;
  title: string;
  updated: string;
  intro: string;
  sections: PrivacySection[];
}

export const privacyPolicy: Record<Language, PrivacyDocument> = {
  uk: {
    metaTitle: "Політика конфіденційності | webzona",
    metaDescription:
      "Як webzona збирає та використовує ім’я, телефон і деталі заявки на сайті webzona.site. Контакти для запиту на видалення даних.",
    title: "Політика конфіденційності",
    updated: "Оновлено 17 жовтня 2026 року",
    intro:
      "webzona — веб-студія у Львові. Ця сторінка пояснює, які дані ви залишаєте на сайті https://www.webzona.site і навіщо ми їх використовуємо.",
    sections: [
      {
        heading: "Хто обробляє дані",
        paragraphs: [
          "Заявки приймає webzona, Львів, Україна. Ми працюємо онлайн по Україні та за її межами.",
          "З питань даних пишіть на webmisto@gmail.com або телефонуйте +38 (068) 947 87 23.",
        ],
      },
      {
        heading: "Які дані ми збираємо",
        paragraphs: [
          "Через форму заявки: ім’я, телефон або Telegram, нішу чи послугу та орієнтовний бюджет.",
          "Через банер із пропозицією презентації: номер телефону.",
          "Технічно сайт може запам’ятати обрану мову і те, що ви закрили банер. Ці дані зберігаються у вашому браузері і не є окремою заявкою.",
        ],
      },
      {
        heading: "Навіщо потрібні дані",
        paragraphs: [
          "Щоб відповісти на заявку, уточнити задачу і підготувати орієнтовний бюджет розробки або просування.",
          "Ми не використовуємо ці контакти для продажу баз даних і не передаємо їх стороннім рекламодавцям.",
        ],
      },
      {
        heading: "Кому передаються дані",
        paragraphs: [
          "Заявка надходить команді webzona в Telegram, щоб ми могли швидко з вами зв’язатися. Доступ має лише команда, яка обробляє звернення.",
          "Хостинг сайту може технічно обробляти запит як оператор інфраструктури. Окремим компаніям для їхнього власного маркетингу ми дані не продаємо.",
        ],
      },
      {
        heading: "Скільки зберігаємо дані",
        paragraphs: [
          "Контакти з заявки зберігаємо, поки ведемо переписку щодо проєкту або поки ви не попросите їх видалити.",
          "Напишіть на webmisto@gmail.com з темою «Видалити мої дані» — приберемо заявку з переписки, якщо немає іншого законного обов’язку її зберігати.",
        ],
      },
      {
        heading: "Реклама і cookie",
        paragraphs: [
          "Зараз сайт не ставить рекламний тег Google на сторінках. Якщо ми підключимо Google Ads або аналітику, такі сервіси можуть зберігати cookie, щоб зрозуміти, що заявка надійшла після переходу з оголошення.",
          "Керувати cookie можна в налаштуваннях браузера. Вимкнення cookie не закриває можливість залишити заявку через форму.",
        ],
      },
    ],
  },
  ru: {
    metaTitle: "Политика конфиденциальности | webzona",
    metaDescription:
      "Как webzona собирает и использует имя, телефон и детали заявки на сайте webzona.site. Контакты для запроса на удаление данных.",
    title: "Политика конфиденциальности",
    updated: "Обновлено 17 октября 2026 года",
    intro:
      "webzona — веб-студия во Львове. Эта страница объясняет, какие данные вы оставляете на сайте https://www.webzona.site и зачем мы их используем.",
    sections: [
      {
        heading: "Кто обрабатывает данные",
        paragraphs: [
          "Заявки принимает webzona, Львов, Украина. Мы работаем онлайн по Украине и за её пределами.",
          "По вопросам данных пишите на webmisto@gmail.com или звоните +38 (068) 947 87 23.",
        ],
      },
      {
        heading: "Какие данные мы собираем",
        paragraphs: [
          "Через форму заявки: имя, телефон или Telegram, нишу или услугу и ориентировочный бюджет.",
          "Через баннер с предложением презентации: номер телефона.",
          "Технически сайт может запомнить выбранный язык и то, что вы закрыли баннер. Эти данные хранятся в вашем браузере и не являются отдельной заявкой.",
        ],
      },
      {
        heading: "Зачем нужны данные",
        paragraphs: [
          "Чтобы ответить на заявку, уточнить задачу и подготовить ориентировочный бюджет разработки или продвижения.",
          "Мы не используем эти контакты для продажи баз данных и не передаём их сторонним рекламодателям.",
        ],
      },
      {
        heading: "Кому передаются данные",
        paragraphs: [
          "Заявка поступает команде webzona в Telegram, чтобы мы могли быстро с вами связаться. Доступ есть только у команды, которая обрабатывает обращения.",
          "Хостинг сайта может технически обрабатывать запрос как оператор инфраструктуры. Другим компаниям для их собственного маркетинга мы данные не продаём.",
        ],
      },
      {
        heading: "Сколько храним данные",
        paragraphs: [
          "Контакты из заявки храним, пока ведём переписку по проекту или пока вы не попросите их удалить.",
          "Напишите на webmisto@gmail.com с темой «Удалить мои данные» — уберём заявку из переписки, если нет другой законной обязанности её хранить.",
        ],
      },
      {
        heading: "Реклама и cookie",
        paragraphs: [
          "Сейчас сайт не ставит рекламный тег Google на страницах. Если мы подключим Google Ads или аналитику, такие сервисы могут сохранять cookie, чтобы понять, что заявка пришла после перехода из объявления.",
          "Управлять cookie можно в настройках браузера. Отключение cookie не закрывает возможность оставить заявку через форму.",
        ],
      },
    ],
  },
  en: {
    metaTitle: "Privacy policy | webzona",
    metaDescription:
      "How webzona collects and uses your name, phone number, and enquiry details on webzona.site, and how to ask us to delete them.",
    title: "Privacy policy",
    updated: "Updated 17 October 2026",
    intro:
      "webzona is a web studio in Lviv. This page explains what you submit on https://www.webzona.site and why we use it.",
    sections: [
      {
        heading: "Who handles the data",
        paragraphs: [
          "Enquiries are handled by webzona, Lviv, Ukraine. We work online across Ukraine and abroad.",
          "For data requests email webmisto@gmail.com or call +38 (068) 947 87 23.",
        ],
      },
      {
        heading: "What we collect",
        paragraphs: [
          "From the enquiry form: name, phone or Telegram, niche or service, and an approximate budget.",
          "From the presentation banner: a phone number.",
          "The site may remember your language and that you closed the banner. That stays in your browser and is not a separate enquiry.",
        ],
      },
      {
        heading: "Why we need it",
        paragraphs: [
          "To reply, clarify the task, and prepare an approximate budget for development or promotion.",
          "We do not sell these contacts or pass them to outside advertisers.",
        ],
      },
      {
        heading: "Who receives the data",
        paragraphs: [
          "The enquiry is sent to the webzona team in Telegram so we can reply quickly. Only the people handling enquiries can see it.",
          "The site host may process the request as infrastructure. We do not sell the data to other companies for their own marketing.",
        ],
      },
      {
        heading: "How long we keep it",
        paragraphs: [
          "We keep enquiry contacts while we are discussing the project, or until you ask us to delete them.",
          "Email webmisto@gmail.com with the subject “Delete my data” and we will remove the enquiry from the conversation unless the law requires us to keep it.",
        ],
      },
      {
        heading: "Advertising and cookies",
        paragraphs: [
          "The site does not currently place a Google advertising tag. If we connect Google Ads or analytics later, those services may store cookies to tell that an enquiry followed an ad click.",
          "You can control cookies in your browser. Turning them off does not block the enquiry form.",
        ],
      },
    ],
  },
};
