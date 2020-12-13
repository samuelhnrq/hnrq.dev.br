import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Logo from '../components/Logo'

const Titulo = styled.h1`
  font-family: 'Georgia', serif;
  width: fit-content;
  background-color: pink;
  padding: 5px 15px;
  margin: 5px 10px;
  font-size: 1.8rem;
`

const WipMark = styled.h5`
  font-family: 'Comic Sans MS', 'Roboto', sans-serif;
  width: fit-content;
  background-color: aqua;
  font-size: 1.2rem;
  margin: 5px 20px;
  margin-left: auto;
`

const TiltedContainer = styled.div`
  background-color: white;
  padding: min(75px, 10vw) min(30px, 3vw);
  max-width: 95vw;
  text-align: center;
  transform: rotate(1.5deg);
`

const UnTiltContent = styled.div`
  display: flex;
  flex-direction: column;
  transform: rotate(-1.5deg);
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TiltedContainer>
        <UnTiltContent>
          <Titulo>סמואל</Titulo>
          <Logo />
          <WipMark>WIP!</WipMark>
        </UnTiltContent>
      </TiltedContainer>
    </div>
  )
}
