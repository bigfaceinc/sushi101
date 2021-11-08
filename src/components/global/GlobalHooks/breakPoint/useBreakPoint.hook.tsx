import React, {useEffect, useState} from 'react';
import {debounce} from "lodash";
import {useRecoilState, useSetRecoilState} from "recoil";
import {breakPointState} from "./breakPoint.recoil";

export enum BreakPoint {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = 'xl'
}

const breakPointMap: Record<BreakPoint, number> = {
  [BreakPoint.XS]: 0,
  [BreakPoint.SM]: 640,
  [BreakPoint.MD]: 768,
  [BreakPoint.LG]: 1024,
  [BreakPoint.XL]: 1280,
}


export const useBreakpointHook = () => {

  const setBreakpoint = useSetRecoilState(breakPointState);

  useEffect(() => {
    const handleResize = debounce(() => {
      const width = window.innerWidth

      setBreakpoint({
        isMobile: width <= breakPointMap[BreakPoint.SM],
        isTablet: width > breakPointMap[BreakPoint.SM] && width <= breakPointMap[BreakPoint.LG],
        isLaptop: width > breakPointMap[BreakPoint.LG],
      })


    }, 50)


    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);

  }, [setBreakpoint]);


};
