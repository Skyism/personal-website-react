import { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as ScrollLink } from 'react-scroll';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Set active tab based on hash or default to 'about'
  useEffect(() => {
    if (location.hash) {
      setActiveTab(location.hash.substring(1));
    } else if (isHomePage) {
      setActiveTab('about');
    }
  }, [location.hash, isHomePage]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'about', id: 'about' },
    { label: 'experience', id: 'experience' },
    { label: 'projects', id: 'projects' },
    { label: 'research', id: 'research' },
    { label: 'education', id: 'education' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            {isHomePage ? (
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={() => setActiveTab(item.id)}
                style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}
              >
                <ListItemButton
                  sx={{
                    textAlign: 'center',
                    fontFamily: 'monospace',
                    '&::before': {
                      content: '">"',
                      color: 'text.secondary',
                      marginRight: '4px',
                    },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ScrollLink>
            ) : (
              <ListItemButton
                component={RouterLink}
                to={`/#${item.id}`}
                sx={{
                  textAlign: 'center',
                  fontFamily: 'monospace',
                  '&::before': {
                    content: '">"',
                    color: 'text.secondary',
                    marginRight: '4px',
                  },
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        component="header"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          backgroundColor: 'background.paper',
          borderBottom: '2px solid',
          borderColor: 'text.primary',
          height: 52,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 0,
            width: '100%',
          }}
        >
          <Box
            component={RouterLink}
            to="/"
            sx={{
              fontFamily: 'monospace',
              fontSize: '17px',
              fontWeight: 'bold',
              color: 'text.primary',
              marginRight: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              textDecoration: 'none',
            }}
          >
            &gt;_ <Box component="span" sx={{ fontFamily: 'monospace' }}>jshen</Box>
            <Box
              component="span"
              sx={{
                width: '9px',
                height: '16px',
                backgroundColor: 'text.secondary',
                display: 'inline-block',
                marginLeft: '2px',
                animation: 'blink 1s step-end infinite',
                '@keyframes blink': {
                  '50%': { opacity: 0 },
                },
              }}
            />
          </Box>

          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                gap: 0,
                flex: 1,
                height: 52,
              }}
            >
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => setActiveTab(item.id)}
                  style={{ textDecoration: 'none' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 18px',
                      fontSize: '12px',
                      color: activeTab === item.id ? 'text.primary' : 'text.secondary',
                      borderRight: '1px solid',
                      borderColor: 'divider',
                      cursor: 'pointer',
                      fontFamily: 'monospace',
                      borderBottom: activeTab === item.id ? '3px solid' : '3px solid transparent',
                      borderBottomColor: activeTab === item.id ? 'text.primary' : 'transparent',
                      backgroundColor: activeTab === item.id
                        ? (theme.palette.mode === 'light' ? '#f8f8f8' : '#2a2a2a')
                        : 'transparent',
                      height: '100%',
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'light' ? '#f8f8f8' : '#2a2a2a',
                      },
                      '&::before': {
                        content: '"./"',
                        color: 'text.secondary',
                        fontSize: '11px',
                        marginRight: '2px',
                      },
                    }}
                  >
                    {item.label}
                  </Box>
                </ScrollLink>
              ))}
            </Box>
          )}

          <Box sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ThemeToggle />
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: 'background.paper',
            fontFamily: 'monospace',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
