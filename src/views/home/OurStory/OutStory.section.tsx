import { breakPointState } from '@components/global/GlobalHooks/breakPoint/breakPoint.recoil'
import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'

export const OurStory = () => {

  const { isLaptop } = useRecoilValue(breakPointState)

  if (isLaptop) {
    return <OurStoryLaptop />
  } else {
    return <OurStoryMobile />
  }
}



const OurStoryLaptop = () => {

  return <Paper id="about"
    sx={{
      width: "100%",
      height: "auto",
    }}>
    <Grid container p={4}>
      <Grid container item direction="column" justifyContent="center" alignItems={"center"} spacing={2} xs={6} p={1}>
        <Grid item >
          <Typography variant='h5' sx={{ color: "primary.main", fontWeight: "bold" }} >Our Story</Typography>
        </Grid>
        <Grid item sx={{ p: 2 }} container >
          <Typography variant="body1" align='left' >
            SUSHI101 hosts the finest Japanese Sushi dining/take-out experiences in Atlantic Canada.
          </Typography>

          <Typography variant="body1" align='left'>
            SUSHI 101 strives to make its brand the Nation{"'"}s favourite finest Japanese Sushi and
            a best Ramen dining experience with customer-first business philosophy.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={6} sx={{ position: "relative", height: 320, width: 300 }}>
        <img
          height="100%"
          src={'./img/home/story-background.jpg'} alt="story about us background image" />
      </Grid>
    </Grid>
  </Paper>
}

const OurStoryMobile = () => {

  return <Paper id="about">
    <Grid container direction="column">
      <div style={{
        height: 160,
        width: "100%",
        backgroundImage: "url('./img/home/story-background.jpg')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      }}>
      </div>

      <Grid container item direction="column" justifyContent="center" alignItems={"center"} xs={6} p={2}>
        <Grid item >
          <Typography variant='h5' sx={{ color: "primary.main", fontWeight: "bold" }} >Our Story</Typography>
        </Grid>
        <Grid item sx={{ p: 2 }} container >
          <Typography variant="body1" align='center' >
            SUSHI101 hosts the finest Japanese Sushi dining/take-out experiences in Atlantic Canada.
          </Typography>

          <Typography variant="body1" align='center'>
            SUSHI 101 strives to make its brand the Nation{"'"}s favourite finest Japanese Sushi and
            a best Ramen dining experience with customer-first business philosophy.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Paper>
}