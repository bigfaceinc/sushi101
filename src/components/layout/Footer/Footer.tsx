import { sushi101Theme } from '@config/theme'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return <>
    <Box sx={{ backgroundColor: "primary.main", }}>
      <Container component={"footer"} >
        <Grid container>
          <Grid item xs={12} sm container  py={4} direction="column" spacing={1}>
            <Grid item py={2}>
              <Typography variant='h5' color="white">Business Hours</Typography>
            </Grid>
            <Grid item >
              <Typography color="white">MON-WED: 11am - 10pm</Typography>
            </Grid>
            <Grid item >
              <Typography color="white">THUR-SAT: 11am - 11pm</Typography>
            </Grid>
            <Grid item >
              <Typography color="white">SUN: 12pm - 9pm</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm container  py={4} direction="column" spacing={1}>
            <Grid item py={2}>
              <Typography variant='h5' color="white">Contact</Typography>
            </Grid>
            <Grid item >
              <Typography color="white">Address:</Typography>
              <Typography color="white">912 Cole Harbour Road, Unit 13</Typography>
              <Typography color="white">Dartmouth, NS B2V 2J5</Typography>
            </Grid>
            <Grid item >
              <Typography color="white">Phone number:</Typography>
              <Typography color="white" sx={{textDecoration: "underline"}}>
                <a href="tel:+19024698888">
                902-469-8888
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box >

    <Box sx={{ backgroundColor: "primary.dark", }}>
      <Container component={"footer"} >
        {/* <div style={{ borderTop: "1px solid lightgray" }}></div> */}
        <Grid container alignItems="center" sx={{ height: 64 }}>
          <Typography sx={{ color: "white" }}>Copyright © SUSHI 101</Typography>
        </Grid>
      </Container>
    </Box>
  </>
}