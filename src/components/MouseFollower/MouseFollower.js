import styles from "./MouseFollower.module.scss";
import { motion } from "framer-motion";

const MouseFollower = ({ x, y, color, linkHovered }) => {
  return (
    <motion.div
      className={styles["follower"]}
      style={{ x, y, backgroundColor: color.slice(0, 7) + "57" }}
      animate={
        linkHovered
          ? {
              scale: 3,
              transition: { duration: 0.2 },
              backgroundColor: color.slice(0, 7) + "27",
            }
          : {
              scale: 1,
              transition: { duration: 0.2 },
              backgroundColor: color.slice(0, 7) + "57",
            }
      }
    ></motion.div>
  );
};

export default MouseFollower;
