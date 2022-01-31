import * as React from "react"
import clsx from "clsx"
import { Link } from "gatsby"
import { decode } from "base-64"
import { useQuery, useMutation } from "@apollo/client"
import { POSTS } from "../../graphql/query"
import { UPDATE_POST } from "../../graphql/mutation"
import Layout from "../../components/Layout"
import ToMD from "../../components/ToMD"
import TwoColumn from "../../components/TwoColumn"
import Header from "../../components/Header"
import { PostNodeType, PostType } from "../../types"
import * as styles from "./styles.module.scss"

type Pathname = {
  pathname: string
}

type PropsType = {
  location: Pathname
}

const IndexPage: React.FC<PropsType> = (props) => {
  const { location } = props
  const id = location.pathname.split("/")[1]
  const [textState, setTextState] = React.useState("")
  const { loading, error, data } = useQuery(POSTS)
  const [updatePost, {
    loading: updatePostLoading,
    error: updatePostError,
  }] = useMutation(UPDATE_POST)

  if (loading || updatePostLoading) return <div>Loading...</div>
  if (error || updatePostError) return <div>error: {error.message}</div>

  const posts: PostNodeType = data.posts.edges.filter((post: PostNodeType) => post.node.id == id)
  const post: PostType = posts[0].node

  // 文字をリアルタイムで MD に変換
  const handleOnChange = (e) => {
    setTextState(e.target.value)
  }

  // Post 更新処理
  const handleOnClick = () => {
    updatePost({
      variables: {
        input: {
          id: decode(id).split(":")[1],
          text: textState
        }
      }
    }).then(() => {
      console.log("postの更新に成功しました。")
    }).catch((e) => {
      console.error("postの更新に失敗しました。: " + {e})
    })
  }

  return (
    <Layout>
      <Layout.Header>
        <Header>
          <ul className={styles.header}>
            <li>
              <Link className={clsx(styles.button, styles.back_button)} to="../">BackHome</Link>
            </li>
            <li>
              <a
                className={clsx(styles.button, styles.save_button)}
                onClick={handleOnClick}
              >
                Save
              </a>
            </li>
            <li>
              <a className={clsx(styles.button, styles.delete_button)}>Delete</a>
            </li>
          </ul>
        </Header>
      </Layout.Header>

      <Layout.Body>
        <TwoColumn>
          <textarea
            onChange={handleOnChange}
            defaultValue={post.text}
            autoFocus={true}
            className={styles.textarea}
          />
          <ToMD text={textState ? textState : post.text} />
        </TwoColumn>
      </Layout.Body>
    </Layout>
  )
}

export default IndexPage
