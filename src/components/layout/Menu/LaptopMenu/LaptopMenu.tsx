import { Container, Grid } from "@mui/material";
import React, { Fragment } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { menuInterSectingState } from "../Menu.recoil";
import { menuList } from "../Menu.type";
import {
  LaptopMenuButton,
  LogoWhite,
  MenuBorder,
} from "./LaptopMenu.component";
import { activeLaptopMenuItem } from "./LaptopMenu.recoil";

export const LaptopMenu = () => {
  const menuIsIntersecting = useRecoilValue(menuInterSectingState);

  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={"row"}
        sx={{ height: 64 }}
      >
        <Grid
          spacing={2}
          direction="row"
          alignItems={"center"}
          item
          container
          sx={{ width: "auto" }}
        >
          <LaptopMenuList />
        </Grid>

        {menuIsIntersecting && (
          <Grid item sx={{ height: "85%", width: 100, position: "relative" }}>
            <LogoWhite />
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

const LaptopMenuList = () => {
  const [activeItem, setActiveItem] = useRecoilState(activeLaptopMenuItem);

  return (
    <>
      {menuList.map((menuItem, index) => {
        const isActive = menuItem.title === activeItem.title;

        return (
          <Fragment key={menuItem.title}>
            <Grid item>
              <LaptopMenuButton
                active={isActive}
                title={menuItem.title.toUpperCase()}
                to={menuItem.path}
                onClick={() => setActiveItem(menuItem)}
                childrenItems={menuItem.children}
              />
            </Grid>
            {/* last item doesnt have right border */}
            {index !== menuList.length - 1 && (
              <Grid item>
                <MenuBorder />
              </Grid>
            )}
          </Fragment>
        );
      })}
    </>
  );
};
