import React from 'react'
import Head from 'next/head'
import { flexCenterContainer } from '../lib/css-utils'
import { styled } from '@material-ui/core'
import MainCard from '../components/TopHeader/MainCard'
import AboutMe from '../components/AboutMe'

const RootContainer = styled('div')({
  ...flexCenterContainer,
  position: 'relative',
  flexDirection: 'column',
  overflow: 'hidden',
  height: '96vh',
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
  padding: '45vh 60px',
})

const UnTiltContent = styled(MainCard)({
  transform: 'rotate(-5deg)',
})

export default function Home() {
  return (
    <>
      <RootContainer>
        <Head>
          <title>HNRQ</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TiltedContainer>
          <UnTiltContent />
        </TiltedContainer>
      </RootContainer>
      <AboutMe />
    </>
  )
}
