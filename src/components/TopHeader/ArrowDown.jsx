import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@material-ui/core'
import React from 'react'

function scrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}

function ArrowDown() {
  return (
    <Box position="absolute" bottom="20px">
      <FontAwesomeIcon icon={faArrowDown} size="2x" onClick={scrollDown} />
    </Box>
  )
}

export default ArrowDown
