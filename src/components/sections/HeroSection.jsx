import { Box, Container, Typography, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link as ScrollLink } from 'react-scroll';
import SocialLinks from '../ui/SocialLinks';
import { personalInfo } from '../../data/personal';

export default function HeroSection() {
  return (
    <Box
      id="hero"
      sx={{
        py: { xs: 8, md: 12 },
        mb: 4,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Avatar
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              sx={{
                width: { xs: 120, md: 150 },
                height: { xs: 120, md: 150 },
                mb: 3,
                border: '4px solid',
                borderColor: 'primary.main',
                boxShadow: (theme) =>
                  theme.palette.mode === 'light'
                    ? '0 8px 32px rgba(156, 39, 176, 0.3)'
                    : '0 8px 32px rgba(171, 71, 188, 0.4)',
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
              }}
            >
              Hi, I'm {personalInfo.name.split(' ')[0]}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography
              variant="h4"
              color="text.primary"
              gutterBottom
              fontWeight={600}
            >
              {personalInfo.title}
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              {personalInfo.subtitle}
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: 600 }}
            >
              Software Engineer @ The Startup Index | Teaching Assistant @ CMU |
              Full-Stack Developer & ML Enthusiast
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap', justifyContent: 'center' }}>
              <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
                <Button variant="contained" size="large">
                  View My Work
                </Button>
              </ScrollLink>
              <Button
                variant="outlined"
                size="large"
                href={personalInfo.socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Button>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <SocialLinks spacing={2} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
              <Box
                sx={{
                  mt: 6,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  color: 'text.secondary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(4px)',
                  },
                }}
              >
                <Typography variant="body2">Scroll to learn more</Typography>
                <ArrowDownwardIcon />
              </Box>
            </ScrollLink>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
