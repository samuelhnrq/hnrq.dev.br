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
  margin: 0 0 4vh auto;
  line-height: 1;
  height: 35px;
  padding-left: 6px;
  direction: ltr;
  font-size: 3rem;
`

function MainCard({ className }) {
  return (
    <div
      className={className}
      css={css`
        padding: 20px;
        width: 100%;
      `}
    >
      <div css={Titulo}>
        <Typography variant="h2">סמואל</Typography>
      </div>
      <Logo
        css={css`
          max-height: 50vh;
        `}
      />
      <WipMark />
      <MediaButtons />
      <ArrowDown />
    </div>
  )
}

export default MainCard
