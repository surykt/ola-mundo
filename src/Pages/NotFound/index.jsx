import React from "react"
import styles from "./NotFound.module.css"
import erro404 from "../../assets/erro_404.png"

export default function NotFound() {
  return(
    <>
      <div className={styles.contentContainer}>
        <span className={styles.text404}>404</span>
        <h1 className={styles.title}>Ops! Página não encontrada</h1>
        <p className={styles.paragraph}>
            Tem certeza que era isso que estava procurando?
        </p>
        <p className={styles.paragraph}>Aguarde alguns instantes e recarregue a página ou volte para a página inicial!</p>
        <div className={styles.buttonContainer}>
          <button>Voltar</button>
        </div>
        <img
          className={styles.dogImage}
          src={erro404}
          alt="Imagem de um cachorrinho de óculos"
        />
    </div>
    <div className={styles.whiteSpace}></div>
    </>

  )
}
