import { pink, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const sushi101Theme = createTheme({
  typography: {
    fontFamily: ["Sawarabi Gothic", "Verdana", "sans-serif"].join(','),
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary:{
      main: red[500],
      light: red[100],
      dark: red[700]
    },
    secondary: {
      main: "#111",
      light: "#333",
      dark: "#000"
    }
  },
})