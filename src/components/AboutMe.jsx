/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Button, Typography } from '@mui/material'
import { flexCenterContainer } from '../lib/css-utils'

const styleSheet = css`
  ${flexCenterContainer};
  min-height: 40vh;
  padding: 10px 15px;
  flex-wrap: wrap;
  background-color: whitesmoke;
`

function AboutMe() {
  return (
    <div css={styleSheet}>
      <Box maxWidth="500px">
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
        <Typography variant="body1" align="justify">
          Proud <i>gaymer</i> software engineer here. Friendly neighboorhood
          hacker on my spare time, open source contribuitor, right wing activist
          and computer hardware enthusiast.
        </Typography>
        <Button color="primary" variant="contained">
          Click me
        </Button>
      </Box>
    </div>
  )
}

export default AboutMe
