/** @jsxImportSource @emotion/react */
import { Divider, Typography, CircularProgress } from '@mui/material'
import { css } from '@emotion/react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { usePosts } from '../../lib/cms/posts'

const centered = css`
  margin: auto;
  display: block;
`

function Posts() {
  const { data, isFetching } = usePosts()
  return (
    <div>
      <Typography variant="h2" align="center" marginTop="20px" gutterBottom>
        Últimos Posts
      </Typography>
      {/* TODO: Skeleton */}
      {isFetching && <CircularProgress css={centered} />}
      {data.map((post, i) => (
        <React.Fragment key={post._id}>
          <Typography variant="h4" component="h2" gutterBottom>
            {post.title}
          </Typography>
          <Typography gutterBottom component={ReactMarkdown} marginTop={0}>
            {post.contentMarkdown}
          </Typography>
          {i % 2 === 0 && i < data.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Posts
