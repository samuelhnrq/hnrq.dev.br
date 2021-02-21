import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Logo from '../components/Logo'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { device, flexCenterContainer } from '../lib/css-utils'
import MediaButtons from '../components/SocialButtons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const bounce = keyframes`
  20%, 50%, 80% {
    transform: translate3d(0,0,0);
  }

  40% {
    transform: translate3d(0, -15px, 0);
  }

  70% {
    transform: translate3d(0, -7px, 0);
  }

  90% {
    transform: translate3d(0, -2px, 0);
  }
`

const RootContainer = styled.div`
  ${flexCenterContainer}
  position: relative;
  flex-direction: column;
  overflow: hidden;
  height: 98vh;
  background-color: hsl(270 75% 90% / 1);
  background-image: url('coin_spin.gif');
  background-position: center;
  background-attachment: fixed;
  box-shadow: 0 1px 5px hsl(0deg, 0%, 0%);
  background-size: 10vh;
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
  @media ${device.laptop} {
    display: flex;
  }
`

const Titulo = styled.div`
  width: fit-content;
  background-color: pink;
  padding: 0;
  margin: 0 0 20px;
  line-height: 1;
  height: 35px;
  margin-left: auto;
  direction: ltr;
  font-size: 3rem;
`

const WipMark = styled.h5`
  font-family: 'Comic Sans MS', 'Times New Roman', serif;
  width: fit-content;
  background-color: aqua;
  font-size: 1.2rem;
  height: 20px;
  padding: 4px 16px 1px 5px;
  margin: 5px 10px 0;
`

const headLineStyle = css`
  ${flexCenterContainer}
  min-height: 35vh;
  padding: 1px;
  flex-wrap: wrap;
  background-color: whitesmoke;
  text-align: center;
  p {
    padding: 0 50px;
  }
`

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    window.addEventListener('load', () => {
      setLoaded(document.readyState === 'complete')
    })
  }, [])
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
                <h1
                  css={css`
                    position: relative;
                    left: 0.8rem;
                    margin: 0;
                    font-size: 3rem;
                  `}
                >
                  סמואל
                </h1>
              </Titulo>
              <Logo />
              <WipMark>WIP!</WipMark>
            </div>
            <MediaButtons />
          </UnTiltContent>
        </TiltedContainer>
        <FontAwesomeIcon
          icon={faArrowDown}
          size="2x"
          onClick={scrollDown}
          css={css`
            @media ${device.laptop} {
              bottom: 20px;
            }
            visibility: ${loaded ? 'visible' : 'hidden'};
            animation: ${bounce} 1.5s ease infinite;
            position: absolute;
            bottom: 45px;
          `}
        />
      </RootContainer>
      <div css={headLineStyle}>
        <div
          css={css`
            max-width: 60vw;
          `}
        >
          <h1>Hello, I love to code</h1>
          <div>
            <p>
              Hello, proud <i>gaymer</i> software engineer here. Friendly
              neighboorhood hacker on my free time, open source contribuitor,
              right wing activist and computer hardware enthusiast.
            </p>
            <p>
              <i>A true master is an eternal student</i>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
