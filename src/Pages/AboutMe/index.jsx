import PostModel from "Components/PostModel";
import React from "react";
import photoCover from "assets/sobre_mim_capa.png";
import styles from "./AboutMe.module.css";
import aboutMePhoto from "assets/carlosPhoto.jpg";

export default function AboutMe() {
  return (
    <PostModel photoCover={photoCover} title="Sobre Mim">
      <h3 className={styles.subtitle}>Olá eu sou o Carlos Alan!</h3>
      <img
        src={aboutMePhoto}
        alt="foto de Carlos Alan"
        className={styles.aboutMePhoto}
      />
      <p className={styles.paragraph}>Olá tudo bem me chamo Carlos Alan, atualmente trabalho com desenvolvimento de software na Youse Seguros e estou muito feliz de te ver por aqui!!</p>
      <p className={styles.paragraph}>Minha história na área de tecnologia começou a um pouco mais de um ano atrás, quando tive meu primeiro contato com HTML e CSS básico, na época trabalhava como carteiro na Empresa de Correios e Telégrafos na cidade de Mutum no estado de Minas Gerais.</p>
      <p className={styles.paragraph}>Logo após ter aprendido um pouco destas linguagens básicas de marcação e estilo(e alguns conceitos de Javascript), recebi uma proposta do meu grande incentivador a entrar na área de tecnologia(meu cunhado) e sair da minha antiga empresa e me mudar para a cidade de Pocrane-MG para me aprofundar mais nos estudos na área e atuar em alguns projetos pessoais dele e assim eu fiz naquela época.</p>
      <p className={styles.paragraph}>Após mais ou menos uns 4 meses estudando e trabalhando com ele decidimos que era hora de fazer um bootcamp bem intensivo na Le Wagon no qual colaborou em uma evolução muito grande em minha carreira, principalmente na parte de back-end me tornando um desenvolvedor Full-Stack.</p>
      <p className={styles.paragraph}>Assim que me formei fiz o teste de admissão na Youse Seguros onde permaneço atuando até o momento e que tem colaborado com um enorme aprendizado para minha carreira.</p>
    </PostModel>
  );
}
