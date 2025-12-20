import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  IconButton,
  Collapse,
} from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AnimatedSection from '../ui/AnimatedSection';
import ScienceIcon from '@mui/icons-material/Science';
import ArticleIcon from '@mui/icons-material/Article';
import { research } from '../../data/research';

export default function ResearchSection() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box id="research" sx={{ py: 5 }}>
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
              Research
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
            Contributing to machine learning and accessibility research
          </Typography>
        </AnimatedSection>

        <Collapse in={expanded} timeout="auto">
          <Grid container spacing={2}>
          {research.map((item, index) => (
            <Grid item xs={12} md={6} key={item.id}>
              <AnimatedSection delay={index * 0.1}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'light'
                          ? '0 12px 40px rgba(0, 0, 0, 0.15)'
                          : '0 12px 40px rgba(156, 39, 176, 0.25)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}>
                      <Box
                        sx={{
                          mr: 1.5,
                          p: 1,
                          borderRadius: 1.5,
                          background:
                            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ScienceIcon sx={{ color: 'white', fontSize: 22 }} />
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="h6"
                          component="h3"
                          fontWeight={600}
                          gutterBottom
                          sx={{ fontSize: '1rem' }}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="primary.main" fontWeight={600} sx={{ fontSize: '0.875rem' }}>
                          {item.lab || item.institution}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.8rem' }}>
                          {item.period}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '0.85rem', mb: 1 }}>
                      {item.description}
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, mb: 1.5 }}>
                      {item.responsibilities.slice(0, 2).map((resp, idx) => (
                        <Typography
                          key={idx}
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 0.25, fontSize: '0.85rem' }}
                        >
                          {resp}
                        </Typography>
                      ))}
                    </Box>

                    {item.publication && (
                      <Box
                        sx={{
                          p: 1.5,
                          mb: 1.5,
                          borderRadius: 2,
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                              ? 'rgba(156, 39, 176, 0.05)'
                              : 'rgba(171, 71, 188, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                        }}
                      >
                        <ArticleIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                        <Box>
                          <Typography variant="body2" fontWeight={600} sx={{ fontSize: '0.85rem' }}>
                            Published in {item.publication.journal}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                            {item.publication.year}
                          </Typography>
                        </Box>
                      </Box>
                    )}

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
                      {item.technologies.slice(0, 6).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            fontSize: '0.75rem',
                            height: 24,
                            background: (theme) =>
                              theme.palette.mode === 'light'
                                ? 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)'
                                : 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
                          }}
                        />
                      ))}
                    </Box>

                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1.5,
                        flexWrap: 'wrap',
                        mt: 1.5,
                        pt: 1.5,
                        borderTop: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      {item.impact.dataPoints && (
                        <Box>
                          <Typography variant="body1" color="primary.main" fontWeight={700} sx={{ fontSize: '0.95rem' }}>
                            {item.impact.dataPoints}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                            Data Points
                          </Typography>
                        </Box>
                      )}
                      {item.impact.accuracy && (
                        <Box>
                          <Typography variant="body1" color="primary.main" fontWeight={700} sx={{ fontSize: '0.95rem' }}>
                            {item.impact.accuracy}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                            Accuracy
                          </Typography>
                        </Box>
                      )}
                      {item.impact.frequency && (
                        <Box>
                          <Typography variant="body1" color="primary.main" fontWeight={700} sx={{ fontSize: '0.95rem' }}>
                            {item.impact.frequency}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                            Sensor Freq
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
        </Collapse>
      </Container>
    </Box>
  );
}
