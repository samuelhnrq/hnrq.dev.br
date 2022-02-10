import { ApolloProvider } from '@apollo/client'
import { css } from '@emotion/react'

import { Box, Typography } from '@mui/material'
import { graphQlClient } from '../lib/cms/client'
import { flexCenterContainer } from '../lib/css-utils'
import Posts from './About/PostList'

const styleSheet = css`
  ${flexCenterContainer};
  min-height: 40vh;
  padding: 10px 15px;
  flex-wrap: wrap;
  background-color: whitesmoke;
  & hr {
    margin: 10px 0;
    border-color: rgba(30, 30, 30, 0.3);
  }
  & p {
    margin: 0;
  }
`

function AboutMe() {
  return (
    <div css={styleSheet}>
      <ApolloProvider client={graphQlClient}>
        <Box maxWidth="600px" marginY="40px">
          <Typography variant="h4" component="h2" align="right">
            Hello, I love to code
          </Typography>
          <Typography
            variant="subtitle1"
            component="h3"
            align="right"
            gutterBottom
          >
            <i>A true master is an eternal student</i>
          </Typography>
          <Typography variant="body1" align="justify" gutterBottom>
            Proud <i>gaymer</i> software engineer here. Friendly neighboorhood
            hacker on my spare time, open source contribuitor, right wing
            activist and computer hardware enthusiast.
          </Typography>
          <Posts />
        </Box>
      </ApolloProvider>
    </div>
  )
}

export default AboutMe
