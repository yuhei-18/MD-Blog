import * as React from "react"
import clsx from "clsx"
import { Link, navigate } from "gatsby"
import { useMutation } from "@apollo/client"
import { CREATE_POST } from "../../graphql/mutation"
import Layout from "../../components/Layout"
import ToMD from "../../components/ToMD"
import TwoColumn from "../../components/TwoColumn"
import Header from "../../components/Header"
import * as styles from "./styles.module.scss"

const IndexPage = () => {
  const [textState, setTextState] = React.useState("")
  const [createPost, { loading, error }] = useMutation(CREATE_POST)

  if (loading) return <div>Loading...</div>
  if (error) return <div>error: {error.message}</div>

  // 文字をリアルタイムで MD に変換
  const handleOnChange = (e) => {
    setTextState(e.target.value)
  }

  const handleOnClick = () => {
    createPost({
      variables: {
        input: {
          text: textState,
          authorEmail: "dummy@gmail.com",
          isPublish: false
        }
      }
    }).then(() => {
      console.log("postの作成に成功しました。")
      navigate("../")
    }).catch((e) => {
      console.error("postの作成に失敗しました。: " + {e})
    })
  }

  return (
    <form>
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
                  Create
                </a>
              </li>
            </ul>
          </Header>
        </Layout.Header>

        <Layout.Body>
          <TwoColumn>
            <textarea
              onChange={handleOnChange}
              autoFocus={true}
              className={styles.textarea}
            />
            <ToMD text={textState} />
          </TwoColumn>
        </Layout.Body>
      </Layout>
    </form>
  )
}

export default IndexPage
