import React from "react";
import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navigation}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about-me">About-me</MenuLink>
      </nav>
    </header>
  );
}
