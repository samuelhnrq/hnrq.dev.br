import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { flexCenterContainer } from '../lib/css-utils'

const styleSheet = makeStyles({
  aboutLine: {
    ...flexCenterContainer,
    minHeight: '40vh',
    padding: '1px',
    flexWrap: 'wrap',
    backgroundColor: 'whitesmoke',
  },
})

function AboutMe() {
  const styles = styleSheet()
  return (
    <div className={styles.aboutLine}>
      <Box maxWidth="500px">
        <Typography variant="h4" align="right">
          Hello, I love to code
        </Typography>
        <Typography variant="subtitle1" align="right" gutterBottom>
          <i>A true master is an eternal student</i>
        </Typography>
        <Typography variant="body1" align="justify">
          Proud <i>gaymer</i> software engineer here. Friendly neighboorhood
          hacker on my spare time, open source contribuitor, right wing activist
          and computer hardware enthusiast.
        </Typography>
      </Box>
    </div>
  )
}

export default AboutMe
