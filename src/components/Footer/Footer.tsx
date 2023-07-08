import React from "react";

import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__container}>
          <Logo />
          <p>Соцсети</p>
        </div>
        <div className={styles.footer__container}>
          <h3>Пользователю</h3>
          <a href="/">Связаться с нами</a>
          <a href="/">Поддержка пользователей</a>
          <a href="/">FAQ & Руководства</a>
          <a href="/">Политика конфиденциальности</a>
          <a href="/">Пользовательское соглашение</a>
        </div>
        <div className={styles.footer__container}>
          <h3>Популярные категории</h3>
          <a href="/">Смартфоны</a>
          <a href="/">Teteras electricas</a>
          <a href="/">Стиральные машины</a>
          <a href="/">Телевизоры</a>
          <a href="/">Ноутбуки</a>
        </div>
        <div className={styles.footer__container}>
          <h3>Команда</h3>
          <a href="/">О нас</a>
          <a href="/">Работа у нас</a>
        </div>
        <div className={styles.footer__copyright}>
          Copyright © 2023 Behoof, Inc. Все права защищены
        </div>
      </div>
    </footer>
  );
}
