import React from "react";

import logo from "../../assets/behoof_logo.svg";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img className={styles.logo__image} alt="logo" src={logo} />
      <h2 className={styles.logo__name}>Behoof</h2>
    </div>
  );
}
