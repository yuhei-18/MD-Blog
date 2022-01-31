import { gql } from "@apollo/client"

export const CREATE_POST = gql`
  mutation CreatePost($input: CreatePostInput) {
    createPost(input: $input) {
      post {
        id
        text
        isPublish
        author {
          id
          name
        }
        createdAt
        updatedAt
      }
    }
  }
`

export const UPDATE_POST = gql`
  mutation UpdatePost($input: UpdatePostInput) {
    updatePost(input: $input) {
      post {
        id
        text
        isPublish
        author {
          id
          name
        }
        createdAt
        updatedAt
      }
    }
  }
`