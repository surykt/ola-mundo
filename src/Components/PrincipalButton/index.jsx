import React from "react"
import styles from "./PrincipalButton.module.css"

export default function PrincipalButton({ children, size }) {
  return(
    <button
      className={`
        ${styles.principalButton}
        ${styles[size]}
      `}>
      {children}
    </button>

  )
}
