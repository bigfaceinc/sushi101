import { HomeView } from '@views/home/Home.view'
import type { GetStaticProps, NextPage } from 'next'
import menuJson from '@views/menu/takeoutMenu/TakeoutMenu.json'
import { MenuRow } from '@views/menu/Menu.type'
import { TakeoutMenuView } from '@views/menu/takeoutMenu/TakeoutMenu.view'


interface MenuProps {
  listMap: Record<string, MenuRow[]>
}

export const getStaticProps: GetStaticProps<MenuProps> = async (context) => {


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

const Menu: NextPage<MenuProps> = (props) => {
  return (
    <TakeoutMenuView  listMap={props.listMap}/>
  )
}

export default Menu
