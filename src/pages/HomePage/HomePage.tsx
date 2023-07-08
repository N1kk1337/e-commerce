import React from "react";

import Banner from "../../components/Banner/Banner";
import BestChoice from "../../components/BestChoice/BestChoice";
import Statistics from "../../components/Statistics/Statistics";
import styles from "./HomePage.module.scss";

function HomePage() {
  return (
    <div className={styles.main__background}>
      <section className={styles["main__banner-container"]}>
        <Banner btn="Перейти к категориям">
          1.8 млн товаров в 2272 магазинах
          <br />
          найди, сравни, выбирай!
        </Banner>
        <Banner btn="Смотреть">
          Топ-10 смартфонов <br /> 2023 года
        </Banner>
      </section>
      <BestChoice />
      <Statistics title="Наша цель - создать фантастический сервис для всех потребителей" />
    </div>
  );
}

export default HomePage;
