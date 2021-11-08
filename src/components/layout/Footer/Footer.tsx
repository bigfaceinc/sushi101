import { sushi101Theme } from '@config/theme'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export const Footer = () => {
  return <Box component={"footer"} sx={{ backgroundColor: "primary.main", }}>
  <Container>
    <Grid container alignItems="center" sx={{ height: 52 }}>
      <Typography sx={{ color: "white" }}>Copyright © SUSHI 101</Typography>
    </Grid>
  </Container>
</Box>
}