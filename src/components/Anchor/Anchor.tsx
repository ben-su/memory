import React from "react";
import styles from "./Anchor.module.scss";

interface Props {
  text: string;
  clickHandler: () => void;
  isBottom?: boolean;
}
export const Anchor: React.FC<Props> = ({
  text,
  clickHandler,
  isBottom,
}: Props) => {
  return (
    <a
      data-testid="a"
      href="javascript:"
      className={`${styles.a} ${isBottom ? styles.bottom : ""}`}
      onClick={() => clickHandler()}
    >
      {text}
    </a>
  );
};
