import React from "react";
import { Loader } from "../../atoms";
import { FCWithChildren } from "@modules/common/types";
import styles from "./WithLoader.module.scss";

export type WithLoaderProps = {
  isLoading: boolean;
};

export const WithLoader: FCWithChildren<WithLoaderProps> = ({
  isLoading,
  children,
}) => {
  if (isLoading) {
    return (
      <div className={styles.root}>
        <Loader />
        <p className={styles.root__text}>Please wait, data is loading...</p>
      </div>
    );
  }

  return children;
};
