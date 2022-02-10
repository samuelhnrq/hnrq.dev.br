import { css } from '@emotion/react'
import { Divider, Typography, CircularProgress } from '@mui/material'
import React from 'react'
import { usePosts } from '../../lib/cms/posts'
import Post from './Post'

const centered = css`
  margin: auto;
  display: block;
`

function Posts() {
  const { data = [], loading } = usePosts()
  return (
    <div>
      <Typography variant="h2" align="center" marginTop="20px" gutterBottom>
        Últimos Posts
      </Typography>
      {/* TODO: Skeleton */}
      {loading && <CircularProgress css={centered} />}
      {data.map((post, i) => (
        <React.Fragment key={post._id}>
          <Post post={post} />
          {i % 2 === 0 && i < data.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Posts
