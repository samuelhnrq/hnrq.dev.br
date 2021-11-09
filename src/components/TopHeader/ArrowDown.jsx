import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'

function scrollDown() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  })
}

function ArrowDown() {
  const delay = 10
  const animations = {
    hidden: { opacity: [0, 1], color: 'red', transition: { delay } },
    bounce: {
      y: [0, 30, 0],
      transition: {
        repeat: Infinity,
        type: 'spring',
        delay,
        duration: 2,
      },
    },
  }

  return (
    <motion.div
      style={{ opacity: 0, position: 'absolute', bottom: '-10%' }}
      animate={['bounce', 'hidden']}
      variants={animations}
    >
      <FontAwesomeIcon icon={faArrowDown} size="2x" onClick={scrollDown} />
    </motion.div>
  )
}

// @refresh reset

export default ArrowDown
