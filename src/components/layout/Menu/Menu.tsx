import { breakPointState } from '@components/global/GlobalHooks/breakPoint/breakPoint.recoil'
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { LaptopMenu } from './LaptopMenu/LaptopMenu'
import { MobileMenu } from './MobileMenu/MobileMenu'
import { useMenuStyle } from './useMenuStyle.hook'
import { Banner } from '@components/layout/Banner/Banner'

export const Sushi101Menu = () => {
  const { isLaptop } = useRecoilValue(breakPointState)

  useMenuStyle()


  if (isLaptop) {
    return <>
      <Banner />
      <LaptopMenu />
    </>
  } else {
    return <>
      <Banner />
      <MobileMenu />
    </>


  }
}