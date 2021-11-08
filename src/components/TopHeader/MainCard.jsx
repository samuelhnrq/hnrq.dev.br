/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Logo from './HNRQLogo'
import MediaButtons from './SocialButtons'
import WipMark from './WipMark'
import ArrowDown from './ArrowDown'
import { Typography } from '@mui/material'

const Titulo = css`
  width: fit-content;
  background-color: pink;
  padding: 0;
  margin: 0 0 20px auto;
  line-height: 1;
  height: 35px;
  padding-left: 6px;
  direction: ltr;
  font-size: 3rem;
`

function MainCard({ className }) {
  return (
    <div className={className}>
      <div css={Titulo}>
        <Typography variant="h2">סמואל</Typography>
      </div>
      <Logo />
      <WipMark />
      <MediaButtons />
      <ArrowDown />
    </div>
  )
}

export default MainCard
