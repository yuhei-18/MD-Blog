import * as React from "react"
import * as styles from "./styles.module.scss"

const TwoColumn: React.FC = ({ children }) => {
  return (
    <div className={styles.flex}>{children}</div>
  )
}

export default TwoColumn
