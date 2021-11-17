import { css } from '@emotion/react'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function scrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}

const delta = 25
const keyframes = css`
  @keyframes bounce {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(${delta}px);
    }
    30% {
      transform: translateY(${delta * 0.75}px);
    }
    40% {
      transform: translateY(${delta}px);
    }
    80% {
      transform: translateY(${delta}px);
    }
    100% {
      transform: translateY(0);
    }
  }
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
    <FontAwesomeIcon
      icon={faArrowDown}
      size="3x"
      additive="replace"
      accumulate="sum"
      onClick={scrollDown}
      css={css`
        ${keyframes};
        animation-name: bounce, appear;
        position: absolute;
        opacity: 0;
        animation-delay: 10s, 10s;
        animation-duration: 2s, 1s;
        animation-fill-mode: none, forwards;
        animation-iteration-count: infinite, 1;
        animation-timing-function: ease-out;
        bottom: ${delta + 5}px;
        mix-blend-mode: difference;
        color: #ff7676;
      `}
    />
  )
}

// @refresh reset

export default ArrowDown
