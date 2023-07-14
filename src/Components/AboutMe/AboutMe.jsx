import React from "react";
import styles from "./AboutMe.module.css";
import Cards from "../Cards/Cards";

const AboutMe = ({ mode }) => {
  return (
    <section className={styles.aboutme}>
      <h4>About Me</h4>
      <Cards mode={mode} />
    </section>
  );
};

export default AboutMe;
