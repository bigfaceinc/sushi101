import React, { Fragment } from "react"

export interface RouteItem {
  path: string,
  title: string,
  description: string
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
    title: "Dine-In Menu",
    description: "Sushi 101 Regular Menu",
  },

  takeOut: {
    path: '/takeout',
    title: "Take-Out Menu",
    description: "Sushi 101 Take-out Menu",
  },

  lunch: {
    path: '/lunch',
    title: "Lunch Special",
    description: "Sushi 101 Lunch Special Menu",
  }
} 
