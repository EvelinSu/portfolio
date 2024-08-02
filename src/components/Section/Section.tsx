import { Display } from "@/components/Display";
import { clsx } from "clsx";
import { ReactNode, useMemo } from "react";
import s from "./styles.module.sass";

interface Props {
  id?: string;
  title?: string;
  className?: string;
  children: ReactNode;
}

export const Section = ({ title, id, children, className }: Props) => {
  const displayedBgTitle = useMemo(() => {
    return id?.toUpperCase();
  }, [id]);

  return (
    <section
      className={clsx(s.root, { [String(className)]: !!className })}
      id={id}
    >
      <Display condition={!!title}>
        <h1 className={s.title}>
          {title}
          <div className={s.title_decoration}>{displayedBgTitle}</div>
        </h1>
      </Display>

      {children}
    </section>
  );
};
