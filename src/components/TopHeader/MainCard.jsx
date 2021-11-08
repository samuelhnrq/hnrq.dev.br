/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import Logo from './HNRQLogo'
import MediaButtons from './SocialButtons'
import WipMark from './WipMark'
import ArrowDown from './ArrowDown'

const Titulo = css`
  width: fit-content;
  background-color: pink;
  padding: 0;
  margin: 0 0 20px;
  line-height: 1;
  height: 35px;
  margin-left: auto;
  direction: ltr;
  font-size: 3rem;
`

function MainCard({ className }) {
  return (
    <div className={className}>
      <div css={Titulo}>
        <h1
          css={css`
            position: relative;
            left: 10px;
            margin: 0;
            font-size: 3rem;
          `}
        >
          סמואל
        </h1>
      </div>
      <Logo />
      <WipMark />
      <MediaButtons />
      <ArrowDown />
    </div>
  )
}

export default MainCard
