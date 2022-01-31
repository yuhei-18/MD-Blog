import { gql } from "@apollo/client"

export const USERS = gql`
  query Users {
    users {
      edges {
        node {
          id
          name
          email
          password
          createdAt
          updatedAt
        }
      }
    }
  }
`

export const POSTS = gql`
  query Posts {
    posts {
      edges {
        node {
          id
          text
          isPublish
          createdAt
          updatedAt
          author {
            id
            name
            email
            role {
              id
              name
            }
          }
        }
      }
    }
  }
`