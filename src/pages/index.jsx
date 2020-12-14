import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Logo from '../components/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faReddit,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { device } from '../lib/breakpoints'

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

const TiltedContainer = styled.div`
  background-color: white;
  padding: min(40px, 7vw) min(30px, 7vw);
  max-width: 95vw;
  text-align: center;
  transform: rotate(2deg);
`

const UnTiltContent = styled.div`
  transform: rotate(-2deg);
  @media ${device.laptopL} {
    display: flex;
  }
`

const SocialIcon = styled(FontAwesomeIcon)`
  margin: 0 5px;
  @media ${device.laptopL} {
    margin: 10px auto;
  }
`

const MediaButtons = styled.div`
  border-top: 2px solid #eaeaea;
  margin: 15px 0 0;
  padding: 20px 0 0;
  @media ${device.laptopL} {
    margin-left: 25px;
    padding-left: 25px;
    border-left: 2px solid #eaeaea;
    border-top: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export default function Home() {
  return (
    <div>
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
          <MediaButtons>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/samuelhnrq"
            >
              <SocialIcon icon={faGithub} size="2x" color="black" />
            </a>
            <a href="mailto:samosaara@gmail.com">
              <SocialIcon icon={faEnvelope} size="2x" color="black" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://reddit.com/u/samosaara"
            >
              <SocialIcon icon={faReddit} size="2x" color="black" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/samosaara"
            >
              <SocialIcon icon={faLinkedin} size="2x" color="black" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/samo_saara"
            >
              <SocialIcon icon={faTwitter} size="2x" color="black" />
            </a>
          </MediaButtons>
        </UnTiltContent>
      </TiltedContainer>
    </div>
  )
}
