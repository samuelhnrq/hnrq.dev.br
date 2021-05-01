import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: ['Frank Ruhl Libre', 'Roboto', 'sans-serif'],
    fontSize: 16,
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
