export type HeroContent = {
  eyebrow: string;
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: CtaContent;
  secondaryCta: CtaContent;
  highlights: string[];
  systemFlow: string[];
  results: HeroResult[];
};

export type Service = {
  title: string;
  benefit: string;
  description: string;
  outcomes: string[];
};

export type TargetAudience = {
  label: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  badge: string;
  timeframe: string;
  description: string;
  items: string[];
  note?: string;
  highlighted?: boolean;
};

export type PortfolioItem = {
  title: string;
  type: string;
  description: string;
  focus: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type WhyUsItem = {
  title: string;
  description: string;
};

export type CtaContent = {
  label: string;
  href: string;
};

export type HeroResult = {
  label: string;
  value: string;
};

export type FinalCtaContent = {
  title: string;
  text: string;
  cta: CtaContent;
  note: string;
};

export type SectionCopy = {
  title: string;
  text: string;
};

export type SiteContent = {
  name: string;
  offer: string;
  contacts: Contacts;
  hero: HeroContent;
  servicesSection: SectionCopy;
  services: Service[];
  targetAudienceSection: SectionCopy;
  targetAudiences: TargetAudience[];
  pricingSection: SectionCopy;
  pricingPlans: PricingPlan[];
  portfolioSection: SectionCopy;
  portfolioItems: PortfolioItem[];
  processSection: SectionCopy;
  processSteps: ProcessStep[];
  whyUsSection: SectionCopy;
  whyUsItems: WhyUsItem[];
  finalCta: FinalCtaContent;
};

export type Contacts = {
  telegramLabel: string;
  telegramUrl: string;
  phone: string;
  team: TeamContact[];
};

export type TeamContact = {
  name: string;
  role: string;
  telegram: string;
  telegramUrl: string;
  phone: string;
};

const contacts: Contacts = {
  telegramLabel: "Написать в Telegram",
  telegramUrl: "https://t.me/dvertton",
  phone: "+7 999 006-60-70",
  team: [
    {
      name: "Саша",
      role: "CEO",
      telegram: "@dvertton",
      telegramUrl: "https://t.me/dvertton",
      phone: "+7 999 006-60-70",
    },
    {
      name: "Владимир",
      role: "технический директор",
      telegram: "@itamqo",
      telegramUrl: "https://t.me/itamqo",
      phone: "+7 952 212-61-93",
    },
  ],
};

export const siteContent: SiteContent = {
  name: "SiteBrain | IT Company Group",
  offer: "Сайты, CRM, Telegram-боты и AI-автоматизация для бизнеса",
  contacts,
  hero: {
    eyebrow: "SiteBrain | IT Company Group",
    badge: "IT-инструменты для бизнеса",
    title: "Сайты, CRM, Telegram-боты и AI-автоматизация для бизнеса",
    subtitle:
      "Делаем сайты, CRM, Telegram-ботов и AI-инструменты, которые помогают получать заявки и держать процессы под контролем.",
    primaryCta: {
      label: "Обсудить проект",
      href: contacts.telegramUrl,
    },
    secondaryCta: {
      label: "Смотреть услуги",
      href: "#services",
    },
    highlights: [
      "Лендинги и сайты.",
      "Telegram-боты для заявок.",
      "CRM под процессы.",
      "AI для рутины.",
    ],
    systemFlow: ["Website", "Leads", "CRM", "AI"],
    results: [
      {
        label: "Заявки",
        value: "сайт + CTA",
      },
      {
        label: "Порядок",
        value: "CRM-логика",
      },
      {
        label: "Автоматизация",
        value: "боты + AI",
      },
    ],
  },
  servicesSection: {
    title: "Услуги",
    text: "Сайты, боты, CRM и AI-инструменты для понятного роста.",
  },
  services: [
    {
      title: "Сайты и лендинги",
      benefit: "Запуск оффера и заявок",
      description:
        "Лендинги и сайты, которые быстро объясняют услугу и ведут к контакту.",
      outcomes: [
        "Структура услуг.",
        "Понятные CTA.",
        "Адаптивная верстка.",
      ],
    },
    {
      title: "Telegram-боты",
      benefit: "Заявки и уведомления без рутины",
      description:
        "Боты для заявок, записи, уведомлений и первичной коммуникации.",
      outcomes: [
        "Не терять обращения.",
        "Фиксировать записи.",
        "Уведомлять команду.",
      ],
    },
    {
      title: "CRM-приложения",
      benefit: "Заявки и задачи в одной системе",
      description:
        "CRM-приложения под реальные процессы, роли и статусы.",
      outcomes: [
        "Вести клиентов.",
        "Видеть статусы.",
        "Разделять роли.",
      ],
    },
    {
      title: "AI-автоматизация",
      benefit: "Быстрее ответы, тексты и анализ",
      description:
        "AI-инструменты для сообщений, отчётов, предложений и повторяющихся задач.",
      outcomes: [
        "Экономить время.",
        "Готовить ответы.",
        "Разбирать обращения.",
      ],
    },
  ],
  targetAudienceSection: {
    title: "Для малого бизнеса и команд",
    text: "Локальному бизнесу и небольшим командам, которым нужен быстрый понятный запуск.",
  },
  targetAudiences: [
    { label: "Бьюти-мастера и салоны" },
    { label: "Строительные и ремонтные бригады" },
    { label: "Демонтажные компании" },
    { label: "Локальный бизнес" },
    { label: "Онлайн-школы" },
    { label: "Агентства" },
    { label: "Avito-продавцы" },
    { label: "Сервисные компании" },
    { label: "Бизнес с потоком заявок" },
  ],
  pricingSection: {
    title: "Пакеты под разные этапы бизнеса",
    text: "Стартуем с нужного v1 и оставляем место для развития.",
  },
  pricingPlans: [
    {
      name: "Start",
      price: "от 25 000 ₽",
      badge: "Быстрый запуск",
      timeframe: "Срок: от 3 до 7 дней",
      description:
        "Лендинг или небольшой сайт для старта.",
      items: [
        "Лендинг или небольшой сайт.",
        "Структура услуг и оффера.",
        "CTA для связи.",
        "Адаптивная верстка.",
      ],
    },
    {
      name: "Business",
      price: "от 45 000 ₽",
      badge: "Оптимальный выбор",
      timeframe: "Срок: от 7 до 14 дней",
      description:
        "Сайт плюс простой контур заявок.",
      items: [
        "Лендинг или сайт.",
        "Telegram-бот для заявок.",
        "Уведомления команде.",
        "Простая фиксация обращений.",
        "Усиленная структура блоков.",
      ],
      highlighted: true,
    },
    {
      name: "Pro",
      price: "от 60 000 ₽",
      badge: "CRM под бизнес",
      timeframe: "Срок: от 3 до 6 недель",
      description:
        "Полноценное CRM-приложение под бизнес.",
      note: "Pro — это не мини-CRM, а полноценное CRM-приложение под бизнес.",
      items: [
        "CRM под процессы компании.",
        "Клиенты и заявки.",
        "Статусы и задачи.",
        "Роли пользователей.",
        "Отчёты и уведомления.",
        "AI-инструменты для рутины.",
      ],
    },
  ],
  portfolioSection: {
    title: "Примеры направлений и проектов",
    text: "Прикладные форматы: сайт, бот, CRM, панель управления и AI.",
  },
  portfolioItems: [
    {
      title: "Mini Beauty CRM",
      type: "CRM-приложение",
      description: "CRM для записи, клиентов и статусов.",
      focus: ["клиенты", "запись", "статусы"],
    },
    {
      title: "Avito AI Control Center",
      type: "AI-панель",
      description: "AI-панель для объявлений и сообщений.",
      focus: ["объявления", "сообщения", "контроль"],
    },
    {
      title: "Telegram Bot",
      type: "Telegram-бот",
      description: "Бот для заявок, записи и уведомлений.",
      focus: ["заявки", "запись", "уведомления"],
    },
    {
      title: "SiteBrain AI Vision R&D",
      type: "AI R&D",
      description: "AI-инструменты для бизнес-задач.",
      focus: ["AI", "анализ", "автоматизация"],
    },
    {
      title: "Сайт для услуг",
      type: "Landing page",
      description: "Лендинг для оффера, услуг и CTA.",
      focus: ["услуги", "оффер", "CTA"],
    },
    {
      title: "CRM/панель управления",
      type: "Dashboard",
      description: "Панель для заявок, задач и ролей.",
      focus: ["заявки", "задачи", "роли"],
    },
  ],
  processSection: {
    title: "Как строится работа",
    text: "Короткие этапы от задачи до запуска.",
  },
  processSteps: [
    {
      title: "Обсуждаем задачу",
      description:
        "Фиксируем цель.",
    },
    {
      title: "Предлагаем решение",
      description:
        "Выбираем формат.",
    },
    {
      title: "Согласуем структуру и стоимость",
      description:
        "Фиксируем этапы.",
    },
    {
      title: "Разрабатываем",
      description:
        "Собираем v1.",
    },
    {
      title: "Показываем результат",
      description:
        "Показываем и правим.",
    },
    {
      title: "Запускаем",
      description:
        "Проверяем и публикуем.",
    },
    {
      title: "Поддерживаем",
      description:
        "Развиваем дальше.",
    },
  ],
  whyUsSection: {
    title: "Почему SiteBrain",
    text: "Делаем v1 так, чтобы его можно было развивать.",
  },
  whyUsItems: [
    {
      title: "Бизнес-инструмент вместо набора страниц",
      description:
        "Сайт должен приводить к заявке и следующему шагу.",
    },
    {
      title: "Связка сайта, бота, CRM и AI",
      description:
        "Инструменты можно собрать в одну рабочую систему.",
    },
    {
      title: "Решения без лишней сложности",
      description:
        "Запускаем нужное сейчас, без перегруза.",
    },
    {
      title: "Понятный интерфейс и контент",
      description:
        "Клиент быстро понимает пользу и действие.",
    },
  ],
  finalCta: {
    title: "Обсудим ваш сайт, бота, CRM или AI-инструмент?",
    text: "Напишите, что нужно улучшить сейчас: заявки, запись, клиентскую базу или рутину.",
    cta: {
      label: contacts.telegramLabel,
      href: contacts.telegramUrl,
    },
    note: "Контакты команды указаны в финальном блоке.",
  },
};
