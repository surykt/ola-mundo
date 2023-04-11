import React from "react";
import styles from "./Menu.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Menu() {
  const localization = useLocation();

  console.log(localization);

  return (
    <header>
      <nav className={styles.navigation}>
        <Link
          className={`${styles.link} ${
            localization.pathname === "/" ? styles.featuredLink : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${styles.link} ${
            localization.pathname === "/about-me" ? styles.featuredLink : ""
          }`}
          to="/about-me"
        >
          About-me
        </Link>
      </nav>
    </header>
  );
}
