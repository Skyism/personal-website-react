import { Box, Container, Typography, Grid, Tabs, Tab, IconButton, Collapse } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AnimatedSection from '../ui/AnimatedSection';
import ProjectCard from '../cards/ProjectCard';
import { projects, projectCategories } from '../../data/projects';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [expanded, setExpanded] = useState(false);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const filteredProjects =
    selectedCategory === 'ALL'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Show featured projects first
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box id="projects" sx={{ py: 5, backgroundColor: 'background.default' }}>
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
              Projects
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
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 3, fontSize: '0.875rem' }}
          >
            Explore my work in full-stack development, machine learning, and more
          </Typography>
        </AnimatedSection>

        <Collapse in={expanded} timeout="auto">
          <AnimatedSection delay={0.2}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
              <Tabs
                value={selectedCategory}
                onChange={handleCategoryChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                  },
                }}
              >
                <Tab label="All Projects" value="ALL" />
                <Tab label="Professional" value="PROFESSIONAL" />
                <Tab label="Hackathon" value="HACKATHON" />
                <Tab label="Personal" value="PERSONAL" />
                <Tab label="Academic" value="ACADEMIC" />
              </Tabs>
            </Box>
          </AnimatedSection>

          <Grid container spacing={2}>
            {sortedProjects.map((project, index) => (
              <Grid item xs={12} sm={6} key={project.id}>
                <AnimatedSection delay={index * 0.05}>
                  <ProjectCard project={project} />
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>

          {filteredProjects.length === 0 && (
            <AnimatedSection>
              <Typography
                variant="h6"
                color="text.secondary"
                textAlign="center"
                sx={{ mt: 4 }}
              >
                No projects found in this category.
              </Typography>
            </AnimatedSection>
          )}
        </Collapse>
      </Container>
    </Box>
  );
}
