import { Box, SxProps, Theme } from "@mui/system";
import { Button, Container, Grid } from '@mui/material'
import { useMenuStyle } from '../../components/layout/Menu/useMenuStyle.hook'
import { Logo } from "@components/layout/Menu/LaptopMenu/LaptopMenu.component";
import Link from 'next/link'
import { menuRoutes } from "@config/router";
import { siteInfo } from "@config/siteInfo";

export const backgroundCss: SxProps<Theme> = {
  backgroundSize: "cover",
  height: "60vh",
  width: "100%",
  backgroundImage: `url('./img/home/landing-image.jpg')`,
  // backgroundAttachment: "fixed",
  backgroundPosition: "center center ",
  backgroundRepeat: "no-repeat"
}


export const HeroText = () => {

  const { observerRef } = useMenuStyle()

  return <Container sx={{ height: '100%', width: "100%" }} >
    <Grid container alignItems="center" justifyContent={"start"} sx={{ height: '100%', width: "100%" }}>
      <Grid item container direction="column" sx={{ maxWidth: 280 }} spacing={1}>
        <Grid item >
          <div ref={observerRef} style={{ position: "relative", bottom: 64 }}></div>
          <Box sx={{ height: 152, position: "relative" }}>
            <img
              src={"./img/home/logo-white.png"}
              height="100%"
              alt="sushi101-menubar-white-logo" />
          </Box>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs>
            <Link href={menuRoutes.regular.path} passHref>
              <Button fullWidth variant='contained' sx={{ fontWeight: "bold" }}>
                View Menu
              </Button>
            </Link>
          </Grid>
          <Grid item xs>
            <a href={`tel:${siteInfo.phoneNumber}`}>
              <Button fullWidth variant='outlined' sx={{ background: "rgba(255,255,255, 0.45)", fontWeight: "bold" }} >
                Call Us
              </Button>
            </a>
            {/* <Link href={menuRoutes.takeOut.path} passHref>
              <Button fullWidth variant='outlined' sx={{ background: "rgba(255,255,255, 0.45)" }}>
                Take-Out Menu
              </Button>
            </Link> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Container>
}