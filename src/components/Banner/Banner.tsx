import React from "react";

import styles from "./Banner.module.scss";

type BannerProps = {
  btn: string;
  children: React.ReactNode;
};

function Banner(props: BannerProps): React.ReactElement<BannerProps> {
  const { btn, children } = props;
  return (
    <div className={styles.banner}>
      {children}
      <button className={styles.banner__button} type="button">
        {btn} {">"}
      </button>
    </div>
  );
}

Banner.propTypes = {};

export default Banner;
