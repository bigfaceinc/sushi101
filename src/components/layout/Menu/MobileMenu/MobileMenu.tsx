import { Box, Drawer, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Fragment, useState } from 'react'
import { useRecoilValue } from 'recoil'
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import { MenuItemIntf, menuList } from '../Menu.type';
import Link  from 'next/link'
import { menuInterSectingState } from '../Menu.recoil';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Image from 'next/image'

export const MobileMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const menuIsIntersecting = useRecoilValue(menuInterSectingState)

  return <><Toolbar >
    <Grid sx={{ height: 56 }}
      container justifyContent={"space-between"} alignItems={"center"}>
      <Grid item>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
          onClick={() => setOpenDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Grid>

      {menuIsIntersecting &&
        <Grid item py={0.5} sx={{ height: "100%" }}>
          <Image src={"/img/home/logo.png"} width={120} height={50} alt="sushi101-menubar-logo" />
        </Grid>
      }
    </Grid>


  </Toolbar>
    <Drawer
      anchor={"left"}
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <Grid container direction="column" sx={{ width: 200 }}>
        <MobileMenuList />
        {/* <Divider />
        <MobileMenuList text="home" />
        <Divider />
        <MobileMenuList text="home" />
        <Divider /> */}
      </Grid>

    </Drawer>
  </>
}


const MobileMenuList = () => {

  const NormalItem = ({ menuItem }: { menuItem: MenuItemIntf }) => {
    return <Link href={menuItem.path!} passHref>
      <ListItem button>
        <ListItemText primary={menuItem.title} sx={{ textAlign: "center" }} />
      </ListItem>
    </Link>
  }

  const ParentItem = ({ menuItem }: { menuItem: MenuItemIntf }) => {
    const [isActive, setIsActive] = useState(false)


    return <>
      <ListItemButton onClick={() => setIsActive(prev => !prev)}>
        <Grid container justifyContent={"center"} alignItems={"center"} >
          <Typography my={0.5} lineHeight={1.5} display={"inline-block"}>{menuItem.title}</Typography>
          {isActive ? <ExpandLess /> : <ExpandMore />}
        </Grid>
      </ListItemButton>
      {isActive && <Divider />}
      {isActive && menuItem.children!.map((item, index) => {
        const isNotLastItem = index !== menuItem.children!.length - 1

        return <Link href={item.path ?? ""} passHref key={item.title}>
          <ListItem button key={item.title}>
            <ListItemText primary={item.title} sx={{ textAlign: "center" }} />
          </ListItem>
          {isNotLastItem && <Divider />}
        </Link>
      })}
    </>
  }


  const renderItem = (menuItem: MenuItemIntf) => {
    if (!menuItem.children) {
      return <NormalItem menuItem={menuItem} />
    } else {
      return <ParentItem menuItem={menuItem} />
    }

  }


  return <>{
    menuList.map((menuItem, index) => {
      const isNotLastItem = index !== (menuList.length - 1)

      return <Fragment key={menuItem.title}>
        {renderItem(menuItem)}
        {isNotLastItem && <Divider />}
      </Fragment>
    })
  }</>
}