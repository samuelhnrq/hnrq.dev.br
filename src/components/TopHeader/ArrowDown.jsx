import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box } from '@material-ui/core'
import { motion } from 'framer-motion'
import React from 'react'

function scrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}

const MotionBox = motion(Box)

function ArrowDown() {
  const delay = 5
  const animations = {
    hidden: { opacity: [0, 1], transition: { delay } },
    bounce: {
      y: [0, 15, 0],
      transition: {
        repeat: 20,
        delay,
        duration: 2,
        mass: 0.5,
        bounce: 0.95,
      },
    },
  }

  return (
    <MotionBox
      position="absolute"
      bottom="20px"
      animate={['bounce', 'hidden']}
      variants={animations}
    >
      <FontAwesomeIcon icon={faArrowDown} size="2x" onClick={scrollDown} />
    </MotionBox>
  )
}

export default ArrowDown
