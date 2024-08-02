import { TypePortfolioBlockProps } from "@/sections/PortfolioSection/PortfolioBlock.tsx";

export const works: TypePortfolioBlockProps[] = [
  {
    title: "Конфигуратор",
    description:
      "Разработка фронтенд части виджета для вставки на сайт. Виджет подразумевает пошаговую систему: на первом шаге происходит выбор модели, " +
      "на втором шаге непосредственно конфигурация данной модели, выбор цвета экстерьера/интерьера, который " +
      "сопровождается 3д просмотром модели выбранного цвета, выбор дисков, технологий и прочих модификаций. " +
      "После завершения конфигурации пользователю предлагается отправить заявку на получение результата на почту, " +
      "либо на генерацию ссылки, при переходе по которой он попадает на виджет с уже предвыбранной конфигурацией, в " +
      "таком случае вся конфигурация хранится в квери параметрах ссылки.",
    demo: "",
    technologies: ["React", "Typescript", "Docker", "Redux Toolkit", "React-hook-forms", "Antd", "Vite"],
    link: "https://imgur.com/a/qJIFiGK",
    postscript: "NDA",
  },
  {
    title: "Onlyplanks",
    image: "https://i.imgur.com/f5IBbN1.png",
    description:
      "Создание дизайна, разработка фронтенд части, настройка CI/CD с использованием github pages, " +
      "деплой на свою виртуальную машину. Приложение для сохранения своих решений головоломок в онлайн " +
      "игре с возможностью загружать скриншоты, ставить теги, описывающие уровень, лайки, " +
      "оставлять к ним комментарии, просматривать статистику по всем пользователям и тд.",
    demo: "https://onlyplanks.fun",
    technologies: [
      "React",
      "Next",
      "Typescript",
      "Redux Toolkit",
      "Docker",
      "Nginx",
      "Linux",
      "React-hook-form",
      "Styled-components",
    ],
    postscript: "в работе",
  },
  {
    title: "Социальная сеть",
    image: "https://i.imgur.com/yD4adaM.png",
    description: "Дизайн и разработка фронтенд части. Приложение для общения и поиска работы ",
    demo: "https://evelinsu.github.io/social-network/#/",
    technologies: ["React", "Typescript", "Redux Toolkit", "Formik", "Styled-components", "Jest"],
  },
  {
    title: "Обучение по карточкам",
    image: "https://i.imgur.com/pZq5sBS.jpg",
    description:
      "Создание дизайна и разработка фронтенд части SPA приложения для обучения по карточкам. В приложении " +
      "есть функционал авторизации, полный CRUD по карточкам, процесс обучения с алгоритмом " +
      "памяти результата обучения - чем хуже результат ответа, тем чаще попадается карточка.",
    demo: "https://evelinsu.github.io/friday-project/#/",
    postscript: "",
    technologies: ["React", "Typescript", "Redux Toolkit", "Styled-components", "Formik"],
  },
  {
    title: "Чат для одиноких людей",
    image: "https://i.imgur.com/zdqf3td.png",
    description:
      "Это было тестовое задание в одну из компаний, но мне понравилась задумка. Чат " +
      "для одиноких людей, в котором ты можешь общаться сам с собой, открыв несколько вкладок. Данные между вкладками передаются через local storage ",
    demo: "evelinsu.github.io/chat-for-alone-people/",
    postscript: "",
    technologies: ["React", "Typescript", "Styled-components", "Local storage"],
  },
];
