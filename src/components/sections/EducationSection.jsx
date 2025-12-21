import { Box, Container, Typography, Chip, IconButton, Collapse } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AnimatedSection from '../ui/AnimatedSection';
import { education } from '../../data/education';

export default function EducationSection() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Combine all courses
  const allCourses = [
    ...education.allCourses.inProgress.map(course => ({ name: course, inProgress: true })),
    ...education.allCourses.completed.map(course => ({ name: course, inProgress: false })),
  ];

  return (
    <Box id="education" sx={{ py: 5 }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 1.5 }}>
            <Typography
              variant="h3"
              color="primary.main"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 600,
              }}
            >
              Coursework
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
          <AnimatedSection delay={0.1}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
              {allCourses.map((course) => (
                <Chip
                  key={course.name}
                  label={course.name}
                  size="small"
                  variant={course.inProgress ? 'filled' : 'outlined'}
                  sx={{
                    fontSize: '0.75rem',
                    height: 24,
                    borderColor: 'primary.main',
                    color: course.inProgress ? 'white' : 'primary.main',
                    backgroundColor: course.inProgress ? 'primary.main' : 'transparent',
                  }}
                />
              ))}
            </Box>
          </AnimatedSection>
        </Collapse>
      </Container>
    </Box>
  );
}
