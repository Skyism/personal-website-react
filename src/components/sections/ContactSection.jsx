import { Box, Container, Typography, Button, Paper, Grid } from '@mui/material';
import AnimatedSection from '../ui/AnimatedSection';
import SocialLinks from '../ui/SocialLinks';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { personalInfo } from '../../data/personal';

export default function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        py: 5,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography
            variant="h3"
            gutterBottom
            textAlign="center"
            sx={{
              mb: 1.5,
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let's Connect
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 4, fontSize: '0.875rem' }}
          >
            I'm always open to new opportunities and collaborations
          </Typography>
        </AnimatedSection>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <AnimatedSection delay={0.2}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ fontSize: '1rem' }}>
                  Get in Touch
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '0.85rem' }}>
                  Feel free to reach out for opportunities, collaborations, or just to
                  say hi!
                </Typography>

                <Box sx={{ mt: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      mb: 1.5,
                      p: 1.5,
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
                    <EmailIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                        Email
                      </Typography>
                      <Typography variant="body2" fontWeight={500} sx={{ fontSize: '0.85rem' }}>
                        {personalInfo.email}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      p: 1.5,
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
                    <LocationOnIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                        Location
                      </Typography>
                      <Typography variant="body2" fontWeight={500} sx={{ fontSize: '0.85rem' }}>
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
                  p: 3,
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ fontSize: '1rem' }}>
                  Connect With Me
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '0.85rem' }}>
                  Find me on these platforms
                </Typography>

                <Box sx={{ my: 2.5 }}>
                  <SocialLinks direction="column" spacing={1.5} />
                </Box>

                <Button
                  variant="outlined"
                  size="medium"
                  startIcon={<EmailIcon />}
                  href={`mailto:${personalInfo.email}`}
                  fullWidth
                  sx={{ mt: 1.5, fontSize: '0.875rem' }}
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
