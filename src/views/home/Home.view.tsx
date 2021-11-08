import { Box, Container, Grid, Typography } from '@mui/material'
import { backgroundCss, HeroText } from './Home.component'
import { OurStory } from './OurStory/OutStory.section'
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil'
import { menuInterSectingState, menuStyleState } from '@components/layout/Menu/Menu.recoil'
import { Sushi101Menu } from '@components/layout/Menu/Menu'
import { Footer } from '@components/layout/Footer/Footer'
import { useEffect } from 'react'

export function HomeView() {
  const [menuStyle, setMenuStyle] = useRecoilState(menuStyleState)

  return (<>
    <div style={{ position: "relative" }}>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 5, ...menuStyle }}>
        <Sushi101Menu />
      </Box>
      <Box sx={backgroundCss} >
        <HeroText />
      </Box>
    </div>

    <Container sx={{ position: 'relative', top: -40 }} >
      <OurStory  />
    </Container>


    <Footer/>

  </>
  )
}

