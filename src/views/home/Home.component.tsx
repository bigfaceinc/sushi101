import { Box, SxProps, Theme } from "@mui/system";
import { Button, Container, Grid } from '@mui/material'
import { useMenuStyle } from '../../components/layout/Menu/useMenuStyle.hook'
import Image from 'next/image'
import { Logo } from "@components/layout/Menu/LaptopMenu/LaptopMenu.component";

export const backgroundCss: SxProps<Theme> = {
  backgroundSize: "cover",
  height: "100vh",
  width: "100%",
  backgroundImage: `url(${'/img/home/landing-image.jpg'})`,
  backgroundAttachment: "fixed",
  backgroundPosition: "center ",
  backgroundRepeat: "no-repeat"
}


export const HeroText = () => {

  const { observerRef } = useMenuStyle()

  return <Container sx={{ height: '100%', width: "100%" }} >
    <Grid container alignItems="center" justifyContent={"start"} sx={{ height: '100%', width: "100%" }}>
      <Grid item container direction="column" sx={{ maxWidth: 280 }} spacing={1}>
        <Grid item >
          <div ref={observerRef} style={{ position: "relative", bottom: 72 }}></div>
          <Box sx={{ height: 152, position: "relative" }}>
            <Logo/>
          </Box>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs>
            <Button fullWidth variant='contained'>View Menu</Button>
          </Grid>
          <Grid item xs>
            <Button fullWidth variant='outlined' sx={{ background: "rgba(255,255,255, 0.45)" }} >Call Us</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
}