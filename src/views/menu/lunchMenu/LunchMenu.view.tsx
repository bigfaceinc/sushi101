import { menuRoutes } from '@config/router'
import { Sushi101Menu } from '@components/layout/Menu/Menu'
import { menuInterSectingState, menuStyleState } from '@components/layout/Menu/Menu.recoil'
import { useMenuStyle } from '@components/layout/Menu/useMenuStyle.hook'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useMemo } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil'
import menuImage from '../img/menu-background.webp'
import lunch1 from './img/lunch-special1.jpg'
import menuJson from './LunchMenu.json'

interface DbRow {
  Menu: string;
  Category: string;
  Item: string;
  Price: number;
  Note: string;
  Modifier1: string;
  Modifier2: string;
}

interface ObjArr {
  bentoBox: DbRow[]
  ramen: DbRow[]
}

let objArr: ObjArr = {
  bentoBox: [],
  ramen: []
}

const arr = menuJson.reduce((accu, curr) => {

  if (curr.Category === "Bento Box Specials") {
    accu.bentoBox.push(curr)
  } else if (curr.Category === "Ramen") {
    accu.ramen.push(curr)
  }

  return accu
}, objArr)


export const LunchMenu = () => {




  return <>
    <MenuHeader />
    <Container>
      {menuJson.map((item) => {
        return <div key={item.Item}>{item.Category}</div>
      })}
    </Container>

  </>
}


export const MenuHeader = () => {

  console.log(menuJson);

  const menuStyle = useRecoilValue(menuStyleState)
  const { observerRef } = useMenuStyle()

  return <div style={{ position: 'relative' }}>
    <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 5, ...menuStyle }}>
      <Sushi101Menu />
    </Box>


    <Box sx={{
      backgroundSize: "cover",
      height: "240px",
      width: "100%",
      // menu image cover
      backgroundImage: `url(${menuImage})`,
      backgroundPosition: "center ",
      backgroundRepeat: "no-repeat"
    }}>
      <Grid container justifyContent="start" alignItems="flex-end" sx={{ height: "100%", pb: 2, textShadow: "1px 1px 3px lightgray" }} >
        <div ref={observerRef}></div>
        <Container>
          <Typography variant='h3' sx={{ color: "primary.main" }}>
            {menuRoutes.lunch.title}
          </Typography>
        </Container>

      </Grid>
    </Box>



  </div>
}