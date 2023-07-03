import React from "react";
import styles from "./NavBar.module.css";
import darkmode from "../../Assets/Dark Mode Switch.png";
import hamburger from "../../Assets/hamburger.png";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className={styles.nav}>
          <ul className={styles.nav_links}>
            <li className={styles.nav_links_li}>About Me</li>
            <li className={styles.nav_links_li}>My Projects</li>
            <li className={styles.nav_links_li}>Let's Connect</li>
            <li className={styles.nav_links__hamburger}>
              <img src={hamburger} alt="Hamburger Menu" />
            </li>
          </ul>
          <img
            src={darkmode}
            alt="Dark Mode Switch"
            className={styles.nav_darkmode}
          />
        </nav>
      </header>
    </>
  );
};

export default NavBar;
