import * as React from "react"
import * as styles from "./styles.module.scss"

interface LayoutComposition {
  Header: React.FC;
  Body: React.FC;
  Footer: React.FC;
}

const Layout: React.FC & LayoutComposition = ({ children }) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}

const LayoutHeader: React.FC = ({ children }) => {
  return (
    <div className={styles.header}>
      {children}
    </div>
  )
}

const LayoutBody: React.FC = ({ children }) => {
  return (
    <div className={styles.body}>
      {children}
    </div>
  )
}

const LayoutFooter: React.FC = ({ children }) => {
  return (
    <div className={styles.footer}>
      {children}
    </div>
  )
}

Layout.Header = LayoutHeader
Layout.Body = LayoutBody
Layout.Footer = LayoutFooter

export default Layout
