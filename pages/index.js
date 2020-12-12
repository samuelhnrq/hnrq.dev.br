import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const Titulo = styled.h1`
  font-family: 'Georgia', serif;
  background-color: pink;
  padding: 5px 15px;
  margin: 0 10px;
  font-size: 4rem;
`

const WipMark = styled.h5`
  font-family: 'Comic Sans MS', 'Roboto', sans-serif;
  width: fit-content;
  background-color: aqua;
  font-size: 1.5rem;
  padding: 5px 15px;
  margin: 0 20px;
  margin-left: auto;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Titulo>SAMUEL HNRQ!</Titulo>
        <WipMark>Work in progress!</WipMark>
      </div>
    </div>
  )
}
