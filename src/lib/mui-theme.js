import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  // FIXME: Not working???
  typography: {
    fontFamily: ['"Frank Ruhl Libre"', 'Roboto', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})

const responsiveTextTheme = responsiveFontSizes(theme, { factor: 2 })

export default responsiveTextTheme
