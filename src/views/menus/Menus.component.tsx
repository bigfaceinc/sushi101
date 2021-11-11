import { Sushi101Menu } from '@components/layout/Menu/Menu'
import { menuInterSectingState, menuStyleState } from '@components/layout/Menu/Menu.recoil'
import { useMenuStyle } from '@components/layout/Menu/useMenuStyle.hook'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useRecoilValue } from 'recoil'
import { LunchMenuProps } from 'pages/lunch'
import { sushi101Theme } from '@config/theme'
import { LogoWhite } from '@components/layout/Menu/LaptopMenu/LaptopMenu.component'


export const CategoryTitle = ({ category }: { category: string }) => {

  return <Grid item xs={12} py={0.5} sx={{
    borderBottom: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: sushi101Theme.palette.primary.main
  }}>
    <Typography color={"primary"} variant="h5" >
      {category}
    </Typography>
  </Grid>
}

export const MenuItem = ({ description, price, title }: { title: string, price: number, description: string }) => {

  return <Grid item container pt={1} direction={"column"}>
    <Grid item container justifyContent={"space-between"}
      sx={{
        borderBottom: "1px",
        borderBottomStyle: "dotted",
        borderBottomColor: sushi101Theme.palette.primary.light
      }} >
      <Grid item >
        <Typography variant='h6' >{title}</Typography>
      </Grid>
      <Grid item >
        <Typography variant='h6' >{price.toFixed(2)}</Typography>
      </Grid>
    </Grid>
    <Grid item>
      <Typography variant='caption' >
        {description}
      </Typography>
    </Grid>
  </Grid>
}



export const MenuHeader = ({ menuTitle }: { menuTitle: string }) => {

  // console.log(menuJson);

  const menuStyle = useRecoilValue(menuStyleState)
  const { observerRef } = useMenuStyle()
  const menuIsIntersecting = useRecoilValue(menuInterSectingState)


  return <div style={{ position: 'relative' }}>
    <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 5, ...menuStyle }}>
      <Sushi101Menu />
    </Box>
    <div ref={observerRef}></div>


    <Box sx={{
      backgroundSize: "cover",
      height: "30vh",
      width: "100%",
      // menu image cover
      backgroundImage: `url('/img/menu/menu-background.jpg')`,
      backgroundPosition: "0% 23%",
      backgroundRepeat: "no"
    }}>
      <Grid container justifyContent="start" alignItems="flex-end" sx={{
        height: "100%",
        pb: 1,
        textShadow: "1px 1px 3px rgba(0,0,0, 0.3)"
        // textShadow:
        //   "-1px 0 20px rgba(255,255,255, 0.2), 0 1px 20px rgba(255,255,255, 0.2), 1px 0 20px rgba(255,255,255, 0.2), 0 -1px 20px rgba(255,255,255, 0.2)"
      }} >
        <Container>
          <Grid container justifyContent={"space-between"} alignItems="center" sx={{height: 56}}>
            <Grid item>
              <Typography variant='h4' sx={{ color: "primary.main" }}>
                {menuTitle}
              </Typography>
            </Grid>
            {!menuIsIntersecting && <Grid item sx={{ width: 80}} container alignItems="center">
              <LogoWhite/>
            </Grid>}
          </Grid>
        </Container>
      </Grid>
    </Box>
  </div>
}