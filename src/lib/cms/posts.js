import { gql, useQuery } from '@apollo/client'

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

export function usePosts() {
  const result = useQuery(query, { ssr: true })
  if (result.data) {
    result.data = result.data.user.publication.posts
  } else {
    result.data = []
  }
  return result
}
