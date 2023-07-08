import React from "react";

import styles from "./SearchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.search}>
      <button type="button">Каталог товаров</button>
      <input type="text" placeholder="Поиск товаров" />
    </div>
  );
}
