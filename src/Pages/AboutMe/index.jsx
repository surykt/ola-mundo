import PostModel from "Components/PostModel";
import React from "react";
import photoCover from "assets/sobre_mim_capa.png";
import styles from "./AboutMe.module.css";
import aboutMePhoto from "assets/myFoto.jpg";

export default function AboutMe() {
  return (
    <PostModel photoCover={photoCover} title="Sobre Mim">
      <h3 className={styles.subtitle}>Olá eu sou o Carlos Alan!</h3>
      <img
        src={aboutMePhoto}
        alt="foto de Carlos Alan"
        className={styles.aboutMePhoto}
      />
    </PostModel>
  );
}
