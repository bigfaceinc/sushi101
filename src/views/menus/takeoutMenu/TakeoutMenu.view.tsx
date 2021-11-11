import { Container, Grid } from '@mui/material'
import { CategoryTitle, MenuHeader, MenuItem } from '../Menus.component'
import { menuRoutes } from '@config/router'
import { MenuProps } from '../Menus.type'
import { Footer } from '@components/layout/Footer/Footer'

export const TakeoutMenuView = ({ listMap }: MenuProps) => {

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
    <MenuHeader menuTitle={menuRoutes.takeOut.title} />
    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <Column category='Appetizers' />
          <Column category='Noodles' />
          <Column category='Togo Bento Box' />
          <Column category='Party Trays' />
          <Column category='Soup & Salad' />
          <Column category='Sushi Pizza' />
          <Column category='Sushi & Sashimi Course Dinner' />
          <Column category='Stir-fry Teriyaki Bowls' />

        </Grid>
        <Grid item xs={12} md={6} >
        <Column category='Traditional Maki' />
        <Column category='Vegetarian Maki' />
        <Column category='Sushi & Sashimi' />
        <Column category='Fusion Special' />
        

        </Grid>
      </Grid>
    </Container>
    <Footer/>

  </>

}

