import * as React from "react"
import { marked } from "marked"
import * as styles from "./styles.module.scss"

type PropsType = {
  text: string
}

const ToMD: React.FC<PropsType> = (props) => {
  const { text } = props
  return (
    <div className={styles.md} dangerouslySetInnerHTML={{__html: marked(text)}} />
  )
}

export default ToMD
