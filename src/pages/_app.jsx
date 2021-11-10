/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'
import theme from '../lib/mui-theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import {
  dom as faDomUtils,
  config as faConfig,
} from '@fortawesome/fontawesome-svg-core'
faConfig.autoAddCss = false

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${faDomUtils.css()}
        `}
      />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
