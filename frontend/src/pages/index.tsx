import * as React from "react"
import { Link } from "gatsby"
import { useQuery } from "@apollo/client"
import { POSTS } from "../graphql/query"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Card from "../components/Card"
import ListHeader from "../components/ListHeader"
import { PostNodeType } from "../types"
import * as styles from "./styles.module.scss"

const IndexPage = () => {
  const { loading, error, data, refetch } = useQuery(POSTS)

  React.useEffect(() => {
    refetch()
  }, [data, refetch])

  if (loading) return <div>Loading...</div>
  if (error) return <div>error: {error.message}</div>

  return (
    <Layout>
      <Layout.Header>
        <Header>
          <ul className={styles.header}>
            <li className={styles.search}>
              <input type="search" placeholder="Search here" />
            </li>
            <li>Setting</li>
            <li>Etc.</li>
          </ul>
        </Header>
      </Layout.Header>

      <Layout.Body>
        <ListHeader>
          <ListHeader.Item width="30%">タイトル</ListHeader.Item>
          <ListHeader.Item width="15%">作成者</ListHeader.Item>
          <ListHeader.Item width="15%">公開状況</ListHeader.Item>
          <ListHeader.Item width="15%">作成日</ListHeader.Item>
          <ListHeader.Item width="8%">更新日</ListHeader.Item>
          <ListHeader.Item width="7%">
            <Link to="create" className={styles.new_button}>New</Link>
          </ListHeader.Item>
        </ListHeader>

        {data.posts.edges.map((post: PostNodeType) => (
          <Card
            key={post.node.id}
            id={post.node.id}
            title={
              post.node.text.match("# ") ?
              post.node.text.split("# ")[1].split(/\n/)[0] :
              "No Title"
            }
            author={post.node.author.name}
            isPublish={post.node.isPublish}
            createdAt={post.node.createdAt}
            updatedAt={post.node.updatedAt}
          />
        ))}
      </Layout.Body>
    </Layout>
  )
}

export default IndexPage
