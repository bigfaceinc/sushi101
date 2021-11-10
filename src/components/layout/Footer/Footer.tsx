import { sushi101Theme } from '@config/theme'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { BusinessTime, ContactInfo, GooglaMaps } from './Footer.component'

export const Footer = () => {
  return <>
    <Box sx={{ backgroundColor: "primary.main", }}>
      <Container component={"footer"} >
        <Grid container>
          <Grid item xs={12} sm container py={4} direction="column" spacing={1}>
            <BusinessTime />
          </Grid>
          <Grid item xs={12} sm container py={4} direction="column" spacing={1} id="contact">
            <ContactInfo />
          </Grid>
          <Grid item xs={12} md={4} container py={4} height={280}>
            <GooglaMaps />
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