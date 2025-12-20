import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Collapse,
  IconButton,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ExperienceCard({ experience }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
        minHeight: expanded ? 'auto' : 110,
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, pl: 3, display: 'flex', flexDirection: 'column', py: 1.5 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            mb: 1,
            cursor: 'pointer',
            minHeight: 70,
          }}
          onClick={handleExpandClick}
        >
          <Box
            sx={{
              mr: 1.5,
              p: 0.75,
              borderRadius: 1.5,
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)'
                  : 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {experience.type === 'teaching' ? (
              <SchoolIcon sx={{ color: 'primary.main' }} />
            ) : (
              <WorkIcon sx={{ color: 'primary.main' }} />
            )}
          </Box>
          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography variant="h6" component="h3" fontWeight={600} sx={{ lineHeight: 1.2, mb: 0.25, fontSize: '1.15rem' }}>
              {experience.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ lineHeight: 1.3, fontSize: '0.95rem' }}>
              {experience.company}
            </Typography>
          </Box>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              handleExpandClick();
            }}
            sx={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
              flexShrink: 0,
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, minHeight: 20, mb: expanded ? 1.5 : 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <CalendarTodayIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
              {experience.period}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOnIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
              {experience.location}
            </Typography>
          </Box>
        </Box>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '0.875rem', mb: 1.5 }}>
            {experience.description}
          </Typography>

          <Box component="ul" sx={{ pl: 2, mb: 1.5 }}>
            {experience.responsibilities.map((resp, index) => (
              <Typography
                key={index}
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ mb: 0.25, fontSize: '0.875rem' }}
              >
                {resp}
              </Typography>
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {experience.technologies.slice(0, 5).map((tech) => (
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
            {experience.technologies.length > 5 && (
              <Chip
                label={`+${experience.technologies.length - 5}`}
                size="small"
                sx={{ fontSize: '0.75rem', height: 24 }}
              />
            )}
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
}
