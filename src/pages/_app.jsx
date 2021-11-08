import React from 'react'
import { config as faConfig } from '@fortawesome/fontawesome-svg-core'
import theme from '../lib/mui-theme'
import { ThemeProvider, StylesProvider } from '@mui/styles'
import { CssBaseline } from '@mui/material'

import '@fortawesome/fontawesome-svg-core/styles.css'

faConfig.autoAddCss = false

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent,
         * and simple baseline to build upon.*/}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StylesProvider>
  )
}
