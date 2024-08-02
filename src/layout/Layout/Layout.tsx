import { Particle } from "@/components/Particle";
import { Sidebar } from "@/layout/Sidebar";
import { ReactNode } from "react";
import s from "./styles.module.sass";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={s.root}>
      <Sidebar />
      <Particle />
      <div className={s.sections}>{children}</div>
    </div>
  );
};
