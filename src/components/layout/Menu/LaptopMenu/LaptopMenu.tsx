

import { Box, Button, Container, Grid } from '@mui/material'
import { SxProps, Theme } from '@mui/system'
import React, { Fragment, useMemo } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { menuInterSectingState, menuStyleState } from '../Menu.recoil'
import { menuList } from '../Menu.type'
import { LaptopMenuButton, MenuBorder } from './LaptopMenu.component'
import { activeLaptopMenuItem } from './LaptopMenu.recoil'
import Image from 'next/image'

export const LaptopMenu = () => {
  const menuIsIntersecting = useRecoilValue(menuInterSectingState)

  return <Container>
    <Grid container alignItems={"center"} justifyContent={"space-between"} direction={"row"}
      sx={{ height: 72 }}
    >

      <Grid
        spacing={2} direction="row" alignItems={"center"}
        item container sx={{ width: "auto" }}>
        <LaptopMenuList />
      </Grid>

      {menuIsIntersecting &&
        <Grid item sx={{ height: "100%" }} p={1}>
          <Image src={"/img/home/logo.png"} height={30} width={50} alt="sushi101-menubar-logo"  />
        </Grid>
      }

    </Grid>

  </Container>
}

const LaptopMenuList = () => {
  const [activeItem, setActiveItem] = useRecoilState(activeLaptopMenuItem)

  return <>
    {menuList.map((menuItem, index) => {
      const isActive = menuItem.title === activeItem.title

      return <Fragment key={menuItem.title}>
        <Grid item >
          <LaptopMenuButton
            active={isActive}
            title={menuItem.title.toUpperCase()} to={menuItem.path}
            onClick={() => setActiveItem(menuItem)}
            childrenItems={menuItem.children}
          />
        </Grid>
        {/* last item doesnt have right border */}
        {index !== (menuList.length - 1) &&
          <Grid item >
            <MenuBorder />
          </Grid>
        }
      </Fragment>
    })}
  </>

}
