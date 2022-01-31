import * as React from "react"
import * as CSS from "csstype"
import * as styles from "./styles.module.scss"

interface ItemProps {
  width: string
}

interface ListHeaderComposition {
  Item: React.FC<ItemProps>
}

const ListHeader: React.FC & ListHeaderComposition = ({ children }) => {
  return(
    <ul className={styles.list_header}>{children}</ul>
  )
}

const ListHeaderItem: React.FC<ItemProps> = (props) => {
  const { width, children } = props
  const style: CSS.Properties = { width: width }

  return (
    <li style={style}>{children}</li>
  )
}

ListHeader.Item = ListHeaderItem

export default ListHeader
