import * as React from "react"
import * as styles from "./styles.module.scss"

const Header:React.FC = ({ children }) => {
  return (
    <div className={styles.header}>
      <div className={styles.contents}>
        {children}
        <div className={styles.user}>
          <p>logged in user</p>
        </div>
      </div>
    </div>
  )
}

export default Header
