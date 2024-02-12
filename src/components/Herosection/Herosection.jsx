import React from "react";
import styles from "./Herosection.module.css";

export function Hero() {
  return (
    <section className={styles.decoration}>
      <div className={styles.decoration_vector}></div>
      <div className={styles.decoration_strawberry}></div>
      <div className={styles.decoration_leaves}></div>
      <div className={styles.decoration_banana}></div>
    </section>
  );
}
