import { css } from '@emotion/react'
import { Typography } from '@mui/material'

const wipContainer = css`
  background-color: aqua;
  padding: 3px;
`

function WipMark(props) {
  return (
    <Typography variant="h5" component="h2" css={wipContainer} {...props}>
      <span>WIP!</span>
    </Typography>
  )
}

export default WipMark
