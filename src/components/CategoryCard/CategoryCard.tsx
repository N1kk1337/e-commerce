import React from "react";

import placeholder from "../../assets/images/placeholder.png";
import styles from "./CategoryCard.module.scss";

export default function CategoryCard({ img, title, link }: CategoryCardProps) {
  return (
    <div className={styles["category-card"]}>
      <img src={img} alt={title} />
      <a href={link}>{title}</a>
    </div>
  );
}

type CategoryCardProps = {
  img?: string;
  title?: string;
  link?: string;
};

CategoryCard.defaultProps = {
  img: placeholder,
  title: "Категория",
  link: "#",
};
