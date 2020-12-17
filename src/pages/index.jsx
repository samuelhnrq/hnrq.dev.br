import React from 'react'
import Head from 'next/head'
import Logo from '../components/Logo'
import styled from '@emotion/styled'
import { device, flexCenterContainer } from '../lib/css-utils'
import MediaButtons from '../components/MediaButtons'

const RootContainer = styled.div`
  ${flexCenterContainer}
  overflow: hidden;
  height: 100vh;
  background-color: hsl(270 75% 90% / 1);
  background-image: url('coin_spin.gif');
  background-position: center;
  background-size: 100px;
`

const TiltedContainer = styled.div`
  max-width: 95vw;
  text-align: center;
  transform: rotate(5deg);
  background-color: white;
  padding: 45vh min(60px, 10vw);
`

const UnTiltContent = styled.div`
  transform: rotate(-5deg);
  @media ${device.laptopL} {
    display: flex;
  }
`

const Titulo = styled.h1`
  width: fit-content;
  background-color: pink;
  padding: 3px 10px;
  margin: 0 10px 20px;
  margin-left: auto;
  direction: ltr;
  font-size: 1.8rem;
`

const WipMark = styled.h5`
  font-family: 'Comic Sans MS', 'Roboto', sans-serif;
  width: fit-content;
  background-color: aqua;
  font-size: 1.2rem;
  padding 2px 4px;
  margin: 5px 10px 0;
`

export default function Home() {
  return (
    <RootContainer>
      <Head>
        <title>HNRQ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TiltedContainer>
        <UnTiltContent>
          <div>
            <Titulo>סמואל</Titulo>
            <Logo />
            <WipMark>WIP!</WipMark>
          </div>
          <MediaButtons />
        </UnTiltContent>
      </TiltedContainer>
    </RootContainer>
  )
}
