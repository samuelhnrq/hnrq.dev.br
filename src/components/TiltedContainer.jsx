/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

function TiltedContainer({ children, className }) {
  return (
    <div
      className={className}
      css={css`
        transform: rotate(5deg) scaleY(120%);
      `}
    >
      <div
        css={css`
          height: 100%;
          transform: rotate(-5deg) scaleY(80%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        {children}
      </div>
    </div>
  )
}

export default TiltedContainer
