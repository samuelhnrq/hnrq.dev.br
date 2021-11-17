import { css } from '@emotion/react'

const WipContainer = css`
  font-family: 'Comic Sans MS', 'Times New Roman', serif;
  width: fit-content;
  background-color: aqua;
  font-size: 1.2rem;
  height: 20px;
  padding: 4px 16px 1px 5px;
  margin: 5px 10px 0;
  & > span {
    margin-left: -14px;
  }
`

function WipMark(props) {
  return (
    <h2 css={WipContainer} {...props}>
      <span>WIP!</span>
    </h2>
  )
}

export default WipMark
