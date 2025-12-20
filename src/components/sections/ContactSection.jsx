import { Box, Container, Typography, Button, Paper, Grid } from '@mui/material';
import AnimatedSection from '../ui/AnimatedSection';
import SocialLinks from '../ui/SocialLinks';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import { personalInfo } from '../../data/personal';

export default function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography
            variant="h2"
            gutterBottom
            textAlign="center"
            sx={{
              mb: 2,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let's Connect
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 6 }}
          >
            I'm always open to new opportunities and collaborations
          </Typography>
        </AnimatedSection>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <AnimatedSection delay={0.2}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                }}
              >
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Get in Touch
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Feel free to reach out for opportunities, collaborations, or just to
                  say hi!
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                      p: 2,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? 'rgba(156, 39, 176, 0.05)'
                            : 'rgba(171, 71, 188, 0.1)',
                      },
                    }}
                  >
                    <EmailIcon sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {personalInfo.email}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 2,
                      p: 2,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? 'rgba(156, 39, 176, 0.05)'
                            : 'rgba(171, 71, 188, 0.1)',
                      },
                    }}
                  >
                    <PhoneIcon sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Phone
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {personalInfo.phone}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? 'rgba(156, 39, 176, 0.05)'
                            : 'rgba(171, 71, 188, 0.1)',
                      },
                    }}
                  >
                    <LocationOnIcon sx={{ color: 'primary.main' }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Location
                      </Typography>
                      <Typography variant="body1" fontWeight={500}>
                        {personalInfo.location}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </AnimatedSection>
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatedSection delay={0.3}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  Connect With Me
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Find me on these platforms
                </Typography>

                <Box sx={{ my: 4 }}>
                  <SocialLinks direction="column" spacing={2} />
                </Box>

                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DescriptionIcon />}
                  href={personalInfo.socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Download Resume
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<EmailIcon />}
                  href={`mailto:${personalInfo.email}`}
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Send an Email
                </Button>
              </Paper>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
