import React from "react";
import styles from "./AboutMe.module.css";
// import avatar from "../../Assets/avatar.png";
import darkAvatar from "../../Assets/avatar-dark.png";
import book from "../../Assets/book.gif";

const AboutMe = () => {
  return (
    <section className={styles.aboutme}>
      <h4>About Me</h4>
      <div className={styles.cardContainer}>
        <div className={styles.aboutme_cards}>
          <div className={styles.aboutme_card}>
            <div className={styles.aboutme_card_title}>
              <img
                className={styles.aboutMe_card_title_img}
                src={darkAvatar}
                alt="Avatar"
              />
              <p>Me</p>
            </div>
            <div className={styles.aboutme_card_body}>
              <p>Hi</p>
              <p>I'm Nikhil</p>
              <p>A Self-taught</p>
              <p>Pixel Nerdy</p>
              <p>Front End Dev</p>
              <p>I love ReactJS, XBox Series S,</p>
              <p>and Pizza</p>
            </div>
          </div>
          <div className={styles.aboutme_card}>
            <div className={styles.aboutme_card_title}>
              <img
                className={styles.aboutMe_card_title_img}
                src={darkAvatar}
                alt="Avatar"
              />
              <p>Me</p>
            </div>
            <div className={styles.aboutme_card_body}>
              <p>Hi</p>
              <p>I'm Nikhil</p>
              <p>A Self-taught</p>
              <p>Pixel Nerdy</p>
              <p>Front End Dev</p>
              <p>I love ReactJS, XBox Series S,</p>
              <p>and Pizza</p>
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
                PG Diploma Cloud Computing for Big Data Lambton College, Toronto
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
