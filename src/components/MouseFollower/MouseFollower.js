import styles from "./MouseFollower.module.scss";
import { motion } from "framer-motion";

const MouseFollower = ({ x, y, color }) => {
  return (
    <motion.div
      className={styles["follower"]}
      style={{ x, y, backgroundColor: color.slice(0, 7) + "57" }}
    ></motion.div>
  );
};

export default MouseFollower;
