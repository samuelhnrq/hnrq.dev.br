import { graphQlClient } from './config'
import { gql } from 'graphql-request'
import { useQuery } from 'react-query'

const query = gql`
  query {
    allPosts {
      id
      title
      content
      _status
      _firstPublishedAt
    }
  }
`

export async function fetchPosts() {
  const res = await graphQlClient.request(query)
  return res.allPosts
}

export function usePosts() {
  return useQuery('posts', fetchPosts, { initialData: [] })
}
