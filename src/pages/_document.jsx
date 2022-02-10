import Document, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/mui-theme'
import { config as faConfig } from '@fortawesome/fontawesome-svg-core'
faConfig.autoAddCss = false

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="description" content="My own personal landing page" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
