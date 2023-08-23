"use client";

import Head from "next/head";
import styles from "./page.module.css";
import HomePage from "./pages/home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Thats What They Said</title>
        <meta
          name="description"
          content="Homepage for viewing quotes from various individuals"
        />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.description}>
          <HomePage />
        </div>
      </main>
    </>
  );
}
