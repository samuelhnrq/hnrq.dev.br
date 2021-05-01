import React from 'react'
import { css, Global, ThemeProvider } from '@emotion/react'
import { dom, config as faConfig } from '@fortawesome/fontawesome-svg-core'
import { device } from '../lib/css-utils'

faConfig.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{ color: 'black' }}>
      <Global
        styles={css`
          ${dom.css()}
          html {
            box-sizing: border-box;
            font-size: 14px;
            @media ${device.laptop} {
              font-size: 18px;
            }
            font-family: 'Frank Ruhl Libre', serif;
          }
          h1 {
            font-size: 2.3rem;
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
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
