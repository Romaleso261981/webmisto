export type Language = "uk" | "ru" | "en";

export interface Translations {
  header: {
    nav: {
      services: string;
      pricing: string;
      faq: string;
      contacts: string;
    };
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    description: string;
    stats: {
      projects: string;
      ux: string;
    };
    cta: {
      order: string;
      viewPricing: string;
    };
    note: string;
    analytics: {
      title: string;
      subtitle: string;
      leads: string;
      investment: string;
      projects: string;
      speed: string;
      investmentNote: string;
      projectsNote: string;
      speedNote: string;
      testimonial: string;
      testimonialAuthor: string;
    };
  };
  advantages: {
    title: string;
    description: string;
    items: {
      architecture: {
        title: string;
        description: string;
      };
      conversion: {
        title: string;
        description: string;
      };
      stack: {
        title: string;
        description: string;
      };
      pricing: {
        title: string;
        description: string;
      };
    };
    solutions: {
      corporate: {
        label: string;
        title: string;
        description: string;
      };
      shop: {
        label: string;
        title: string;
        description: string;
      };
      platform: {
        label: string;
        title: string;
        description: string;
      };
      additional: {
        label: string;
        title: string;
        description: string;
      };
    };
  };
  pricing: {
    title: string;
    description: string;
    plans: {
      start: {
        name: string;
        price: string;
        description: string;
        features: string[];
        cta: string;
      };
      business: {
        name: string;
        price: string;
        description: string;
        badge: string;
        features: string[];
        cta: string;
      };
      platform: {
        name: string;
        price: string;
        description: string;
        features: string[];
        cta: string;
      };
    };
    note: string;
    priceList: {
      title: string;
      landing: string;
      corporate: string;
      shop: string;
      platform: string;
      individual: string;
    };
    priceNote: string;
  };
  faq: {
    title: string;
    description: string;
    items: {
      cost: {
        question: string;
        answer: string;
      };
      time: {
        question: string;
        answer: string;
      };
      difference: {
        question: string;
        answer: string;
      };
      platform: {
        question: string;
        answer: string;
      };
    };
  };
  form: {
    title: string;
    description: string;
    fields: {
      name: {
        label: string;
        placeholder: string;
        error: string;
      };
      phone: {
        label: string;
        placeholder: string;
        error: string;
      };
      niche: {
        label: string;
        placeholder: string;
        error: string;
      };
      budget: {
        label: string;
        placeholder: string;
        error: string;
      };
    };
    submit: string;
    submitting: string;
    privacy: string;
    success: string;
  };
  contacts: {
    title: string;
    company: string;
    location: string;
    phone: string;
    email: string;
    schedule: string;
    services: {
      title: string;
      items: string[];
    };
  };
  footer: {
    copyright: string;
    links: string[];
  };
}

