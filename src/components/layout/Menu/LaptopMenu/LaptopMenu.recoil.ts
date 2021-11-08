import { homeRoutes } from "@config/router";
import { nanoid } from "nanoid";
import { atom } from "recoil";
import { MenuItemIntf } from "../Menu.type";

export const activeLaptopMenuItem = atom<MenuItemIntf>({
  key: "activeLaptopMenu"+ nanoid(),
  default: homeRoutes.root
})