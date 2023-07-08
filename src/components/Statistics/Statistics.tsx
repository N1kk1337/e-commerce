import React from "react";

import styles from "./Statistics.module.scss";

function Statistics({ title, numbers }: StatisticsProps) {
  return (
    <section className={styles.statistics}>
      <h3 className={styles.statistics__title}>{title}</h3>
      <div className={styles.statistics__list}>
        {numbers ? (
          numbers.map((item, count) => (
            <div key={count} className={styles.statistics__item}>
              <span className={styles["statistics__item-number"]}>{item.number}</span>
              <p className={styles["statistics__item-description"]}>{item.description}</p>
            </div>
          ))
        ) : (
          <div className={styles.statistics__item}>Нет данных</div>
        )}
      </div>
    </section>
  );
}

type StatisticsProps = {
  title: string;
  numbers?: StatisticItem[];
};

type StatisticItem = {
  number: number;
  description: string;
};

Statistics.defaultProps = {
  numbers: [
    {
      number: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc.",
    },
    {
      number: 1337,
      description:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc.",
    },
    {
      number: 100500,
      description:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc.",
    },
    {
      number: 777,
      description:
        "Lorem ipsum dolor sit amet consectetur. Rhoncus risus nunc a pharetra viverra enim nunc.",
    },
  ],
};
export default Statistics;
