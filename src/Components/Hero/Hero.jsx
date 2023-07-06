import React from "react";
import styles from "./Hero.module.css";
import avatar from "../../Assets/avatar.png";
import darkAvatar from "../../Assets/avatar-dark.png";

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
            <a href={gitHub} target="_blank" rel="noreferrer">
              <button className={styles.hero_content__button___github}>
                GitHub
              </button>
            </a>
            <a href={linkedIn} target="_blank" rel="noreferrer">
              <button className={styles.hero_content__button___linkedin}>
                LinkedIn
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
