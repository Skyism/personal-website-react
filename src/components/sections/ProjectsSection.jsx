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

  // Split projects into 3 tiers for masonry layout
  const featuredProjects = sortedProjects.filter(p => p.featured);
  const nonFeatured = sortedProjects.filter(p => !p.featured);
  const midTierProjects = nonFeatured.slice(0, 3);
  const compactProjects = nonFeatured.slice(3);

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
              color="primary.main"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 600,
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

          {/* Tier 1: Featured Projects */}
          {featuredProjects.length > 0 && (
            <Grid container spacing={2} alignItems="stretch">
              {featuredProjects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={project.id} sx={{ display: 'flex' }}>
                  <AnimatedSection delay={index * 0.1} sx={{ width: '100%' }}>
                    <ProjectCard project={project} variant="featured" />
                  </AnimatedSection>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Tier 2: Mid-Tier Projects */}
          {midTierProjects.length > 0 && (
            <Grid container spacing={2} alignItems="stretch" sx={{ mt: 2 }}>
              {midTierProjects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={project.id} sx={{ display: 'flex' }}>
                  <AnimatedSection delay={0.3 + index * 0.1} sx={{ width: '100%' }}>
                    <ProjectCard project={project} variant="midTier" />
                  </AnimatedSection>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Tier 3: Compact Projects */}
          {compactProjects.length > 0 && (
            <Grid container spacing={2} alignItems="stretch" sx={{ mt: 2 }}>
              {compactProjects.map((project, index) => (
                <Grid item xs={12} sm={6} md={4} key={project.id} sx={{ display: 'flex' }}>
                  <AnimatedSection delay={0.6 + index * 0.1} sx={{ width: '100%' }}>
                    <ProjectCard project={project} variant="compact" />
                  </AnimatedSection>
                </Grid>
              ))}
            </Grid>
          )}

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
