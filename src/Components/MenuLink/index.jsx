import React from "react";
import styles from "./MenuLink.module.css";
import { Link, useLocation } from "react-router-dom";

export default function MenuLink({ children, to }) {
  const localization = useLocation();

  return (
    <Link
      className={`${styles.link} ${
        localization.pathname === to ? styles.featuredLink : ""
      }`}
      to={to}
    >
      {children}
    </Link>
  );
}
