import '../config/global.css'
import { GlobalHooks } from '@components/global/GlobalHooks/GlobalHooks'
import { ThemeProvider } from '@mui/material'
import { sushi101Theme } from '@config/theme'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { CssBaseline } from '@mui/material'
import Head from 'next/head'
import { siteInfo } from '@config/siteInfo'
import { useMemo } from 'react'


function MyApp({ Component, pageProps }: AppProps) {
  const PWAHeader = useMemo(() => <>
    <meta name='application-name' content={siteInfo.title} />
    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
    <meta name='apple-mobile-web-app-title' content={siteInfo.title} />
    <meta name='format-detection' content='telephone=no' />
    <meta name='mobile-web-app-capable' content='yes' />
    <meta name='msapplication-config' content='/icons/browserconfig.xml' />
    <meta name='msapplication-TileColor' content='#ffffff' />
    <meta name='msapplication-tap-highlight' content='no' />
    <meta name='theme-color' content='#ffffff' />

    <link rel='apple-touch-icon' href='/touch-icon-iphone.png' />
    <link rel='apple-touch-icon' sizes='192x192' href='/android-chrome-192x192.png' />
    <link rel='apple-touch-icon' sizes='512x512' href='/android-chrome-512x512.png' />

    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
    <link rel='manifest' href='/manifest.json' />
    <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#ffffff' />
    <link rel='shortcut icon' href='/favicon.ico' />
    {/* Twitter */}
    <meta name='twitter:card' content={siteInfo.title} />
    <meta name='twitter:url' content={siteInfo.domain} />
    <meta name='twitter:title' content={siteInfo.title} />
    <meta name='twitter:description' content={siteInfo.description} />
    <meta name='twitter:image' content='https://sushi101.ca/android-chrome-192x192.png' />
    <meta name='twitter:creator' content='Bigface Inc.' />
    {/* Open Graph Markup */}
    <meta property='og:type' content='website' />
    <meta property='og:title' content={siteInfo.title} />
    <meta property='og:description' content={siteInfo.description} />
    <meta property='og:site_name' content={siteInfo.title} />
    <meta property='og:url' content={siteInfo.domain} />
    <meta property='og:image' content='https://sushi101.ca/touch-icon-iphone.png' />
  </>, [])

  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>{siteInfo.title}</title>
      <meta name="keywords" content={siteInfo.keywords} />
      <meta name="description" content={siteInfo.description} />
      {PWAHeader}
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
