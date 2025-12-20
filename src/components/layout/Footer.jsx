import { Box, Container, Typography, Link } from '@mui/material';
import SocialLinks from '../ui/SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Jeffrey Shen
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Computer Science @ Carnegie Mellon University
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} Jeffrey Shen. All rights reserved.
            </Typography>
          </Box>

          <Box>
            <SocialLinks spacing={2} />
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Link
                href="https://github.com/Skyism/personal-website"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    color: 'primary.main',
                  },
                }}
              >
                View Source Code
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
