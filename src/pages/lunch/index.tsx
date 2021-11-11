import { LunchMenuView } from '@views/menus/lunchMenu/LunchMenu.view'
import type { GetStaticProps, NextPage } from 'next'
import menuJson from '@views/menus/lunchMenu/LunchMenu.json'
import { MenuRow } from '@views/menus/Menus.type'



export interface LunchMenuProps {
  listMap: Record<string, MenuRow[]>
}

export const getStaticProps: GetStaticProps<LunchMenuProps> = async (context) => {


  const listMap: Record<string, MenuRow[]> = {}
  menuJson.forEach((item) => {
    if (!listMap[item.category]) {
      listMap[item.category] = []
    }
    listMap[item.category].push(item)
  })


  return {
    props: {
      listMap
    }
  }
}


const LunchMenu: NextPage<LunchMenuProps> = (props) => {


  return (
    <LunchMenuView listMap={props.listMap} />
  )
}

export default LunchMenu
