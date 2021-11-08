

import { Box, Button, Container, fabClasses, Grid, Menu, MenuItem, MenuProps, styled } from '@mui/material'
import { alpha, SxProps, Theme } from '@mui/system'
import React, { useMemo } from 'react'
import Link from 'next/link'
import { MenuItemIntf } from '../Menu.type'
import Image from 'next/image'

export const MenuBorder = () => {
  const borderStyle: SxProps<Theme> = { height: 18, borderRight: 2, borderRightColor: "primary.main" }
  return <Box sx={borderStyle} />
}

export const Logo = () => {
  return <Image
    src={"/img/home/logo.png"}
    layout='fill'
    objectFit='contain'
    alt="sushi101-menubar-logo" />
}


interface Props {
  active?: boolean,
  title: string
  to?: string
  onClick?: () => void
  childrenItems?: MenuItemIntf[]
}

export const LaptopMenuButton = ({ active = false, title, to = "", onClick, childrenItems }: Props) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { variant, color } = useMemo(() => {
    if (active) {
      return {
        variant: "contained",
        color: "primary"
      }
    } else {
      return {
        variant: "text",
        color: "secondary"
      }
    }
  }, [active])


  const renderPopupMenu = () => {
    if (childrenItems) {
      return <StyledMenu
        id="positioned-menu"
        aria-labelledby="positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {childrenItems.map((item) => {

          return <Link href={item.path ?? ""} key={item.title} passHref>
            <MenuItem onClick={handleClose}>{item.title}</MenuItem>
          </Link>
        })}
      </StyledMenu>
    }
  }

  const LinkToMenu = () => {
    if (childrenItems) {
      return <>{title}</>
    } else {
      return <Link href={to ?? ""} passHref>
        {title}
      </Link>
    }
  }


  return <>
    <Button variant={variant as any} color={color as any} onClick={(e) => {
      setAnchorEl(e.currentTarget)
      if (onClick) {
        onClick()
      }
    }}
      sx={{ minWidth: 100 }}
      disableRipple
      disableTouchRipple
      disableFocusRipple
    >

      <LinkToMenu />
    </Button>
    {renderPopupMenu()}
  </>
}


const StyledMenu = styled((props: MenuProps) => (
  <Menu
    disableScrollLock
    elevation={1}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 120,
    '& .MuiMenu-list': {
      padding: '8px 4px',
    },
    '& .MuiMenuItem-root': {
      '&:hover': {
        color: theme.palette.primary.main,
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));