export const translations: Record<Language, Translations> = {
  uk: {
    header: {
      nav: {
        services: "Послуги",
        pricing: "Тарифи",
        faq: "Питання",
        contacts: "Контакти",
      },
      cta: "Замовити таргет",
    },
    hero: {
      badge: "Розробка сайтів та онлайн‑платформ",
      title: "Сучасна розробка",
      titleHighlight: "сайтів, інтернет‑магазинів, навчальних платформ",
      description:
        "Створюємо швидкі, адаптивні та зручні веб‑рішення для бізнесу: корпоративні сайти, інтернет‑магазини та навчальні платформи. Допомагаємо перетворити ідею в працюючий онлайн‑проєкт.",
      stats: {
        projects: "реалізованих веб‑проєктів",
        ux: "фокус на зручності та конверсії",
      },
      cta: {
        order: "Замовити розробку",
        viewPricing: "Дивитись тарифи",
      },
      note: "Допоможемо обрати оптимальний формат: сайт‑візитка, інтернет‑магазин чи повноцінна освітня платформа.",
      analytics: {
        title: "Аналітика проєктів",
        subtitle: "Результати за 3 місяці",
        leads: "+247% лідів",
        investment: "Інвестиції",
        projects: "Проєкти",
        speed: "Швидкість",
        investmentNote: "Оптимізовано структуру",
        projectsNote: "12 запущених рішень",
        speedNote: "Завдяки сучасному стеку",
        testimonial:
          "«Отримали сучасний сайт та зручну адмін‑панель. Команда запропонувала структуру, дизайн і реалізувала усе під ключ».",
        testimonialAuthor: "— Власник локального бізнесу у Львові",
      },
    },
    advantages: {
      title: "Чому варто довірити нам розробку",
      description:
        "Працюємо як технічний партнер: від прототипу та дизайну до розробки, інтеграцій і підтримки проєкту.",
      items: {
        architecture: {
          title: "Продумана архітектура",
          description:
            "Аналізуємо бізнес‑процеси, будуємо логіку сайту чи платформи так, щоб її було легко масштабувати та допрацьовувати.",
        },
        conversion: {
          title: "Фокус на конверсії",
          description:
            "Проєктуємо зрозумілу структуру, форми, кошики та особисті кабінети, щоб користувачі швидко доходили до цільової дії.",
        },
        stack: {
          title: "Сучасний стек",
          description:
            "Використовуємо Next.js, React, headless‑CMS, платіжні інтеграції та інші актуальні технології для стабільної роботи.",
        },
        pricing: {
          title: "Прозора вартість",
          description:
            "Фіксуємо обсяг робіт, етапи та дедлайни. Допомагаємо обрати рішення під ваш бюджет — від MVP до повної версії.",
        },
      },
      solutions: {
        corporate: {
          label: "Типи рішень",
          title: "Корпоративні сайти та лендінги",
          description:
            "Сайти‑візитки, посадкові сторінки, багатосторінкові сайти з блогом, портфоліо та сторінками послуг.",
        },
        shop: {
          label: "Інтернет‑магазини",
          title: "Каталоги, кошики, оплати",
          description:
            "Імпорт товарів, категорії, фільтри, інтеграції з платіжними системами та службами доставки.",
        },
        platform: {
          label: "Навчальні платформи",
          title: "Онлайн‑курси та кабінети студентів",
          description:
            "Особисті кабінети, уроки, модулі, прогрес, домашні завдання, оплати й доступи до курсів.",
        },
        additional: {
          label: "Додатково",
          title: "Підключення сервісів та підтримка",
          description:
            "Інтеграції з CRM, email‑розсилками, чат‑ботами, аналітикою, технічна підтримка та доробки.",
        },
      },
    },
    pricing: {
      title: "Тарифи на розробку сайтів та платформ",
      description:
        "Оберіть формат співпраці під ваші задачі: від простого сайту до інтернет‑магазину чи навчальної платформи.",
      plans: {
        start: {
          name: "Старт",
          price: "$320",
          description: "Оптимальний для невеликого сайту‑візитки або лендінгу",
          features: [
            "Аналіз ніші та структури майбутнього сайту",
            "Розробка лендінгу або сайту‑візитки до 5 сторінок",
            "Базовий адаптив під мобільні пристрої",
            "Підключення форм заявок та контактів",
            "Базова SEO‑структура (title, опис, заголовки)",
          ],
          cta: "Обрати тариф",
        },
        business: {
          name: "Бізнес",
          price: "$450",
          description: "Для малого та середнього бізнесу",
          badge: "Популярний",
          features: [
            "Усе з тарифу «Старт»",
            "Розробка багатосторінкового сайту або невеликого магазину",
            "Налаштування каталогу, кошика та замовлень",
            "Підключення платіжних систем та доставки",
            "Стандартна адмін‑частина для керування контентом",
          ],
          cta: "Замовити розробку",
        },
        platform: {
          name: "Платформа",
          price: "$720",
          description: "Для масштабних магазинів чи навчальних платформ",
          features: [
            "Усі пункти з тарифу «Бізнес»",
            "Розробка інтернет‑магазину або навчальної платформи",
            "Особисті кабінети, ролі користувачів, аналітика",
            "Індивідуальні інтеграції з CRM та сервісами",
            "Резервне копіювання та базова підтримка",
          ],
          cta: "Запланувати консультацію",
        },
      },
      note: "Ми допомагаємо обрати рішення під ваш етап розвитку: спочатку можна запустити простий сайт, а з часом розширити його до магазину чи навчальної платформи.",
      priceList: {
        title: "Орієнтовні ціни на розробку",
        landing: "Розробка лендінгу",
        corporate: "Корпоративний сайт",
        shop: "Інтернет‑магазин",
        platform: "Навчальна платформа",
        individual: "індивідуально",
      },
      priceNote:
        "Точну вартість розраховуємо після короткого брифу та уточнення функціоналу.",
    },
    faq: {
      title: "Популярні питання про розробку",
      description:
        "Дізнайтеся, як відбувається процес створення сайту, магазину чи навчальної платформи та з чого почати.",
      items: {
        cost: {
          question: "Скільки коштує розробка сайту?",
          answer:
            "Вартість залежить від типу проєкту: простий лендінг, корпоративний сайт, інтернет‑магазин чи навчальна платформа. Після короткої консультації ми зможемо зорієнтувати вас по бюджету та етапах.",
        },
        time: {
          question: "Скільки часу займає розробка?",
          answer:
            "Базовий лендінг можна запустити за 2–3 тижні. Більш складні проєкти — інтернет‑магазини та освітні платформи — зазвичай займають від 4 до 8 тижнів залежно від обсягу.",
        },
        difference: {
          question: "Чим відрізняється інтернет‑магазин від звичайного сайту?",
          answer:
            "Інтернет‑магазин має каталог товарів, кошик, оформлення замовлення та оплати. Звичайний корпоративний сайт більше про представлення компанії, послуг і збір заявок.",
        },
        platform: {
          question: "З чого почати, якщо хочу навчальну платформу?",
          answer:
            "На старті достатньо описати формат курсів, типи контенту (відео, тести, домашні завдання), ролі користувачів та спосіб монетизації. Ми допоможемо зібрати це в технічне завдання та запропонуємо рішення.",
        },
      },
    },
    form: {
      title: "Отримайте безкоштовну консультацію по вашому проєкту",
      description:
        "Залиште контакти — ми проаналізуємо вашу ідею або поточний сайт, підкажемо оптимальний формат та орієнтовний бюджет розробки.",
      fields: {
        name: {
          label: "Ім'я",
          placeholder: "Як до вас звертатись?",
          error: "Будь ласка, введіть ваше ім'я",
        },
        phone: {
          label: "Телефон або Telegram",
          placeholder: "+38 (0__) ___ __ __",
          error: "Будь ласка, введіть телефон або Telegram",
        },
        niche: {
          label: "Ніша / послуга",
          placeholder: "Наприклад: салон краси, онлайн-курс, клініка тощо",
          error: "Будь ласка, вкажіть нішу або послугу",
        },
        budget: {
          label: "Орієнтовний бюджет на розробку",
          placeholder: "Наприклад: $500–$2000",
          error: "Будь ласка, вкажіть орієнтовний бюджет",
        },
      },
      submit: "Відправити заявку",
      submitting: "Відправляється...",
      privacy:
        "Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних. Ми не передаємо ваші контакти третім особам.",
      success:
        "Дякуємо! Ваша заявка відправлена. Ми зв'яжемося з вами найближчим часом.",
    },
    contacts: {
      title: "Контакти",
      company: "WebMisto — веб‑студія у Львові",
      location: "Львів, Україна (працюємо онлайн по всій країні та за кордоном)",
      phone: "Телефон",
      email: "Email",
      schedule: "Графік роботи",
      services: {
        title: "Послуги",
        items: [
          "Розробка сайтів та лендінгів",
          "Створення інтернет‑магазинів",
          "Розробка навчальних платформ",
          "Підтримка та розвиток проєктів",
        ],
      },
    },
    footer: {
      copyright: "Створено ©",
      links: [
        "Розробка сайтів",
        "Просування сайту",
        "Таргетована реклама",
        "Контакти",
      ],
    },
  },
  ru: {
    header: {
      nav: {
        services: "Услуги",
        pricing: "Тарифы",
        faq: "Вопросы",
        contacts: "Контакты",
      },
      cta: "Заказать таргет",
    },
    hero: {
      badge: "Разработка сайтов и онлайн‑платформ",
      title: "Современная разработка",
      titleHighlight: "сайтов, интернет‑магазинов, обучающих платформ",
      description:
        "Создаём быстрые, адаптивные и удобные веб‑решения для бизнеса: корпоративные сайты, интернет‑магазины и обучающие платформы. Помогаем превратить идею в работающий онлайн‑проект.",
      stats: {
        projects: "реализованных веб‑проектов",
        ux: "фокус на удобстве и конверсии",
      },
      cta: {
        order: "Заказать разработку",
        viewPricing: "Посмотреть тарифы",
      },
      note: "Поможем выбрать оптимальный формат: сайт‑визитка, интернет‑магазин или полноценная образовательная платформа.",
      analytics: {
        title: "Аналитика проектов",
        subtitle: "Результаты за 3 месяца",
        leads: "+247% лидов",
        investment: "Инвестиции",
        projects: "Проекты",
        speed: "Скорость",
        investmentNote: "Оптимизирована структура",
        projectsNote: "12 запущенных решений",
        speedNote: "Благодаря современному стеку",
        testimonial:
          "«Получили современный сайт и удобную админ‑панель. Команда предложила структуру, дизайн и реализовала всё под ключ».",
        testimonialAuthor: "— Владелец локального бизнеса во Львове",
      },
    },
    advantages: {
      title: "Почему стоит доверить нам разработку",
      description:
        "Работаем как технический партнёр: от прототипа и дизайна до разработки, интеграций и поддержки проекта.",
      items: {
        architecture: {
          title: "Продуманная архитектура",
          description:
            "Анализируем бизнес‑процессы, строим логику сайта или платформы так, чтобы её было легко масштабировать и дорабатывать.",
        },
        conversion: {
          title: "Фокус на конверсии",
          description:
            "Проектируем понятную структуру, формы, корзины и личные кабинеты, чтобы пользователи быстро доходили до целевого действия.",
        },
        stack: {
          title: "Современный стек",
          description:
            "Используем Next.js, React, headless‑CMS, платежные интеграции и другие актуальные технологии для стабильной работы.",
        },
        pricing: {
          title: "Прозрачная стоимость",
          description:
            "Фиксируем объём работ, этапы и дедлайны. Помогаем выбрать решение под ваш бюджет — от MVP до полной версии.",
        },
      },
      solutions: {
        corporate: {
          label: "Типы решений",
          title: "Корпоративные сайты и лендинги",
          description:
            "Сайты‑визитки, посадочные страницы, многостраничные сайты с блогом, портфолио и страницами услуг.",
        },
        shop: {
          label: "Интернет‑магазины",
          title: "Каталоги, корзины, оплаты",
          description:
            "Импорт товаров, категории, фильтры, интеграции с платежными системами и службами доставки.",
        },
        platform: {
          label: "Обучающие платформы",
          title: "Онлайн‑курсы и кабинеты студентов",
          description:
            "Личные кабинеты, уроки, модули, прогресс, домашние задания, оплаты и доступы к курсам.",
        },
        additional: {
          label: "Дополнительно",
          title: "Подключение сервисов и поддержка",
          description:
            "Интеграции с CRM, email‑рассылками, чат‑ботами, аналитикой, техническая поддержка и доработки.",
        },
      },
    },
    pricing: {
      title: "Тарифы на разработку сайтов и платформ",
      description:
        "Выберите формат сотрудничества под ваши задачи: от простого сайта до интернет‑магазина или обучающей платформы.",
      plans: {
        start: {
          name: "Старт",
          price: "$320",
          description: "Оптимальный для небольшого сайта‑визитки или лендинга",
          features: [
            "Анализ ниши и структуры будущего сайта",
            "Разработка лендинга или сайта‑визитки до 5 страниц",
            "Базовый адаптив под мобильные устройства",
            "Подключение форм заявок и контактов",
            "Базовая SEO‑структура (title, описание, заголовки)",
          ],
          cta: "Выбрать тариф",
        },
        business: {
          name: "Бизнес",
          price: "$450",
          description: "Для малого и среднего бизнеса",
          badge: "Популярный",
          features: [
            "Всё из тарифа «Старт»",
            "Разработка многостраничного сайта или небольшого магазина",
            "Настройка каталога, корзины и заказов",
            "Подключение платежных систем и доставки",
            "Стандартная админ‑часть для управления контентом",
          ],
          cta: "Заказать разработку",
        },
        platform: {
          name: "Платформа",
          price: "$720",
          description: "Для масштабных магазинов или обучающих платформ",
          features: [
            "Все пункты из тарифа «Бизнес»",
            "Разработка интернет‑магазина или обучающей платформы",
            "Личные кабинеты, роли пользователей, аналитика",
            "Индивидуальные интеграции с CRM и сервисами",
            "Резервное копирование и базовая поддержка",
          ],
          cta: "Запланировать консультацию",
        },
      },
      note: "Мы помогаем выбрать решение под ваш этап развития: сначала можно запустить простой сайт, а со временем расширить его до магазина или обучающей платформы.",
      priceList: {
        title: "Ориентировочные цены на разработку",
        landing: "Разработка лендинга",
        corporate: "Корпоративный сайт",
        shop: "Интернет‑магазин",
        platform: "Обучающая платформа",
        individual: "индивидуально",
      },
      priceNote:
        "Точную стоимость рассчитываем после короткого брифа и уточнения функционала.",
    },
    faq: {
      title: "Популярные вопросы о разработке",
      description:
        "Узнайте, как происходит процесс создания сайта, магазина или обучающей платформы и с чего начать.",
      items: {
        cost: {
          question: "Сколько стоит разработка сайта?",
          answer:
            "Стоимость зависит от типа проекта: простой лендинг, корпоративный сайт, интернет‑магазин или обучающая платформа. После короткой консультации мы сможем сориентировать вас по бюджету и этапам.",
        },
        time: {
          question: "Сколько времени занимает разработка?",
          answer:
            "Базовый лендинг можно запустить за 2–3 недели. Более сложные проекты — интернет‑магазины и образовательные платформы — обычно занимают от 4 до 8 недель в зависимости от объёма.",
        },
        difference: {
          question: "Чем отличается интернет‑магазин от обычного сайта?",
          answer:
            "Интернет‑магазин имеет каталог товаров, корзину, оформление заказа и оплаты. Обычный корпоративный сайт больше про представление компании, услуг и сбор заявок.",
        },
        platform: {
          question: "С чего начать, если хочу обучающую платформу?",
          answer:
            "На старте достаточно описать формат курсов, типы контента (видео, тесты, домашние задания), роли пользователей и способ монетизации. Мы поможем собрать это в техническое задание и предложим решение.",
        },
      },
    },
    form: {
      title: "Получите бесплатную консультацию по вашему проекту",
      description:
        "Оставьте контакты — мы проанализируем вашу идею или текущий сайт, подскажем оптимальный формат и ориентировочный бюджет разработки.",
      fields: {
        name: {
          label: "Имя",
          placeholder: "Как к вам обращаться?",
          error: "Пожалуйста, введите ваше имя",
        },
        phone: {
          label: "Телефон или Telegram",
          placeholder: "+38 (0__) ___ __ __",
          error: "Пожалуйста, введите телефон или Telegram",
        },
        niche: {
          label: "Ниша / услуга",
          placeholder: "Например: салон красоты, онлайн‑курс, клиника и т.д.",
          error: "Пожалуйста, укажите нишу или услугу",
        },
        budget: {
          label: "Ориентировочный бюджет на разработку",
          placeholder: "Например: $500–$2000",
          error: "Пожалуйста, укажите ориентировочный бюджет",
        },
      },
      submit: "Отправить заявку",
      submitting: "Отправляется...",
      privacy:
        "Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Мы не передаём ваши контакты третьим лицам.",
      success:
        "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.",
    },
    contacts: {
      title: "Контакты",
      company: "WebMisto — веб‑студия во Львове",
      location: "Львов, Украина (работаем онлайн по всей стране и за границей)",
      phone: "Телефон",
      email: "Email",
      schedule: "График работы",
      services: {
        title: "Услуги",
        items: [
          "Разработка сайтов и лендингов",
          "Создание интернет‑магазинов",
          "Разработка обучающих платформ",
          "Поддержка и развитие проектов",
        ],
      },
    },
    footer: {
      copyright: "Создано ©",
      links: [
        "Разработка сайтов",
        "Продвижение сайта",
        "Таргетированная реклама",
        "Контакты",
      ],
    },
  },
  en: {
    header: {
      nav: {
        services: "Services",
        pricing: "Pricing",
        faq: "FAQ",
        contacts: "Contacts",
      },
      cta: "Order targeting",
    },
    hero: {
      badge: "Website and online platform development",
      title: "Modern development of",
      titleHighlight: "websites, online stores, learning platforms",
      description:
        "We create fast, responsive and convenient web solutions for business: corporate websites, online stores and learning platforms. We help turn an idea into a working online project.",
      stats: {
        projects: "completed web projects",
        ux: "focus on convenience and conversion",
      },
      cta: {
        order: "Order development",
        viewPricing: "View pricing",
      },
      note: "We help you choose the optimal format: business card website, online store or full‑fledged educational platform.",
      analytics: {
        title: "Project analytics",
        subtitle: "Results for 3 months",
        leads: "+247% leads",
        investment: "Investment",
        projects: "Projects",
        speed: "Speed",
        investmentNote: "Optimized structure",
        projectsNote: "12 launched solutions",
        speedNote: "Thanks to modern stack",
        testimonial:
          "«We got a modern website and convenient admin panel. The team proposed the structure, design and implemented everything turnkey».",
        testimonialAuthor: "— Local business owner in Lviv",
      },
    },
    advantages: {
      title: "Why trust us with development",
      description:
        "We work as a technical partner: from prototype and design to development, integrations and project support.",
      items: {
        architecture: {
          title: "Thoughtful architecture",
          description:
            "We analyze business processes, build the logic of a website or platform so that it's easy to scale and improve.",
        },
        conversion: {
          title: "Focus on conversion",
          description:
            "We design clear structure, forms, shopping carts and personal accounts so users quickly reach the target action.",
        },
        stack: {
          title: "Modern stack",
          description:
            "We use Next.js, React, headless CMS, payment integrations and other current technologies for stable operation.",
        },
        pricing: {
          title: "Transparent pricing",
          description:
            "We fix the scope of work, stages and deadlines. We help you choose a solution for your budget — from MVP to full version.",
        },
      },
      solutions: {
        corporate: {
          label: "Solution types",
          title: "Corporate websites and landing pages",
          description:
            "Business card websites, landing pages, multi‑page sites with blog, portfolio and service pages.",
        },
        shop: {
          label: "Online stores",
          title: "Catalogs, shopping carts, payments",
          description:
            "Product import, categories, filters, integrations with payment systems and delivery services.",
        },
        platform: {
          label: "Learning platforms",
          title: "Online courses and student accounts",
          description:
            "Personal accounts, lessons, modules, progress, homework, payments and course access.",
        },
        additional: {
          label: "Additional",
          title: "Service integration and support",
          description:
            "Integrations with CRM, email campaigns, chatbots, analytics, technical support and improvements.",
        },
      },
    },
    pricing: {
      title: "Website and platform development pricing",
      description:
        "Choose a collaboration format for your tasks: from a simple website to an online store or learning platform.",
      plans: {
        start: {
          name: "Start",
          price: "$320",
          description: "Optimal for a small business card website or landing page",
          features: [
            "Niche and future website structure analysis",
            "Landing page or business card website development up to 5 pages",
            "Basic mobile responsiveness",
            "Contact and inquiry form integration",
            "Basic SEO structure (title, description, headings)",
          ],
          cta: "Choose plan",
        },
        business: {
          name: "Business",
          price: "$450",
          description: "For small and medium businesses",
          badge: "Popular",
          features: [
            "Everything from «Start» plan",
            "Multi‑page website or small store development",
            "Catalog, shopping cart and order setup",
            "Payment systems and delivery integration",
            "Standard admin panel for content management",
          ],
          cta: "Order development",
        },
        platform: {
          name: "Platform",
          price: "$720",
          description: "For large stores or learning platforms",
          features: [
            "All items from «Business» plan",
            "Online store or learning platform development",
            "Personal accounts, user roles, analytics",
            "Custom CRM and service integrations",
            "Backup and basic support",
          ],
          cta: "Schedule consultation",
        },
      },
      note: "We help you choose a solution for your development stage: you can start with a simple website and expand it to a store or learning platform over time.",
      priceList: {
        title: "Approximate development prices",
        landing: "Landing page development",
        corporate: "Corporate website",
        shop: "Online store",
        platform: "Learning platform",
        individual: "individual",
      },
      priceNote:
        "We calculate the exact cost after a short brief and functionality clarification.",
    },
    faq: {
      title: "Popular questions about development",
      description:
        "Learn how the process of creating a website, store or learning platform works and where to start.",
      items: {
        cost: {
          question: "How much does website development cost?",
          answer:
            "The cost depends on the project type: simple landing page, corporate website, online store or learning platform. After a short consultation, we can guide you on budget and stages.",
        },
        time: {
          question: "How long does development take?",
          answer:
            "A basic landing page can be launched in 2–3 weeks. More complex projects — online stores and educational platforms — usually take 4 to 8 weeks depending on scope.",
        },
        difference: {
          question: "What's the difference between an online store and a regular website?",
          answer:
            "An online store has a product catalog, shopping cart, order processing and payments. A regular corporate website is more about representing the company, services and collecting inquiries.",
        },
        platform: {
          question: "Where to start if I want a learning platform?",
          answer:
            "At the start, it's enough to describe the course format, content types (video, tests, homework), user roles and monetization method. We'll help compile this into a technical specification and propose a solution.",
        },
      },
    },
    form: {
      title: "Get a free consultation on your project",
      description:
        "Leave your contacts — we'll analyze your idea or current website, suggest the optimal format and approximate development budget.",
      fields: {
        name: {
          label: "Name",
          placeholder: "How should we address you?",
          error: "Please enter your name",
        },
        phone: {
          label: "Phone or Telegram",
          placeholder: "+38 (0__) ___ __ __",
          error: "Please enter phone or Telegram",
        },
        niche: {
          label: "Niche / service",
          placeholder: "For example: beauty salon, online course, clinic, etc.",
          error: "Please specify niche or service",
        },
        budget: {
          label: "Approximate development budget",
          placeholder: "For example: $500–$2000",
          error: "Please specify approximate budget",
        },
      },
      submit: "Submit request",
      submitting: "Submitting...",
      privacy:
        "By clicking the button, you agree to the processing of personal data. We do not share your contacts with third parties.",
      success:
        "Thank you! Your request has been submitted. We'll contact you soon.",
    },
    contacts: {
      title: "Contacts",
      company: "WebMisto — web studio in Lviv",
      location: "Lviv, Ukraine (we work online throughout the country and abroad)",
      phone: "Phone",
      email: "Email",
      schedule: "Working hours",
      services: {
        title: "Services",
        items: [
          "Website and landing page development",
          "Online store creation",
          "Learning platform development",
          "Project support and development",
        ],
      },
    },
    footer: {
      copyright: "Created ©",
      links: [
        "Website development",
        "Website promotion",
        "Targeted advertising",
        "Contacts",
      ],
    },
  },
};
