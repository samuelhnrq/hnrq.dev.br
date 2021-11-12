import { graphQlClient } from './config'
import { gql } from 'graphql-request'
import { useQuery } from 'react-query'

const query = gql`
  query {
    user(username: "samuelhnrq") {
      publication {
        posts(page: 0) {
          _id
          title
          contentMarkdown
        }
      }
    }
  }
`

export async function fetchPosts() {
  const res = await graphQlClient.request(query)
  return res.user.publication.posts
}

export function usePosts() {
  return useQuery('posts', fetchPosts, { initialData: [] })
}
