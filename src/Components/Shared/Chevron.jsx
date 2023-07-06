import React from "react";
import styles from "./Chevron.module.css";
import lightChevron from "../../Assets/white-chevron.png";
import chevron from "../../Assets/chevron.png";

const Chevron = ({ mode }) => {
  const handleScroll = () => {
    const vh = window.innerHeight;
    window.scrollTo({
      top: vh,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.chevron}>
      <img
        src={mode ? lightChevron : chevron}
        alt="Chevron"
        onClick={handleScroll}
      />
    </div>
  );
};

export default Chevron;
