import { GraphQLClient } from 'graphql-request'

export const CMS_ENDPOINT = process.env.NEXT_PUBLIC_CMS_URL

const allProps = { CMS_ENDPOINT }

export const graphQlClient = new GraphQLClient(CMS_ENDPOINT)

export default allProps
