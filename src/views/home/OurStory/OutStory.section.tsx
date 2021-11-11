import { breakPointState } from '@components/global/GlobalHooks/breakPoint/breakPoint.recoil'
import { Grid, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import { useRecoilValue } from 'recoil'
import { story } from './OurStory.type'
import { ourStoryBackgroundCss, TitleUnderLine } from './OutStory.component'
import { Box } from "@mui/system";

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
        <TitleUnderLine/>
        <Grid item sx={{ p: 2 }} container spacing={2} direction="column">
          <Grid item>
            <Typography variant="body1" align='left' >
              {story.line1}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align='left'>
              {story.line2}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align='left'>
              {story.line3}
            </Typography>
          </Grid>

        </Grid>
      </Grid>
      <Grid item container xs={6} sx={{ borderRadius: 1, ...ourStoryBackgroundCss }}>
      </Grid>
    </Grid>
  </Paper>
}

const OurStoryMobile = () => {

  return <Paper id="about">
    <Grid container direction="column" >
      <Grid container item direction="column" justifyContent="center" alignItems={"center"} xs={6} p={2}>
        <Grid item >
          <Typography variant='h5' sx={{ color: "primary.main", fontWeight: "bold" }} >Our Story</Typography>
        </Grid>
        <TitleUnderLine/>
        <Grid item sx={{ p: 2 }} container spacing={2} direction="column" >
          <Grid item>
            <Typography variant="body1" align='left' >
              {story.line1}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align='left'>
              {story.line2}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align='left'>
              {story.line3}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Box sx={{ minHeight: 240, borderBottomLeftRadius: 1, borderBottomRightRadius: 2, ...ourStoryBackgroundCss }}></Box>


    </Grid>
  </Paper>
}