import { GraphQLClient } from 'graphql-request'

export const CMS_ENDPOINT = process.env.NEXT_PUBLIC_CMS_URL
export const CMS_API_KEY = process.env.NEXT_PUBLIC_CMS_TOKEN

const allProps = { CMS_ENDPOINT, CMS_API_KEY }

export const graphQlClient = new GraphQLClient(CMS_ENDPOINT, {
  headers: {
    authorization: `Bearer ${CMS_API_KEY}`,
  },
})

export default allProps
