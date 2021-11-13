import {menuRoutes} from "@config/router";
// import regularBackground from './img/dine-in-menu-background.jpg'
import regularBackground from './img/dine-in-menu-background-cropped.jpg'
// import lunchBackground from './img/lunch-special-menu-background.jpg'
import lunchBackground from './img/lunch-special-menu-background-cropped.jpg'
// import takeoutBackground from './img/take-out-menu-background.jpg'
import takeoutBackground from './img/take-out-menu-background-cropped.jpg'

export interface MenuProps {
  listMap: Record<string, MenuRow[]>
}

// json menu row
export interface MenuRow {
  menu: string;
  category: string;
  title: string;
  price: number;
  description: string;
}



// menu category in each page
export interface MenuCategoryItem {
  title: string,
  background: any
}

interface AllMenu {
  regularMenu: MenuCategoryItem,
  lunchMenu: MenuCategoryItem,
  takeoutMenu: MenuCategoryItem,
}

export const allMenu: AllMenu = {
  regularMenu: {
    title:menuRoutes.regular.title,
    background: regularBackground
  },
  lunchMenu: {
    title:menuRoutes.lunch.title,
    background: lunchBackground
  },
  takeoutMenu: {
    title:menuRoutes.takeOut.title,
    background: takeoutBackground
  }
}

