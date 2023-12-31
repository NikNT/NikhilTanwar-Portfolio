import React from "react";
import styles from "./NavBar.module.css";
import darkmode from "../../Assets/Dark Mode Switch.png";
import lightmode from "../../Assets/Light Mode Switch.png";
import hamburger from "../../Assets/hamburger.png";
import hamburgerLight from "../../Assets/hamburger-light.png";

const NavBar = ({ clickHandler, mode }) => {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <ul className={styles.nav_links}>
            <li className={styles.nav_links_li}>About Me</li>
            <li className={styles.nav_links_li}>My Projects</li>
            <li className={styles.nav_links_li}>Let's Connect</li>
            <li className={styles.nav_links__hamburger}>
              <img
                src={mode ? hamburgerLight : hamburger}
                alt="Hamburger Menu"
              />
            </li>
          </ul>
          <img
            src={mode ? lightmode : darkmode}
            alt="Dark Mode Switch"
            className={styles.nav_darkmode}
            onClick={clickHandler}
          />
        </nav>
      </header>
    </>
  );
};

export default NavBar;
