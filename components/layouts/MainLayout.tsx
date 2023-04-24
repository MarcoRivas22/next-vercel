import { FC, ReactNode } from "react";

import Head from "next/head";

import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  //   const { children } = props;

  return (
    <>
      <Head>
        <title>Home - Marco</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </>
  );
};
