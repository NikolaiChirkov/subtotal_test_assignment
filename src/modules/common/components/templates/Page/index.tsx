import React from "react";
import { FCWithChildren } from "@modules/common/types";
import { Header, Footer } from "@modules/common/components";
import styles from "./Page.module.scss";

export const Page: FCWithChildren = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.root__main}>{children}</main>
      <Footer />
    </div>
  );
};
