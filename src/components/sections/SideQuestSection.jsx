import { Box, Container, Typography, Paper, LinearProgress, IconButton, Collapse } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AnimatedSection from '../ui/AnimatedSection';

export default function SideQuestSection() {
  const [expanded, setExpanded] = useState(false);
  const sideQuests = [
    { quest: 'hit masters on tft', progress: 65 },
    // { quest: 'reach flow state', progress: 50 },
    // { quest: 'find love', progress: 0 },
    { quest: "finish the hierarchy series", progress: 70 }
  ];

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box id="sidequest" sx={{ py: 5, backgroundColor: 'background.default' }}>
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
              Side Quests
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: 800,
              mx: 'auto',
            }}
          >
            {sideQuests.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? 'rgba(102, 126, 234, 0.03)'
                        : 'rgba(102, 126, 234, 0.08)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: (theme) =>
                        theme.palette.mode === 'light'
                          ? '0 4px 12px rgba(102, 126, 234, 0.15)'
                          : '0 4px 12px rgba(102, 126, 234, 0.25)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5, gap: 1.5 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        flexShrink: 0,
                        boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)',
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '0.95rem',
                        color: 'text.primary',
                        fontWeight: 500,
                        flexGrow: 1,
                      }}
                    >
                      {item.quest}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '0.85rem',
                        color: 'primary.main',
                        fontWeight: 600,
                      }}
                    >
                      {item.progress}%
                    </Typography>
                  </Box>
                  <Box sx={{ position: 'relative', mt: 1 }}>
                    <LinearProgress
                      variant="determinate"
                      value={item.progress}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? 'rgba(102, 126, 234, 0.1)'
                            : 'rgba(102, 126, 234, 0.2)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                          boxShadow: '0 2px 8px rgba(102, 126, 234, 0.4)',
                        },
                      }}
                    />
                  </Box>
                </Paper>
              </AnimatedSection>
            ))}
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}

