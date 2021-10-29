import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Card from "../components/Card/Card";
import { SingIn } from "../components/SingIn";
import { SingUp } from "../components/SingUp";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [isSingUp, setIsSingUp] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Login / Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card>
          {!isSingUp ? (
            <SingIn isVisible={!isSingUp} onSingUp={setIsSingUp} />
          ) : (
            <SingUp isVisible={isSingUp} onSingUp={setIsSingUp} />
          )}
        </Card>
      </main>
    </div>
  );
};

export default Home;
