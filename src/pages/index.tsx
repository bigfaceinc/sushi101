import { sushi101Theme } from '@config/theme'
import { ThemeProvider } from '@emotion/react'
import { HomeView } from '@views/home/Home.view'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <HomeView />
  )
}

export default Home
