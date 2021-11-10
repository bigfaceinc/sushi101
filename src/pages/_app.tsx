import '../config/global.css'
import { GlobalHooks } from '@components/global/GlobalHooks/GlobalHooks'
import { ThemeProvider } from '@mui/material'
import { sushi101Theme } from '@config/theme'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { CssBaseline } from '@mui/material'
import Head from 'next/head'
import { siteInfo } from '@config/siteInfo'


function MyApp({ Component, pageProps }: AppProps) {


  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>{siteInfo.title}</title>
      <meta name="description" content={siteInfo.description} />
      <meta name="keywords" content={siteInfo.keywords} />
      <meta property="og:title" content={siteInfo.title} key="title" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="icon" href="/favicon.ico"></link>
    </Head>
    <ThemeProvider theme={sushi101Theme} >
      <RecoilRoot>
        <CssBaseline />
        <Component {...pageProps} />
        <GlobalHooks />
      </RecoilRoot>
    </ThemeProvider>

  </>


}

export default MyApp
