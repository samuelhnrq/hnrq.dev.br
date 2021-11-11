/** @jsxImportSource @emotion/react */
import { Divider, Typography, CircularProgress } from '@mui/material'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { usePosts } from '../../lib/cms/posts'

function Posts() {
  const { data, isFetching } = usePosts()
  return (
    <React.Fragment>
      <Typography variant="h2" align="center" marginTop="20px" gutterBottom>
        Últimos Posts
      </Typography>
      {isFetching && <CircularProgress />}
      {data.map((post, i) => (
        <React.Fragment key={post.id}>
          <Typography variant="h4" component="h2" gutterBottom>
            {post.title}
          </Typography>
          <Typography gutterBottom component={ReactMarkdown} marginTop={0}>
            {post.content}
          </Typography>
          {i % 2 === 0 && i < data.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default Posts
