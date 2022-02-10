import { ApolloClient, InMemoryCache } from '@apollo/client'

export const CMS_ENDPOINT = process.env.NEXT_PUBLIC_CMS_URL

const allProps = { CMS_ENDPOINT }

export const graphQlClient = new ApolloClient({
  uri: CMS_ENDPOINT,
  ssrMode: true,
  cache: new InMemoryCache(),
})

export default allProps
