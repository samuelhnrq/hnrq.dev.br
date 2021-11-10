/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Typography } from '@mui/material'

const style = css`
  background-color: pink;
  margin: 0 0 10px;
  direction: ltr;
  font-size: 3rem;
`

function Samuel(props) {
  return (
    <Typography variant="h2" lineHeight="1" css={style} {...props}>
      סמואל
    </Typography>
  )
}

export default Samuel
