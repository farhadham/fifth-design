import React from "react";
import styles from "./MenuOverlay.module.scss";

const MenuOverlay = () => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.a} style={{ marginTop: "100px" }}>
        Home
      </a>
      <a className={styles.a}>Farhad</a>
    </div>
  );
};

export default MenuOverlay;
