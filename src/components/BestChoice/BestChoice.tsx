import React from "react";

import BestChoiceCard from "../BestChoiceCard/BestChoiceCard";
import CategoryCard from "../CategoryCard/CategoryCard";
import styles from "./BestChoice.module.scss";

function BestChoice() {
  return (
    <section className={styles.best}>
      <div className={styles.best__wrapper}>
        <h2 className={styles.best__header}>Лучший выбор</h2>
        <div className={styles.best__categories}>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
        <div className={styles.best__grid}>
          <BestChoiceCard />
          <BestChoiceCard />
          <BestChoiceCard />
          <BestChoiceCard />
        </div>
      </div>
    </section>
  );
}

export default BestChoice;
