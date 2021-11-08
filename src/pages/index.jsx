/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Head from 'next/head'

import { flexCenterContainer } from '../lib/css-utils'
import MainCard from '../components/TopHeader/MainCard'
import AboutMe from '../components/AboutMe'

const rootStyle = css`
  ${flexCenterContainer};
  position: relative;
  flex-direction: column;
  overflow: hidden;
  height: 96vh;
  background-color: hsl(270 75% 90% / 1);
  background-image: 'url(coin_spin.gif)';
  background-position: center;
  background-attachment: fixed;
  box-shadow: 0 1px 5px hsl(0deg 0% 0%);
  background-size: 10vh;
`

export default function Home() {
  return (
    <>
      <div css={rootStyle}>
        <Head>
          <title>HNRQ</title>
        </Head>
        <MainCard />
      </div>
      <AboutMe />
    </>
  )
}
