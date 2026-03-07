import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
      <Box
      component="footer"
      sx={{
        borderTop: '2px solid',
        borderColor: 'text.primary',
        backgroundColor: 'background.paper',
        padding: { xs: '12px 16px', md: '16px 24px' },
        fontFamily: 'monospace',
        fontSize: { xs: '10px', md: '11px' },
        color: 'text.secondary',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        flexWrap: 'wrap',
        gap: '8px',
      }}
    >
      <Typography component="span" sx={{ fontFamily: 'monospace', fontSize: '11px' }}>
        jshen@cmu:~$ <strong>exit 0</strong>
      </Typography>
      <Typography component="span" sx={{ fontFamily: 'monospace', fontSize: '11px' }}>
        © {currentYear} Jeffrey Shen · CS/ECE @ CMU
      </Typography>
      <Link
        href="https://github.com/Skyism/personal-website"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: 'text.secondary',
          textDecoration: 'none',
          fontFamily: 'monospace',
          fontSize: '11px',
          '&:hover': {
            color: 'text.primary',
          },
        }}
      >
        ./source-code
      </Link>
    </Box>
  );
}
