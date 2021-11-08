import { homeRoutes, menuRoutes, RouteItem, } from "@config/router";

export interface MenuItemIntf extends Omit<RouteItem, "path" | "description"> {
  path?: string,
  description?: string
  children?: MenuItemIntf[]
}


export const menuList: MenuItemIntf[] = [
  {
    title: homeRoutes.root.title,
    path: homeRoutes.root.path
  },
  {
    title: homeRoutes.about.title,
    path: homeRoutes.about.path
  }
  ,
  {
    title: "Menu",
    children: [
      menuRoutes.regular,
      menuRoutes.takeOut,
      menuRoutes.lunch,
    ]
  },
  homeRoutes.contact,
]