import React from "react";
import styles from "./Banner.module.css";
import coloredCircle from "assets/circulo_colorido.png";
import myFoto from "assets/myFoto.jpg";

export default function Banner() {
  return (
    <div className={styles.Banner}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>Olá Mundo</h1>
        <p className={styles.paragraph}>
          Seja Bem Vindo ao meu espaço pessoal! Me chamo Carlos Alan, Sou
          desenvolvedor Front-end na Youse seguros. Aqui compartilho vários
          conhecimentos, espero que aprenda algo novo comigo :)
        </p>
      </div>
      <div className={styles.images}>
        <img
          className={styles.coloredCircle}
          src={coloredCircle}
          aria-hidden={true}
          alt="foto de um círculo colorido"
        />
        <img
          className={styles.myFoto}
          src={myFoto}
          alt="foto do rosto do Carlos"
        />
      </div>
    </div>
  );
}
