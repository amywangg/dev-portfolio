import Head from "next/head";
import styles from "@app/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amy | Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </div>
  );
}
