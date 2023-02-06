import {
  Box,
  Drawer,
  Grid,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import { useRecoilValue } from "recoil";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import { MenuItemIntf, menuList } from "../Menu.type";
import Link from "next/link";
import { menuInterSectingState } from "../Menu.recoil";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { LogoWhite } from "../LaptopMenu/LaptopMenu.component";

export const MobileMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const menuIsIntersecting = useRecoilValue(menuInterSectingState);

  return (
    <>
      <Toolbar>
        <Grid
          sx={{ height: 56 }}
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1, color: menuIsIntersecting ? "black" : "white" }}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          {menuIsIntersecting && (
            <Grid
              item
              container
              alignItems={"center"}
              sx={{ height: "90%", width: 80, position: "relative" }}
            >
              <LogoWhite />
            </Grid>
          )}
        </Grid>
      </Toolbar>

      <Drawer
        anchor={"left"}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Grid container direction="column" sx={{ width: 150 }}>
          <MobileMenuList />
        </Grid>
      </Drawer>
    </>
  );
};

const MobileMenuList = () => {
  const NormalItem = ({ menuItem }: { menuItem: MenuItemIntf }) => {
    return (
      <Link href={menuItem.path!} passHref>
        <ListItemButton>
          <ListItemText
            primary={menuItem.title}
            // sx={{ textAlign: "center" }}
          />
        </ListItemButton>
      </Link>
    );
  };

  const ParentItem = ({ menuItem }: { menuItem: MenuItemIntf }) => {
    const [isActive, setIsActive] = useState(true);

    return (
      <>
        <ListItemButton onClick={() => setIsActive((prev) => !prev)}>
          <Grid container alignItems={"center"}>
            <Typography my={0.5} lineHeight={1.5} display={"inline-block"}>
              {menuItem.title}
            </Typography>
            {isActive ? <ExpandLess /> : <ExpandMore />}
          </Grid>
        </ListItemButton>
        {isActive && <Divider />}
        {isActive &&
          menuItem.children!.map((item, index) => {
            const isNotLastItem = index !== menuItem.children!.length - 1;

            return (
              <Link key={item.title} href={item.path ?? ""} passHref>
                <ListItemButton sx={{ backgroundColor: "grey.100" }}>
                  <ListItemText
                    primary={item.title}
                    // sx={{ textAlign: "center" }}
                  />
                </ListItemButton>
                {isNotLastItem && <Divider />}
              </Link>
            );
          })}
      </>
    );
  };

  const renderItem = (menuItem: MenuItemIntf) => {
    if (!menuItem.children) {
      return <NormalItem menuItem={menuItem} />;
    } else {
      return <ParentItem menuItem={menuItem} />;
    }
  };

  return (
    <>
      {menuList.map((menuItem, index) => {
        const isNotLastItem = index !== menuList.length - 1;

        return (
          <Fragment key={menuItem.title}>
            {renderItem(menuItem)}
            {isNotLastItem && <Divider />}
          </Fragment>
        );
      })}
    </>
  );
};
