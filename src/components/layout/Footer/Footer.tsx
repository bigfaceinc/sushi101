import { sushi101Theme } from '@config/theme'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return <>
    <Box sx={{ backgroundColor: "primary.main", }}>
      <Container component={"footer"} >
        <Grid container>
          <Grid item xs={12} sm container py={4} direction="column" spacing={1}>
            <Grid item py={2}>
              <Typography variant='h5' color="white">Business Hours</Typography>
            </Grid>
            <Grid item >
              <Typography color="white">MON-WED: 11:30pm - 9pm</Typography>
            </Grid>
            <Grid item >
              <Typography color="white">THUR-SAT: 11:30am - 10pm</Typography>
            </Grid>
            <Grid item >
              <Typography color="white">SUN: 12pm - 9pm</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm container py={4} direction="column" spacing={1}>
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
              <Typography color="white" sx={{ textDecoration: "underline" }}>
                <a href="tel:+19024698888">
                  902-469-8888
                </a>
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} container py={4} height={400}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d709.3600699067546!2d-63.49977587074256!3d44.66978615244759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a2483cd0342ed%3A0x3f1b082e77a5a02b!2s912%20Cole%20Harbour%20Rd%2C%20Dartmouth%2C%20NS%20B2V%202A8!5e0!3m2!1sen!2sca!4v1636364216426!5m2!1sen!2sca" width="100%" height="100%"  allowFullScreen={true} loading="lazy"></iframe>
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