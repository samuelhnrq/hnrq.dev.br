import { Global, css } from '@emotion/react'
import theme from '../lib/mui-theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import {
  dom as faDomUtils,
  config as faConfig,
} from '@fortawesome/fontawesome-svg-core'
import { QueryClient, QueryClientProvider } from 'react-query'
faConfig.autoAddCss = false

const queryClient = new QueryClient()
const faCss = css`
  ${faDomUtils.css()};
`

export default function MyApp(props) {
  const { Component, pageProps } = props

  return (
    <ThemeProvider theme={theme}>
      <Global styles={faCss} />
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
