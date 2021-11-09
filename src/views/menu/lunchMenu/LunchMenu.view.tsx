import { Container, Grid } from '@mui/material'
import { CategoryTitle, MenuHeader, MenuItem } from '../Menu.component'
import { menuRoutes } from '@config/router'
import { MenuProps } from '../Menu.type'
import { Footer } from '@components/layout/Footer/Footer'



export const LunchMenuView = ({ listMap }: MenuProps) => {
  const Column = ({ category }: { category: string }) => {
    const list = listMap[category]

    return <Grid container direction="column" pb={2}>
      <CategoryTitle category={category} />
      {list.map(item => {
        return <MenuItem key={item.title} title={item.title} price={item.price} description={item.description} />
      })}
    </Grid>
  }


  return <>
    <MenuHeader menuTitle={menuRoutes.lunch.title} />
    <Container>
      <Grid container spacing={8}>
        <Grid item xs={12} md={6}>
          <Column category='Bento Box Specials' />
          <Column category='Ramen' />
          <Column category='Stir-fry Teriyaki Bowls' />
        </Grid>
        <Grid item xs={12} md={6} >
          <Column category='Sushi and Sashimi Lunch' />

        </Grid>
      </Grid>
    </Container>
    <Footer/>
  </>

}

