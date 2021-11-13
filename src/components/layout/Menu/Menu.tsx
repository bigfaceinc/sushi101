import {breakPointState} from '@components/global/GlobalHooks/breakPoint/breakPoint.recoil'
import React, {useState} from 'react'
import {useRecoilValue} from 'recoil'
import {LaptopMenu} from './LaptopMenu/LaptopMenu'
import {MobileMenu} from './MobileMenu/MobileMenu'
import {useMenuStyle} from './useMenuStyle.hook'

export const Sushi101Menu = () => {
  const {isLaptop} = useRecoilValue(breakPointState)

  useMenuStyle()


  if (isLaptop) {
    return <LaptopMenu/>
  } else {
    return <MobileMenu/>
  }
}