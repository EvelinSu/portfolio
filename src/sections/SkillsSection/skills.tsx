import { DockerIcon } from "@/assets/icons/DockerIcon.tsx";
import { FigmaIcon } from "@/assets/icons/FigmaIcon.tsx";
import { GitIcon } from "@/assets/icons/GitIcon.tsx";
import JavaScriptIcon from "@/assets/icons/JavaScriptIcon.tsx";
import { LinuxIcon } from "@/assets/icons/LinuxIcon.tsx";
import { NextJsIcon } from "@/assets/icons/NextJsIcon.tsx";
import ReactIcon from "@/assets/icons/ReactIcon.tsx";
import ReduxIcon from "@/assets/icons/ReduxIcon.tsx";
import { StrapiIcon } from "@/assets/icons/StrapiIcon.tsx";
import StyledComponentsIcon from "@/assets/icons/StyledComponentsIcon.tsx";
import TypeScriptIcon from "@/assets/icons/TypeScriptIcon.tsx";

export const skills = [
  {
    icon: <ReactIcon />,
    title: "React",
    description: "Большинство приложения я пишу именно на React, хотя у меня есть опыт и с Vue2/3",
  },
  {
    icon: <ReduxIcon />,
    title: "Redux Toolkit",
    description: "Если мне нужен стор менеджер, то, скорее всего, я выберу именно Redux Toolkit",
  },
  {
    icon: <NextJsIcon />,
    title: "Next",
    description:
      "Использую Next.js в проектах, когда нужна SSR или статическая генерация страниц, но опыта работы с ним у меня не очень много",
  },
  {
    icon: <JavaScriptIcon />,
    title: "JavaScript",
    description: "Обладаю уверенными знаниями JS, так как моя деятельность полностью связана с данным языком",
  },
  {
    icon: <TypeScriptIcon />,
    title: "TypeScript",
    description:
      "Практически все проекты я разрабатываю с использованием TS для обеспечения высокой надежности и минимизации ошибок",
  },
  {
    icon: <LinuxIcon />,
    title: "Linux",
    description:
      "Поскольку у меня есть своя ВМ с ОС Linux, я деплою туда свои проекты, будь то фронт, бэк, бд или боты",
  },
  {
    icon: <DockerIcon />,
    title: "Docker",
    description: "Обладаю навыками настройки докера с нуля и часто использую его в CI/CD",
  },
  {
    icon: <StrapiIcon />,
    title: "Strapi",
    description: "Когда мне нужно быстро сделать админку с доступным UI и удобным API, я использую именно Strapi",
  },
  {
    icon: <GitIcon />,
    title: "Git",
    description:
      "Git - всему голова. Вся коммерческая разработка у меня происходит в Gitlab, а в Github я иногда загружаю свои работы",
  },
  {
    icon: <StyledComponentsIcon />,
    title: "CSS in JS",
    description: "Обладаю навыками работы с styled components и emotion, а также основанными на них UI библиотеками",
  },
  {
    icon: <FigmaIcon />,
    title: "Figma",
    description:
      "В Figma я работала и как фронтенд разработчик, и как дизайнер, поэтому у меня уверенные навыки работы с ним",
  },
];
