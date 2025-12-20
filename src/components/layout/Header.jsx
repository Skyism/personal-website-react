import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Research', id: 'research' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton>
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
                style={{ width: '100%', textDecoration: 'none', color: 'inherit' }}
              >
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ScrollLink>
            ) : (
              <ListItemButton
                component={RouterLink}
                to={`/#${item.id}`}
                sx={{ textAlign: 'center' }}
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
      <AppBar
        position="sticky"
        elevation={2}
        sx={{
          backgroundColor: 'background.paper',
          color: 'text.primary',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 600,
              fontSize: '1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            :{">"}jshen
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, mr: 2 }}>
              {navItems.map((item) =>
                isHomePage ? (
                  <ScrollLink
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Button
                      sx={{
                        color: 'text.primary',
                        fontSize: '0.875rem',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </ScrollLink>
                ) : (
                  <Button
                    key={item.id}
                    component={RouterLink}
                    to={`/#${item.id}`}
                    sx={{
                      color: 'text.primary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                )
              )}
            </Box>
          )}

          <ThemeToggle />

          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
