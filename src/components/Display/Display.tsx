import { ReactElement } from "react";

export function Display(props: { condition: boolean; children: ReactElement }) {
  if (props.condition) {
    return props.children;
  }
  return null;
}
