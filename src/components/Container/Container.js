import React from "react";
import styles from "./Container.module.scss";

const Container = ({ children, lines }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {children}
        <div
          className={`${styles["col1"]} ${styles["col"]}`}
          style={lines ? { border: "solid 1px #ffffff10" } : { border: "none" }}
        ></div>
        <div
          className={`${styles["col2"]} ${styles["col"]}`}
          style={lines ? { border: "solid 1px #ffffff10" } : { border: "none" }}
        ></div>
        <div
          className={`${styles["col3"]} ${styles["col"]}`}
          style={lines ? { border: "solid 1px #ffffff10" } : { border: "none" }}
        ></div>
      </div>
    </div>
  );
};

export default Container;
