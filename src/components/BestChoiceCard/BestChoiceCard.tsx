import React from "react";

import placeholder from "../../assets/images/placeholder.png";
import ScoreLine from "../ScoreLine/ScoreLine";
import styles from "./BestChoiceCard.module.scss";

function BestChoiceCard({ category, title, image, productData }: BestChoiceCardProps) {
  return (
    <div className={styles["best-choice-card"]}>
      <p className={styles["best-choice-card__category"]}>{category}</p>
      <p className={styles["best-choice-card__title"]}>{title}</p>
      <div className={styles["best-choice-card__product-data"]}>
        <img src={image} alt={title} />
        <div className={styles["best-choice-card__score"]}>
          <ScoreLine />
          <ScoreLine />
          <ScoreLine />
          <ScoreLine />
          <ScoreLine />
          <ScoreLine />
        </div>
      </div>
    </div>
  );
}

type BestChoiceCardProps = {
  category?: string;
  title?: string;
  image?: string;
  productData?: object;
};

BestChoiceCard.defaultProps = {
  category: "Категория",
  title: "Название товара",
  image: placeholder,
  productData: {
    price: 0,
    quantity: 0,
    description: "Описание товара",
  },
};

export default BestChoiceCard;
