import * as React from "react"
import { Link } from "gatsby"
import { formatDate } from "../../utils"
import * as styles from "./styles.module.scss"

type PropsType = {
  id: string;
  title: string;
  author: string;
  isPublish: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const Card: React.FC<PropsType> = (props) => {
  const { id, title, author, isPublish, createdAt, updatedAt } = props
  return (
    <div className={styles.card}>
      <Link to={id}>
        <ul className={styles.flex}>
          <li className={styles.title}>{title}</li>
          <li className={styles.author}>{author}</li>
          <li className={styles.publish}>
            {isPublish ?
              (<label style={{ color: "#3f3" }}>公開</label>) :
              (<label style={{ color: "#f00" }}>非公開</label>)
            }
          </li>
          <li className={styles.date_info}>{formatDate(createdAt)}</li>
          <li className={styles.date_info}>{formatDate(updatedAt)}</li>
        </ul>
      </Link>
    </div>
  )
}

export default Card
