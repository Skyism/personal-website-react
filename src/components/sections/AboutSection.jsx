import { Box, Container, Typography, Paper } from '@mui/material';
import AnimatedSection from '../ui/AnimatedSection';
import { personalInfo } from '../../data/personal';

export default function AboutSection() {
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography
            variant="h2"
            gutterBottom
            textAlign="center"
            sx={{
              mb: 6,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              backgroundColor: 'background.paper',
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography
              variant="body1"
              color="text.primary"
              paragraph
              sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}
            >
              {personalInfo.about.split('\n\n').map((paragraph, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  {paragraph}
                </Box>
              ))}
            </Typography>

            <Box
              sx={{
                mt: 4,
                pt: 4,
                borderTop: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                justifyContent: 'center',
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="primary.main" fontWeight={700}>
                  {personalInfo.gpa}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GPA
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="primary.main" fontWeight={700}>
                  2+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Years at CMU
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h3" color="primary.main" fontWeight={700}>
                  9+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Projects Completed
                </Typography>
              </Box>
            </Box>
          </Paper>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
