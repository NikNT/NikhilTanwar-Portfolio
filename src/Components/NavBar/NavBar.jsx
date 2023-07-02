import React from "react";
import styles from "./NavBar.module.css";
import darkmode from "../../Assets/Dark Mode Switch.png";

const NavBar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.nav_links}>
          <li>About Me</li>
          <li>My Projects</li>
          <li>Let's Connect</li>
        </ul>
        <img
          src={darkmode}
          alt="Dark Mode Switch"
          className={styles.nav_darkmode}
        />
      </nav>
    </header>
  );
};

export default NavBar;
