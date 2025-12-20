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
    <Box id="research" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 2 }}>
            <Typography
              variant="h2"
              sx={{
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
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 4 }}
          >
            Contributing to machine learning and accessibility research
          </Typography>
        </AnimatedSection>

        <Collapse in={expanded} timeout="auto">
          <Grid container spacing={4}>
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
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                      <Box
                        sx={{
                          mr: 2,
                          p: 1.5,
                          borderRadius: 2,
                          background:
                            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ScienceIcon sx={{ color: 'white', fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="h5"
                          component="h3"
                          fontWeight={600}
                          gutterBottom
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body1" color="primary.main" fontWeight={600}>
                          {item.lab || item.institution}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.period}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography variant="body2" color="text.secondary" paragraph>
                      {item.description}
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                      {item.responsibilities.slice(0, 2).map((resp, idx) => (
                        <Typography
                          key={idx}
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 0.5 }}
                        >
                          {resp}
                        </Typography>
                      ))}
                    </Box>

                    {item.publication && (
                      <Box
                        sx={{
                          p: 2,
                          mb: 2,
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
                        <ArticleIcon sx={{ color: 'primary.main' }} />
                        <Box>
                          <Typography variant="body2" fontWeight={600}>
                            Published in {item.publication.journal}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.publication.year}
                          </Typography>
                        </Box>
                      </Box>
                    )}

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
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
                        gap: 2,
                        flexWrap: 'wrap',
                        mt: 2,
                        pt: 2,
                        borderTop: '1px solid',
                        borderColor: 'divider',
                      }}
                    >
                      {item.impact.dataPoints && (
                        <Box>
                          <Typography variant="h6" color="primary.main" fontWeight={700}>
                            {item.impact.dataPoints}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Data Points
                          </Typography>
                        </Box>
                      )}
                      {item.impact.accuracy && (
                        <Box>
                          <Typography variant="h6" color="primary.main" fontWeight={700}>
                            {item.impact.accuracy}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Accuracy
                          </Typography>
                        </Box>
                      )}
                      {item.impact.frequency && (
                        <Box>
                          <Typography variant="h6" color="primary.main" fontWeight={700}>
                            {item.impact.frequency}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
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
