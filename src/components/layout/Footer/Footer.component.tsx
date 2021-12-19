import { siteInfo } from '@config/siteInfo'
import { Grid, Typography } from '@mui/material'
import React from 'react'

export const BusinessTime = () => {
  return <>
    <Grid item direction="column" id='holiday-hours'>
      <Typography pb={1} variant='h5' color="white">Holiday Hours</Typography>
      <Typography color="white">Dec 24: 12pm-8pm</Typography>
      <Typography color="white">Dec 25: CLOSED</Typography>
      <Typography color="white">Dec 26: 4pm-9pm</Typography>
      <Typography color="white">Dec 31: 11am-10pm</Typography>
      <Typography color="white">Jan 1: 3pm-8pm</Typography>
    </Grid>

    <Grid item direction="column">
      <Typography pb={1} variant='h5' color="white">Business Hours</Typography>
      <Typography color="white">MON-WED: 11:30am - 9pm</Typography>
      <Typography color="white">THUR-SAT: 11:30am - 10pm</Typography>
      <Typography color="white">SUN: 3:30pm - 8:30pm</Typography>
    </Grid>
  </>
}

const phoneNumberFormatter = (str: string) => {
  const phoneNumberReg = /(\d{3})(\d{3})(\d{4})/
  const cleaned = str.trim()

  const match = cleaned.match(phoneNumberReg)
  if (match) {
    const [_, first, second, third] = match
    return `(${first})${second}-${third}`
  } else {
    return undefined
  }

}

export const ContactInfo = () => {
  return <>
    <Grid item py={2}>
      <Typography variant='h5' color="white">Contact</Typography>
    </Grid>
    <Grid item >
      <Typography color="white">Address:</Typography>
      <Typography color="white">{siteInfo.addressLine1}</Typography>
      <Typography color="white">{siteInfo.addressLine2}</Typography>
    </Grid>
    <Grid item >
      <Typography color="white">Phone number:</Typography>
      <Typography color="white" sx={{ textDecoration: "underline" }}>
        <a href={`tel:${siteInfo.phoneNumber}`}>
          {phoneNumberFormatter(siteInfo.phoneNumber)}
        </a>
      </Typography>
    </Grid>
  </>
}

export const GooglaMaps = () => {

  return <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d709.3600699067546!2d-63.49977587074256!3d44.66978615244759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a2483cd0342ed%3A0x3f1b082e77a5a02b!2s912%20Cole%20Harbour%20Rd%2C%20Dartmouth%2C%20NS%20B2V%202A8!5e0!3m2!1sen!2sca!4v1636364216426!5m2!1sen!2sca" width="100%" height="100%" allowFullScreen={true} loading="lazy"></iframe>

}