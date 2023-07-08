import React from "react";

import logo from "../../assets/behoof_logo.svg";
import chart from "../../assets/chart.svg";
import like from "../../assets/like.svg";
import profile from "../../assets/profile.svg";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";

export default function Header() {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Logo />
        <p className={styles.description}>
          Лучшие цены
          <br />в интернет-магазинах{" "}
        </p>
        <SearchBar />
        <button
          className={styles.header__button}
          type="button"
          onClick={() => setIsLiked(!isLiked)}
          onKeyDown={() => setIsLiked(!isLiked)}
        >
          <img alt="like" src={like} />
        </button>
        <button
          className={styles.header__button}
          type="button"
          onClick={() => alert("compare")}
          onKeyDown={() => alert("compare")}
        >
          <img alt="compare" src={chart} />
        </button>
        <button
          className={styles.header__button}
          type="button"
          onClick={() => alert("profile")}
          onKeyDown={() => alert("profile")}
        >
          <img alt="profile" src={profile} />
        </button>
      </div>
    </header>
  );
}
