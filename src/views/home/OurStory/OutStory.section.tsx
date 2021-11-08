import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'

export const OurStory = () => {

  return <Paper id="about"
    sx={{
      width: "100%",
      height: "auto",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}>
    <Grid container p={4}>
      <Grid container item direction="column" justifyContent="center" alignItems={"center"} spacing={2} xs={6} p={1}>
        <Grid item >
          <Typography variant='h5' sx={{ color: "primary.main", fontWeight: "bold" }} >Our Story</Typography>
        </Grid>
        <Grid item sx={{ p: 2 }} container >
          <Typography variant="body1" align='center' >
            SUSHI101 hosts the finest Japanese Sushi dining/take-out experiences in Atlantic Canada.
          </Typography>

          <Typography variant="body1" align='center'>
            SUSHI 101 strives to make its brand the Nation's favourite finest Japanese Sushi and
            a best Ramen dining experience with customer-first business philosophy.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={6} >
        <Image width={500} height={200} src={'/img/home/story-background.jpg'} alt="story about us background image" />
      </Grid>
    </Grid>
  </Paper>


}