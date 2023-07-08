import React from "react";
import styles from "./AboutMe.module.css";
import avatar from "../../Assets/avatar.png";
import darkAvatar from "../../Assets/avatar-dark.png";
import book from "../../Assets/book.gif";
import developer from "../../Assets/developer-light.gif";

const AboutMe = ({ mode }) => {
  return (
    <section className={styles.aboutme}>
      <h4>About Me</h4>
      <div className={styles.cardContainer}>
        <div className={styles.aboutme_cards}>
          <div className={styles.aboutme_card}>
            <div className={styles.aboutme_card_title}>
              <img
                className={styles.aboutMe_card_title_img}
                src={developer}
                alt="Developer"
              />
              <p>My Tech Stack</p>
            </div>
            <div className={styles.aboutme_card_body}>
              <p>
                HTML5
                <br />
                CSS3
                <br />
                JavaScript
                <br />
                TypeScript
              </p>
              <p>
                ReactJS <br /> NextJS
              </p>
              <p>
                Bootstrap <br />
                TailwindCSS
                <br />
                SASS
              </p>
            </div>
          </div>
          <div className={styles.aboutme_card}>
            <div className={styles.aboutme_card_title}>
              <img
                className={styles.aboutMe_card_title_img}
                src={mode ? avatar : darkAvatar}
                alt="Avatar"
              />
              <p>Me</p>
            </div>
            <div className={styles.aboutme_card_body}>
              <p>Hi, I'm Nikhil</p>
              <p>
                A Self-taught
                <br />
                Pixel Nerdy
                <br />
                Front End Dev
              </p>
              <p>
                I love ReactJS, XBox Series S,
                <br />
                and Pizza!
              </p>
              <p>
                <em> I sculpt digital landscapes that enchant and inspire </em>
              </p>
            </div>
          </div>
          <div className={styles.aboutme_card}>
            <div className={styles.aboutme_card_title}>
              <img
                className={styles.aboutMe_card_title_img}
                src={book}
                alt="Book"
              />
              <p>Education</p>
            </div>
            <div className={styles.aboutme_card_body}>
              <p>
                B.Tech. CSE <br /> Lovely Professional University
                <br />
                Punjab, India
              </p>
              <p>
                PG Diploma <br /> Cloud Computing for Big Data Lambton College,
                Toronto
              </p>
              <p>Meta Front End Developer Professional Certificate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
