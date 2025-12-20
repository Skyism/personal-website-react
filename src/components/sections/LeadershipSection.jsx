import { Box, Container, Typography, Grid, IconButton, Collapse } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AnimatedSection from '../ui/AnimatedSection';
import LeadershipCard from '../cards/LeadershipCard';
import { leadership } from '../../data/leadership';

export default function LeadershipSection() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box id="leadership" sx={{ py: 8, backgroundColor: 'background.default' }}>
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
              Leadership & Involvement
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
            Building communities and developing soft skills through leadership roles
          </Typography>
        </AnimatedSection>

        <Collapse in={expanded} timeout="auto">
          <Grid container spacing={3}>
          {leadership.map((item, index) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <AnimatedSection delay={index * 0.1}>
                <LeadershipCard leadership={item} />
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
        </Collapse>
      </Container>
    </Box>
  );
}
