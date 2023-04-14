import React from "react"
import styles from "./Footer.module.css"
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export default function Footer() {
  return(
    <footer className={styles.footer}>
      <AiOutlineCopyrightCircle />
      <p>Developed with <FcLike /> by Carlos Alan</p>
    </footer>
  )
}
