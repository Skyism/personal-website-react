import { createTheme } from '@mui/material/styles';

// Grayscale palette for terminal aesthetic
const grayPalette = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
};

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#333333' : '#e0e0e0',
      light: mode === 'light' ? '#555555' : '#ffffff',
      dark: mode === 'light' ? '#111111' : '#b0b0b0',
      contrastText: mode === 'light' ? '#ffffff' : '#111111',
    },
    secondary: {
      main: mode === 'light' ? '#666666' : '#b0b0b0',
      light: mode === 'light' ? '#888888' : '#d0d0d0',
      dark: mode === 'light' ? '#444444' : '#888888',
      contrastText: mode === 'light' ? '#ffffff' : '#111111',
    },
    background: {
      default: mode === 'light' ? '#f2f2f2' : '#0d0d0d',
      paper: mode === 'light' ? '#ffffff' : '#1a1a1a',
    },
    text: {
      primary: mode === 'light' ? '#222222' : '#e0e0e0',
      secondary: mode === 'light' ? '#555555' : '#b0b0b0',
    },
    divider: mode === 'light' ? '#cccccc' : '#444444',
  },
  typography: {
    fontFamily: '"Courier New", "SF Mono", "Fira Code", "Consolas", monospace',
    h1: {
      fontSize: '3rem',
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: '"Courier New", "SF Mono", "Fira Code", "Consolas", monospace',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
      fontFamily: '"Courier New", "SF Mono", "Fira Code", "Consolas", monospace',
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
      fontFamily: '"Courier New", "SF Mono", "Fira Code", "Consolas", monospace',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
      fontFamily: '"Courier New", "SF Mono", "Fira Code", "Consolas", monospace',
    },
    body1: {
      fontSize: '1.1rem',
      fontWeight: 400,
      lineHeight: 1.8,
      fontFamily: '"Courier New", "SF Mono", "Fira Code", "Consolas", monospace',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      fontFamily: '"Courier New", "SF Mono", "Fira Code", "Consolas", monospace',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 400,
          padding: '8px 20px',
          fontFamily: '"Courier New", "SF Mono", "Fira Code", "Consolas", monospace',
          transition: 'all 0.2s ease',
          border: '2px solid',
          '&:hover': {
            transform: 'none',
            boxShadow: mode === 'light'
              ? '4px 4px 0 #ccc'
              : '4px 4px 0 #333',
          },
        },
        contained: {
          background: mode === 'light' ? '#333333' : '#e0e0e0',
          color: mode === 'light' ? '#ffffff' : '#111111',
          borderColor: mode === 'light' ? '#333333' : '#e0e0e0',
          '&:hover': {
            background: mode === 'light' ? '#222222' : '#f0f0f0',
            borderColor: mode === 'light' ? '#222222' : '#f0f0f0',
          },
        },
        outlined: {
          borderColor: mode === 'light' ? '#666666' : '#888888',
          color: mode === 'light' ? '#444444' : '#b0b0b0',
          '&:hover': {
            borderColor: mode === 'light' ? '#333333' : '#b0b0b0',
            background: mode === 'light' ? '#fafafa' : '#2a2a2a',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          transition: 'all 0.2s ease',
          boxShadow: mode === 'light'
            ? '4px 4px 0 #ccc'
            : '4px 4px 0 #333',
          '&:hover': {
            transform: 'none',
            boxShadow: mode === 'light'
              ? '4px 4px 0 #aaa'
              : '4px 4px 0 #555',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          borderRadius: 3,
          fontFamily: '"Courier New", "SF Mono", "Fira Code", "Consolas", monospace',
          fontSize: '0.75rem',
          height: 22,
          border: '1px solid',
          borderColor: mode === 'light' ? '#ddd' : '#555',
          backgroundColor: mode === 'light' ? '#f0f0f0' : '#2a2a2a',
          color: mode === 'light' ? '#666' : '#b0b0b0',
        },
      },
    },
  },
});
