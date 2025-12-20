import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Grid,
  Chip,
  Divider,
} from '@mui/material';
import { useParams, Link as RouterLink, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CategoryIcon from '@mui/icons-material/Category';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();

  // Find the project by slug
  const project = projects.find((p) => p.slug === slug);

  // If project not found, redirect to 404
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Back Button */}
        <Button
          component={RouterLink}
          to="/#projects"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4 }}
        >
          Back to Projects
        </Button>

        {/* Hero Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            mb: 4,
            background: (theme) =>
              theme.palette.mode === 'light'
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                : 'linear-gradient(135deg, #9c27b0 0%, #6a1b9a 100%)',
            color: 'white',
            borderRadius: 3,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <CategoryIcon />
            <Typography variant="body1" fontWeight={500}>
              {project.category}
            </Typography>
            {project.featured && (
              <Chip
                label="Featured"
                size="small"
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: 600,
                }}
              />
            )}
          </Box>

          <Typography variant="h2" fontWeight={700} gutterBottom>
            {project.title}
          </Typography>

          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
            {project.shortDescription}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <CalendarTodayIcon sx={{ fontSize: 18 }} />
              <Typography variant="body2">{project.period}</Typography>
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {project.links.live && (
              <Button
                variant="contained"
                startIcon={<LaunchIcon />}
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  },
                }}
              >
                View Live Site
              </Button>
            )}
            {project.links.github && (
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                View Code
              </Button>
            )}
            {project.links.paper && (
              <Button
                variant="outlined"
                startIcon={<ArticleIcon />}
                href={project.links.paper}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Read Paper
              </Button>
            )}
          </Box>
        </Paper>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h4" fontWeight={600} gutterBottom>
                About This Project
              </Typography>
              <Divider sx={{ mb: 3 }} />

              <Typography
                variant="body1"
                color="text.primary"
                sx={{ mb: 4, lineHeight: 1.8, whiteSpace: 'pre-line' }}
              >
                {project.fullDescription}
              </Typography>

              {project.highlights && project.highlights.length > 0 && (
                <>
                  <Typography variant="h5" fontWeight={600} gutterBottom sx={{ mt: 4 }}>
                    Key Highlights
                  </Typography>
                  <Box component="ul" sx={{ pl: 3 }}>
                    {project.highlights.map((highlight, index) => (
                      <Typography
                        key={index}
                        component="li"
                        variant="body1"
                        color="text.primary"
                        sx={{ mb: 1.5, lineHeight: 1.7 }}
                      >
                        {highlight}
                      </Typography>
                    ))}
                  </Box>
                </>
              )}

              {project.impact && (
                <>
                  <Divider sx={{ my: 4 }} />
                  <Typography variant="h5" fontWeight={600} gutterBottom>
                    Impact & Metrics
                  </Typography>
                  <Grid container spacing={2} sx={{ mt: 2 }}>
                    {Object.entries(project.impact).map(([key, value]) => (
                      <Grid item xs={6} sm={4} key={key}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            backgroundColor: (theme) =>
                              theme.palette.mode === 'light'
                                ? 'rgba(156, 39, 176, 0.05)'
                                : 'rgba(171, 71, 188, 0.1)',
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h5" color="primary.main" fontWeight={700}>
                            {value}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ textTransform: 'capitalize' }}
                          >
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            {/* Technologies */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {project.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    sx={{
                      background: (theme) =>
                        theme.palette.mode === 'light'
                          ? 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)'
                          : 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
                      fontWeight: 500,
                    }}
                  />
                ))}
              </Box>
            </Paper>

            {/* Skills Demonstrated */}
            {project.skills && project.skills.length > 0 && (
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Skills Demonstrated
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {project.skills.map((skill) => (
                    <Box
                      key={skill}
                      sx={{
                        py: 1,
                        px: 1.5,
                        mb: 1,
                        borderRadius: 1,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? 'background.default'
                            : 'rgba(255, 255, 255, 0.05)',
                        borderLeft: '3px solid',
                        borderColor: 'primary.main',
                      }}
                    >
                      <Typography variant="body2" fontWeight={500}>
                        {skill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            )}

            {/* Tags */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mt: 3,
                borderRadius: 3,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Tags
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Back to Projects Button */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Button
            component={RouterLink}
            to="/#projects"
            variant="outlined"
            size="large"
            startIcon={<ArrowBackIcon />}
          >
            Back to All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
