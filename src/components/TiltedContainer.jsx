import { css } from '@emotion/react'

function TiltedContainer({ children, className }) {
  return (
    <div
      className={className}
      css={css`
        transform: rotate(5deg);
      `}
    >
      <div
        css={css`
          height: 100%;
          transform: rotate(-5deg);
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
