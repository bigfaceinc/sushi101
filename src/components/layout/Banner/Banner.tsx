import { Container, Grid, Typography } from '@mui/material'
import { useRecoilState } from 'recoil'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import { openBannerState } from './Banner.recoil';
import Link from 'next/link'

export const Banner = () => {

  const [open, setOpen] = useRecoilState(openBannerState)

  if (open) {
    return <div style={{ background: 'rgba(0,0,0, 0.3)' }}>
      <Container sx={{ py: 2 }}>
        <Grid container justifyContent={"space-between"} alignItems="center">
          <Grid item>
            <Typography color={'white'} variant="subtitle2">
              <Link href={'/#holiday-hours'} passHref>
                <span style={{ textDecoration: 'underline', cursor:'pointer' }}>
                Our holiday schedule is out!
                </span>
              </Link>
              {'  '}If you want a party tray for Chrismas, please contact us 5 days in advance: (902)469-8888
            </Typography>
          </Grid>

          <Grid item alignItems="center" style={{ display: 'flex' }}>
            <ClearRoundedIcon style={{ color: 'white', cursor: 'pointer' }} onClick={() => {
              setOpen(false)
            }} />
          </Grid>

        </Grid>

      </Container>
    </div>
  }
  else {
    return null
  }

}