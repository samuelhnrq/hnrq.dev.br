/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { usePosts } from '../lib/cms/posts'
import { flexCenterContainer } from '../lib/css-utils'

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
  const { data } = usePosts()
  return (
    <div css={styleSheet}>
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
          hacker on my spare time, open source contribuitor, right wing activist
          and computer hardware enthusiast.
        </Typography>
        <Typography variant="h2" align="center" marginTop="20px">
          Últimos Posts
        </Typography>
        {data.map((post) => (
          <React.Fragment key={post.id}>
            <Divider />
            <Typography variant="h4" component="h2" gutterBottom>
              {post.title}
            </Typography>
            <Typography gutterBottom component={ReactMarkdown} marginTop={0}>
              {post.content}
            </Typography>
          </React.Fragment>
        ))}
      </Box>
    </div>
  )
}

export default AboutMe
