import React from "react";
import { FCWithChildren } from "@modules/common/types";
import { concatClassNames } from "@modules/common/utils";
import styles from "./Card.module.scss";

export type CardType = {
  className?: string;
};

export const Card: FCWithChildren<CardType> = ({ children, className }) => {
  return (
    <div className={concatClassNames([styles.root, className])}>{children}</div>
  );
};
