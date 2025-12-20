import { createContext, useState, useMemo, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme } from './theme';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    // Get saved theme from localStorage or default to 'light'
    const savedMode = localStorage.getItem('themeMode');
    return savedMode || 'light';
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}
