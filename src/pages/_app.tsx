import '../config/global.css'
import { GlobalHooks } from '@components/global/GlobalHooks/GlobalHooks'
import { ThemeProvider } from '@mui/material'
import { sushi101Theme } from '@config/theme'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { CssBaseline } from '@mui/material'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {


  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
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
