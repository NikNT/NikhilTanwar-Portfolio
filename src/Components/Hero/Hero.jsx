import React from "react";
import styles from "./Hero.module.css";
import avatar from "../../Assets/avatar.png";
import darkAvatar from "../../Assets/avatar-dark.png";
import chevron from "../../Assets/chevron.png";
import lightChevron from "../../Assets/white-chevron.png";
import { Link } from "react-router-dom";

const Hero = ({ mode }) => {
  const gitHub = "https://github.com/NikNT";
  const linkedIn = "https://www.linkedin.com/in/nikhil-tanwar-76b247128/";
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_image}>
          <img src={mode ? darkAvatar : avatar} alt="Avatar" />
        </div>
        <div className={styles.hero_content}>
          <p>Hey there,</p>
          <h1>
            I'm <strong> Nikhil </strong> Tanwar
          </h1>
          <h2>Front End Dev</h2>
          <p>I build minimalistic, aesthetic, and intuitive websites</p>
          <div className={styles.hero_content__button}>
            <a href={gitHub} target="_blank">
              <button className={styles.hero_content__button___github}>
                GitHub
              </button>
            </a>
            <a href={linkedIn} target="_blank">
              <button className={styles.hero_content__button___linkedin}>
                LinkedIn
              </button>
            </a>
          </div>
        </div>
      </section>
      <div className={styles.chevron}>
        <Link to="/about-me">
          <img src={mode ? lightChevron : chevron} alt="Chevron" />
        </Link>
      </div>
    </>
  );
};

export default Hero;
