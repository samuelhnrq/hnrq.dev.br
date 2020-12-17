import React from 'react'
import { css, Global, ThemeProvider } from '@emotion/react'
import { device } from '../lib/css-utils'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html {
            box-sizing: border-box;
            font-size: 14px;
            @media ${device.laptop} {
              font-size: 16px;
            }
            font-family: 'Frank Ruhl Libre', serif;
          }
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            min-height: 100vh;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
        `}
      />
      <ThemeProvider theme={{ color: 'black' }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
