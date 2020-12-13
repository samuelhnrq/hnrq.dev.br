import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { device } from '../lib/breakpoints'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 14px;
    @media ${device.laptop} {
      font-size: 16px;
    }
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    background-color: hsl(270 75% 90% / 1);
    align-items: center;
    background-image: url('coin_spin.gif');
    background-position: center;
    background-size: 7vmax;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
