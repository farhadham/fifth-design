import React, { useState } from "react";
import styles from "./Setting.module.scss";
import { RiSettings5Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { colors } from "../../utils/colors";

const Setting = ({ setColor, setLines }) => {
  const [SettingIsOn, SetSettingIsOn] = useState(false);

  const settingHandler = () => {
    SetSettingIsOn(!SettingIsOn);
  };

  return (
    <motion.div
      className={styles["wrapper"]}
      initial={{ x: 200 }}
      animate={{ x: SettingIsOn ? 0 : 200 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.main}>
        <div className={styles.colors}>
          <h4>Change Color</h4>
          <div className={styles.colorContainer}>
            {colors.map((el, index) => {
              return (
                <motion.div
                  key={index}
                  className={styles.color}
                  style={{ backgroundColor: `${el}` }}
                  onClick={() => {
                    setColor(el);
                  }}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 1 }}
                ></motion.div>
              );
            })}
          </div>
        </div>
        <div className={styles.lines}>
          <h4>Lines On/Off</h4>
          <button
            onClick={() => {
              setLines(true);
            }}
          >
            ON
          </button>
          <button
            onClick={() => {
              setLines(false);
            }}
          >
            OFF
          </button>
        </div>
      </div>
      <div className={styles.icon} onClick={settingHandler}>
        <RiSettings5Fill className={styles.gear} />
      </div>
    </motion.div>
  );
};

export default Setting;
