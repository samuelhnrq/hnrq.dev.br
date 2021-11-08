import { styled } from '@material-ui/core'
import React from 'react'

const WipContainer = styled('h2')({
  fontFamily: "'Comic Sans MS', 'Times New Roman', serif",
  width: 'fit-content',
  backgroundColor: 'aqua',
  fontSize: '1.2rem',
  height: '20px',
  padding: '4px 16px 1px 5px',
  margin: '5px 10px 0',
  '& > span': {
    marginLeft: '-14px',
  },
})

function WipMark() {
  return (
    <WipContainer>
      <span>WIP!</span>
    </WipContainer>
  )
}

export default WipMark
