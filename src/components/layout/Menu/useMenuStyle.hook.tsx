import { menuInterSectingState, menuStyleState } from '@components/layout/Menu/Menu.recoil'
import React, { useEffect, useRef } from 'react'
import { useSetRecoilState } from 'recoil'

export const useMenuStyle = () => {
  const observerRef = useRef<HTMLDivElement>(null)
  const observer = useRef<IntersectionObserver>()
  const setMenuStyle = useSetRecoilState(menuStyleState)
  const setMenuIntersecting = useSetRecoilState(menuInterSectingState)


  const isExit = useRef(false)

  useEffect(() => {
    if (observerRef.current) {
      observer.current = new IntersectionObserver((entries) => {
        // observerRef show up 
        if (entries[0].isIntersecting) {
          setMenuStyle({ background: 'transparent' })
          setMenuIntersecting(false)
        }
        // menu bar is cross over the observerRef, observerRef is not available in the window
        else {

          // still in page
          if (!isExit.current) {
            setMenuStyle({ background: 'white', boxShadow: 3 })
            setMenuIntersecting(true)
          } else {
            // leaving the page,reset style
            setMenuStyle({ background: 'transparent' })
            setMenuIntersecting(false)
          }

        }
      })
      observer.current.observe(observerRef.current)
    }

    // if the user is leaving the page
    return () => {
      isExit.current = true
    }
  }, [setMenuIntersecting, setMenuStyle])


  return {
    observerRef
  }
}