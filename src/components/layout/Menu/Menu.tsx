import { AppBar, Button, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { breakPointState } from '@components/global/GlobalHooks/breakPoint/breakPoint.recoil'
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { LaptopMenu } from './LaptopMenu/LaptopMenu'
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { MobileMenu } from './MobileMenu/MobileMenu'
import { useMenuStyle } from './useMenuStyle.hook'

export const Sushi101Menu = () => {
  const { isLaptop, isMobile } = useRecoilValue(breakPointState)

  useMenuStyle()


  if (isMobile) {
    return <MobileMenu/>
  } else {
    return <LaptopMenu />
  }
}