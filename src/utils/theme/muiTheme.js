import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',

    h1: {
      fontSize: '26px',
      fontWeight: 'bold',
      lineHeight: 1,
      letterSpacing: 0,

      '@media (min-width:600px)': {
        fontSize: '40px'
      },
      '@media (min-width:1440px)': {
        fontSize: '50px'
      }
    },
    body1: {
      fontSize: '14px',

      '@media (min-width:600px)': {
        fontSize: '16px'
      },
      '@media (min-width:1440px)': {
        fontSize: '18px'
      }
    },
    button: {
      fontWeight: 600,
      letterSpacing: '2.5px'
    },
  },

  palette: {
    primary: {
      main: '#00C65E'
    },
    secondary: {
      main: '#FFF'
    }
  },

  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#00C65E',
        color: '#FFF',
        border: 'none',
        '&:hover': {
          backgroundColor: 'rgb(0, 138, 65)',
        }
      },
      containedSecondary: {
        color: '#00C65E',
        backgroundColor: '#FFF',
        border: 'none',
        '&:hover': {
          backgroundColor: '#d5d5d5',
        }
      },
      outlined: {
        border: '1px solid #FFF',
        padding: '5px 15px',
      },
      outlinedPrimary: {
        background: 'transparent',
        color: '#FFF',
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          borderColor: '#FFF'
        }
      },
      text: {
        padding: '6px 8px'
      },
      textPrimary: {
        color: '#00C65E'
      },
      textSecondary: {
        color: '#FFF'
      }
    }
  }
})

export default theme