import React from "react";
import { Icons } from "../Icon";
import styles from "./Loader.module.scss";

export const Loader: React.FC = () => {
  return <Icons.Loading className={styles.root} />;
};
