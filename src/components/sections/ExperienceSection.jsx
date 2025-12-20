import { Box, Container, Typography, IconButton, Collapse } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AnimatedSection from '../ui/AnimatedSection';
import ExperienceCard from '../cards/ExperienceCard';
import { experiences } from '../../data/experiences';

export default function ExperienceSection() {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box id="experience" sx={{ py: 5 }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 1.5 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Experience
            </Typography>
            <IconButton
              onClick={toggleExpanded}
              sx={{
                color: 'primary.main',
                transition: 'transform 0.3s ease',
                transform: expanded ? 'rotate(0deg)' : 'rotate(180deg)',
              }}
            >
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        </AnimatedSection>

        <Collapse in={expanded} timeout="auto">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {experiences.map((experience, index) => (
              <AnimatedSection key={experience.id} delay={index * 0.1}>
                <ExperienceCard experience={experience} />
              </AnimatedSection>
            ))}
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}
