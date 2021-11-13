import {Box, SxProps, Theme} from "@mui/system";
import {Button, Container, Grid} from '@mui/material'
import {useMenuStyle} from '../../components/layout/Menu/useMenuStyle.hook'
import Link from 'next/link'
import {menuRoutes} from "@config/router";
import {siteInfo} from "@config/siteInfo";
import landingImg from './img/landing-image.jpg'
import {LogoWhite} from "@components/layout/Menu/LaptopMenu/LaptopMenu.component";

export const backgroundCss: SxProps<Theme> = {
  backgroundSize: "cover",
  height: "60vh",
  width: "100%",
  backgroundImage: `url(${landingImg})`,
  // backgroundAttachment: "fixed",
  backgroundPosition: "center center ",
  backgroundRepeat: "no-repeat"
}


export const HeroText = () => {

  const {observerRef} = useMenuStyle()

  return <Container sx={{height: '100%', width: "100%"}}>
    <Grid container alignItems="center" justifyContent={"start"} sx={{height: '100%', width: "100%"}}>
      <Grid item container direction="column" sx={{maxWidth: 280}} spacing={1}>
        <Grid item>
          <div ref={observerRef} style={{position: "relative", bottom: 64}}></div>
          <Box sx={{height: 152, position: "relative"}}>
            <LogoWhite/>
          </Box>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item xs>
            <Link href={menuRoutes.takeOut.path} passHref>
              <Button fullWidth variant='contained' sx={{ fontWeight: "500" }}>
                Takeout Menu
              </Button>
            </Link>
          </Grid>
          <Grid item xs>
            <CallUsButton/>
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

export const CallUsButton = () => {
  return <a href={`tel:${siteInfo.phoneNumber}`}>
    <Button fullWidth variant='outlined'
            sx={{background: "rgba(255,255,255, 0.7)", color: "primary.main"}}
    >
      Call Us
    </Button>
  </a>
}