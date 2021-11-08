import { LunchMenu } from "@views/menu/lunchMenu/LunchMenu.view"
import React, { Fragment } from "react"

export interface RouteItem {
  path: string,
  title: string,
  description: string
  component?: React.ReactElement
}


export const homeRoutes = {
  root: {
    path: '/',
    title: "Home",
    description: "Sushi 101",
  },

  about: {
    path: "/#about",
    title: "About",
    description: "About Sushi 101",
  },

  contact: {
    path: "/#contact",
    title: "Contact",
    description: "Contact Sushi 101",
  }
}

export const menuRoutes = {
  regular: {
    path: '/menu',
    title: "Regular Menu",
    description: "Sushi 101 Regular Menu",
    component: <>Menu</>
  },

  takeOut: {
    path: '/takeout',
    title: "Takeout Menu",
    description: "Sushi 101 Take-out Menu",
    component: <>takeout menu</>
  },

  lunch: {
    path: '/lunch',
    title: "Lunch Special",
    description: "Sushi 101 Lunch Special Menu",
    component: <LunchMenu/>
  }
} 
