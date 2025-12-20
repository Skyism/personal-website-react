import { Box, Container, Typography } from '@mui/material';
import AnimatedSection from '../ui/AnimatedSection';
import ExperienceCard from '../cards/ExperienceCard';
import { experiences } from '../../data/experiences';

export default function ExperienceSection() {
  return (
    <Box id="experience" sx={{ py: 8 }}>
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
            Experience
          </Typography>
        </AnimatedSection>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {experiences.map((experience, index) => (
            <AnimatedSection key={experience.id} delay={index * 0.1}>
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
