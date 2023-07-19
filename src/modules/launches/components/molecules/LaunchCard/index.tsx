import React from "react";
import { Card } from "@modules/common/components";
import { concatClassNames } from "@modules/common/utils";
import styles from "./LaunchCard.module.scss";

export type LaunchCardType = {
  name: string;
  date: string;
  info?: string;
  imgSrc: string;
  className?: string;
};

export const LaunchCard: React.FC<LaunchCardType> = ({
  name,
  date,
  info,
  imgSrc = "https://images2.imgbox.com/0d/5b/8X01C3ov_o.png",
  className,
}) => {
  return (
    <Card className={concatClassNames([styles.root, className])}>
      <img
        className={styles.root__img}
        src={imgSrc}
        alt={`Image for ${name} mission`}
      />
      <div className={styles.info}>
        <h2 className={styles.info__date}>{date}</h2>
        <h1 className={styles.info__header}>{name}</h1>
        <p className={styles.info__details}>{info ? info : "No description"}</p>
      </div>
    </Card>
  );
};
