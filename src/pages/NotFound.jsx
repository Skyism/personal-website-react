import { Container, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import SearchOffIcon from '@mui/icons-material/SearchOff';

export default function NotFound() {
  return (
    <Container maxWidth="md">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SearchOffIcon
            sx={{
              fontSize: 100,
              color: 'primary.main',
              mb: 2,
            }}
          />
        </motion.div>

        <Typography
          variant="h1"
          sx={{
            fontSize: '8rem',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          404
        </Typography>

        <Typography variant="h4" gutterBottom fontWeight={600}>
          Page Not Found
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          paragraph
          sx={{ maxWidth: 500, mb: 4 }}
        >
          The page you're looking for doesn't exist or has been moved. Let's get you
          back on track!
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            startIcon={<HomeIcon />}
            size="large"
          >
            Back to Home
          </Button>
          <Button
            component={RouterLink}
            to="/#projects"
            variant="outlined"
            size="large"
          >
            View Projects
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
