import { Box, Container, Typography, Button, Avatar, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import SocialLinks from '../ui/SocialLinks';
import { personalInfo } from '../../data/personal';

export default function HeroAboutSection() {
  return (
    <Box
      id="hero"
      sx={{
        py: { xs: 4, md: 5 },
        backgroundColor: 'background.default',
        position: 'relative',
      }}
    >
      <Box id="about" sx={{ position: 'absolute', top: 0 }} />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 2, md: 3 },
          }}
        >
          {/* Left: Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Avatar
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              sx={{
                width: { xs: 80, md: 100 },
                height: { xs: 80, md: 100 },
                border: '2px solid',
                borderColor: 'primary.main',
                boxShadow: (theme) =>
                  theme.palette.mode === 'light'
                    ? '0 4px 16px rgba(156, 39, 176, 0.3)'
                    : '0 4px 16px rgba(171, 71, 188, 0.4)',
              }}
            />
          </motion.div>

          {/* Right: Content */}
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 0.75,
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                }}
              >
                Hi, I'm {personalInfo.name.split(' ')[0]}, interested in AI, cloud, and full-stack.
              </Typography>
              <Typography
                variant="h6"
                color="text.primary"
                gutterBottom
                fontWeight={600}
                sx={{ mb: 0.5, fontSize: '1rem' }}
              >
                {personalInfo.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" paragraph sx={{ mb: 1.5, fontSize: '0.9rem' }}>
                {personalInfo.subtitle}
              </Typography>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 1.5, md: 2 },
                  mb: 2,
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography
                  variant="body2"
                  color="text.primary"
                  sx={{ lineHeight: 1.6, fontSize: { xs: '0.85rem', md: '0.9rem' } }}
                >
                  {personalInfo.about.split('\n\n').map((paragraph, index) => (
                    <Box key={index} sx={{ mb: index === 0 ? 1.5 : 0 }}>
                      {paragraph}
                    </Box>
                  ))}
                </Typography>
              </Paper>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: { xs: 2, md: 3 },
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  mb: 3,
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" color="primary.main" fontWeight={700} sx={{ fontSize: '1.1rem' }}>
                    {personalInfo.gpa}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                    GPA
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" color="primary.main" fontWeight={700} sx={{ fontSize: '1.1rem' }}>
                    2+
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                    Years at CMU
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" color="primary.main" fontWeight={700} sx={{ fontSize: '1.1rem' }}>
                    9+
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                    Projects
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  mb: 2,
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
                  <Button variant="contained" size="small" sx={{ fontSize: '0.875rem' }}>
                    View My Work
                  </Button>
                </ScrollLink>
                <Button
                  variant="outlined"
                  size="small"
                  href={personalInfo.socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontSize: '0.875rem' }}
                >
                  Download Resume
                </Button>
              </Box>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <SocialLinks spacing={1.5} />
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

