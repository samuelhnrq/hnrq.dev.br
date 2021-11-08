/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'
import theme from '../lib/mui-theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { dom as faDomUtils } from '@fortawesome/fontawesome-svg-core'

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${faDomUtils.css()}
        `}
      />
      {/* CssBaseline kickstart an elegant, consistent,
       * and simple baseline to build upon.*/}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
