import React from "react";
import { LaunchType } from "@modules/launches/types";
import { LaunchCard } from "../../molecules/LaunchCard";
import styles from "./LaunchCardGrid.module.scss";

export type LaunchCardGridType = {
  cards: LaunchType[];
};

export const LaunchCardGrid: React.FC<LaunchCardGridType> = ({ cards }) => {
  return (
    <div className={styles.root}>
      {cards.map((card) => (
        <LaunchCard
          key={card.name}
          className={styles.root__card}
          name={card.name}
          date={new Date(card.utcDate).toLocaleDateString("en-EN", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          imgSrc={card.imgSrc}
          info={card.info}
        />
      ))}
    </div>
  );
};
