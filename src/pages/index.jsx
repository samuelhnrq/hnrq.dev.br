import React from 'react'
import Head from 'next/head'
import Logo from '../components/Logo'
import { flexCenterContainer } from '../lib/css-utils'
import MediaButtons from '../components/SocialButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import WipMark from '../components/WipMark'
import { Box, makeStyles, styled, Typography } from '@material-ui/core'

const RootContainer = styled('div')({
  ...flexCenterContainer,
  position: 'relative',
  flexDirection: 'column',
  overflow: 'hidden',
  height: '98vh',
  backgroundColor: 'hsl(270 75% 90% / 1)',
  backgroundImage: "url('coin_spin.gif')",
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  boxShadow: '0 1px 5px hsl(0deg, 0%, 0%)',
  backgroundSize: '10vh',
})

const TiltedContainer = styled('div')({
  maxWidth: '95vw',
  textAlign: 'center',
  transform: 'rotate(5deg)',
  backgroundColor: 'white',
  padding: '45vh min(60px, 10vw)',
})

const UnTiltContent = styled('div')({
  transform: 'rotate(-5deg)',
})

const Titulo = styled('div')({
  width: 'fit-content',
  backgroundColor: 'pink',
  padding: '0',
  margin: '0 0 20px',
  lineHeight: '1',
  height: '35px',
  marginLeft: 'auto',
  direction: 'ltr',
  fontSize: '3rem',
})

const styleSheet = makeStyles({
  headline: {
    ...flexCenterContainer,
    minHeight: '35vh',
    padding: '1px',
    flexWrap: 'wrap',
    backgroundColor: 'whitesmoke',
    textAlign: 'center',
    p: {
      padding: '0 50px',
    },
  },
  hebraic: {
    position: 'relative',
    left: '10px',
    margin: 0,
    fontSize: '3rem',
  },
})

export default function Home() {
  const styles = styleSheet()
  function scrollDown() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <RootContainer>
        <Head>
          <title>HNRQ</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TiltedContainer>
          <UnTiltContent>
            <div>
              <Titulo>
                <h1 className={styles.hebraic}>סמואל</h1>
              </Titulo>
              <Logo />
              <WipMark />
            </div>
            <MediaButtons />
          </UnTiltContent>
        </TiltedContainer>
        <Box position="absolute" bottom={['20px', '45px']}>
          <FontAwesomeIcon icon={faArrowDown} size="2x" onClick={scrollDown} />
        </Box>
      </RootContainer>
      <div className={styles.headline}>
        <Box maxWidth="500px">
          <Typography variant="h4">Hello, I love to code</Typography>
          <Typography variant="subtitle1" gutterBottom>
            <i>A true master is an eternal student</i>
          </Typography>
          <Typography variant="body1">
            Hello, proud <i>gaymer</i> software engineer here. Friendly
            neighboorhood hacker on my free time, open source contribuitor,
            right wing activist and computer hardware enthusiast.
          </Typography>
        </Box>
      </div>
    </>
  )
}
