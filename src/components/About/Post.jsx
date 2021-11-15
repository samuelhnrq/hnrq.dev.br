/** @jsxImportSource @emotion/react */
import { Typography } from '@mui/material'
import React from 'react'
import ReactMarkdown from 'react-markdown'

function Post({ post }) {
  return (
    <React.Fragment key={post._id}>
      <Typography variant="h4" component="h2" gutterBottom>
        {post.title}
      </Typography>
      <Typography gutterBottom component={ReactMarkdown} marginTop={0}>
        {post.contentMarkdown}
      </Typography>
    </React.Fragment>
  )
}

export default Post
