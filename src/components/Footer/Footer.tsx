import React from "react";

import Logo from "../Logo/Logo";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__container}>
          <Logo />
        </div>
        <div className={styles.footer__container}>Пользователю</div>
        <div className={styles.footer__container}>Популярные категории</div>
        <div className={styles.footer__container}>Команда</div>
        <div className={styles.footer__container}>
          Copyright © 2023 Behoof, Inc. Все права защищены
        </div>
      </div>
    </div>
  );
}
