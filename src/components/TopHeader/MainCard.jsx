/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Logo from './HNRQLogo'
import MediaButtons from './SocialButtons'
import WipMark from './WipMark'
import Samuel from './Samuel'

function MainCard({ className }) {
  return (
    <div
      className={className}
      css={css`
        padding: 20px 70px;
        max-width: 90vw;
        display: flex;
        flex-direction: column;
        align-items: center;
      `}
    >
      <Samuel
        css={css`
          flex-basis: 100%;
          align-self: flex-end;
        `}
      />
      <Logo />
      <WipMark
        css={css`
          align-self: flex-start;
        `}
      />
      <MediaButtons />
    </div>
  )
}

export default MainCard
