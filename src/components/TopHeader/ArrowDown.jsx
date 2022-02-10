import { css } from '@emotion/react'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function scrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}

const keyframes = css`
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

function ArrowDown() {
  return (
    <span
      css={css`
        ${keyframes};
        animation-name: appear;
        position: absolute;
        opacity: 0;
        animation-delay: 2s;
        animation-duration: 2s;
        animation-fill-mode: forwards;
        animation-iteration-count: 1;
        animation-timing-function: ease-out;
        mix-blend-mode: difference;
        bottom: 25px;
      `}
    >
      <FontAwesomeIcon
        icon={faArrowDown}
        size="3x"
        additive="replace"
        accumulate="sum"
        className="fa-bounce"
        onClick={scrollDown}
        css={css`
          color: #ff7676;
          --fa-animation-duration: 1.5s;
        `}
      />
    </span>
  )
}

// @refresh reset

export default ArrowDown
