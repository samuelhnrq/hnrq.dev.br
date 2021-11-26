import { css } from '@emotion/react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { flexCenterContainer } from '../lib/css-utils'
import MainCard from '../components/TopHeader/MainCard'
import ArrowDown from '../components/TopHeader/ArrowDown'
import TiltedContainer from '../components/TiltedContainer'
import AshNazg from '../components/AshNazg'

const AboutMe = dynamic(() => import('../components/AboutMe'))

const rootStyle = css`
  ${flexCenterContainer};
  position: relative;
  flex-direction: column;
  overflow: hidden;
  min-height: 96vh;
  background: linear-gradient(180deg, #d899ff 0%, hsl(190, 65%, 63%) 100%);
  background-attachment: fixed;
  box-shadow: 0 1px 5px black;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>HNRQ</title>
      </Head>
      <section css={rootStyle} aria-label="Bloco de titulo">
        <AshNazg />
        <TiltedContainer
          css={css`
            width: min-content;
            background-color: whitesmoke;
          `}
        >
          <MainCard />
        </TiltedContainer>
        <ArrowDown />
      </section>
      <section aria-label="Seção sobre mim">
        <AboutMe />
      </section>
    </>
  )
}
