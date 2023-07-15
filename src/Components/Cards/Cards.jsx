import React from "react";
import styles from "./Cards.module.css";
import darkAvatar from "../../Assets/avatar-dark.png";
import book from "../../Assets/book.gif";
import developer from "../../Assets/developer-light.gif";
import bookReader from "../../Assets/book-reader.gif";
import work from "../../Assets/work.gif";
import quote from "../../Assets/quote.gif";

const Cards = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.aboutme_cards}>
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
              src={work}
              alt="Work"
            />
            <p>Work Experience</p>
          </div>
          <div className={styles.aboutme_card_body}>
            <p>
              Front End Developer - 2 Years
              <br />
              <br />
              <span className={styles.aboutme_card_body_author}>
                Worked in a budding Ed-Tech Company in Punjab, India <br />
                <br /> Collaborated with UI/UX Designers, Back End Developers to
                develop and maintain mission critical business systems.
                <br />
                <br />
                Gained first-hand professional experience related to Web Design
                and Development.
              </span>
            </p>
          </div>
        </div>
        <div className={styles.aboutme_card}>
          <div className={styles.aboutme_card_title}>
            <img
              className={styles.aboutMe_card_title_img}
              src={bookReader}
              alt="Book Reader"
            />
            <p>Fav Reads</p>
          </div>
          <div className={styles.aboutme_card_body}>
            <p>
              Shoe Dog
              <br />
              <span className={styles.aboutme_card_body_author}>
                {" "}
                Phil Knight{" "}
              </span>
              <br />
              <em className={styles.aboutme_card_body_quote}>
                "Life is growth. You grow or you die."
              </em>
            </p>
            <p>
              Atomic Habits <br />{" "}
              <span className={styles.aboutme_card_body_author}>
                {" "}
                James Clear{" "}
              </span>{" "}
              <br />{" "}
              <em className={styles.aboutme_card_body_quote}>
                "Every action you take is a vote for the type of person you wish
                to become."
              </em>
            </p>
          </div>
        </div>
        <div className={styles.aboutme_card}>
          <div className={styles.aboutme_card_title}>
            <img
              className={styles.aboutMe_card_title_img}
              src={quote}
              alt="Quote"
            />
            <p>Fav Quote</p>
          </div>
          <div className={styles.aboutme_card_body}>
            <p>
              <em className={styles.aboutme_card_body_quote_fav}>
                "One last drink and the bottle breaks, returning us to the dust
                from whence we came"
              </em>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
