import { Container, Grid} from '@mui/material'
import { CategoryTitle, MenuHeader, MenuItem } from '../Menus.component'
import { menuRoutes } from '@config/router'
import { MenuProps } from '../Menus.type'
import { Footer } from '@components/layout/Footer/Footer'



export const RegularMenuView = ({ listMap }: MenuProps) => {
  const Column = ({ category }: { category: string }) => {
    const list = listMap[category]

    return <Grid container direction="column" py={2} sx={{position: "relative"}}>
      <CategoryTitle category={category} />
      {list.map(item => {
        return <MenuItem key={item.title} title={item.title} price={item.price} description={item.description} />
      })}
    </Grid>
  }


  return <>
    <MenuHeader menuTitle={menuRoutes.regular.title} />
    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <Column category='Appetizers' />
          <Column category='Soup & Salad' />
          <Column category='Fusion Special' />
          <Column category='Bento Box Dinner' />
          <Column category='Noodles' />

        </Grid>
        <Grid item xs={12} md={6} >
          <Column category='Sushi & Sashimi' />
          <Column category='Sushi Pizza' />
          <Column category='Traditional Maki' />
          <Column category='Vegetarian Maki' />
          <Column category='Sushi & Sashimi Course Dinner' />
          <Column category='Kaiseki' />

        </Grid>
      </Grid>
    </Container>
    <Footer/>

  </>

}

