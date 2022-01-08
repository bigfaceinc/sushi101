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
          <Grid item xs>
            <Typography color={'white'} variant="subtitle2">
            Due to the COVID situation, we now only offer take out at the moment. {' '}
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