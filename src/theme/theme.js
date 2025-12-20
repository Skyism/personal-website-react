import { createTheme } from '@mui/material/styles';

const purplePalette = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
};

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? purplePalette[600] : purplePalette[400],
      light: purplePalette[300],
      dark: purplePalette[700],
      contrastText: '#ffffff',
    },
    secondary: {
      main: mode === 'light' ? '#667eea' : '#764ba2',
      light: '#8a9cff',
      dark: '#5465c8',
      contrastText: '#ffffff',
    },
    background: {
      default: mode === 'light' ? '#f9f9f9' : '#0a0a0a',
      paper: mode === 'light' ? '#ffffff' : '#1a1a1a',
    },
    text: {
      primary: mode === 'light' ? '#333333' : '#ffffff',
      secondary: mode === 'light' ? '#666666' : '#b0b0b0',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.1rem',
      fontWeight: 300,
      lineHeight: 1.8,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 300,
      lineHeight: 1.6,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 32px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 25px rgba(156, 39, 176, 0.3)',
          },
        },
        contained: {
          background: mode === 'light'
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            : 'linear-gradient(135deg, #9c27b0 0%, #6a1b9a 100%)',
          '&:hover': {
            background: mode === 'light'
              ? 'linear-gradient(135deg, #5465c8 0%, #5d3885 100%)'
              : 'linear-gradient(135deg, #8e24aa 0%, #4a148c 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: mode === 'light'
              ? '0 12px 40px rgba(0, 0, 0, 0.15)'
              : '0 12px 40px rgba(156, 39, 176, 0.2)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 6,
        },
      },
    },
  },
});
