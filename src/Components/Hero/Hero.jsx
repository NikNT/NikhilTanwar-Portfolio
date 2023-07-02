import React from "react";
import styles from "./Hero.module.css";
import avatar from "../../Assets/avatar.png";
import chevron from "../../Assets/chevron.png";

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_image}>
          <img src={avatar} alt="Avatar" />
        </div>
        <div className={styles.hero_content}>
          <p>Hey there,</p>
          <h1>
            I'm <strong> Nikhil </strong> Tanwar
          </h1>
          <h2>Front End Dev</h2>
          <p>I build minimalistic, aesthetic, and intuitive websites</p>
          <div className={styles.hero_content__button}>
            <button className={styles.hero_content__button___github}>
              GitHub
            </button>
            <button className={styles.hero_content__button___linkedin}>
              LinkedIn
            </button>
          </div>
        </div>
      </section>
      <div className={styles.chevron}>
        <img src={chevron} alt="Chevron" />
      </div>
    </>
  );
};

export default Hero;
